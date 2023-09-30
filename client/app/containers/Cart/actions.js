/*
 *
 * Cart actions
 *
 */

import { push } from 'connected-react-router';
import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
  HANDLE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  HANDLE_CART_TOTAL,
  SET_CART_ID,
  CLEAR_CART,
  SET_SHIPPING_FEE,
  UPDATE_CART_TOTAL,
} from './constants';

import {
  SET_PRODUCT_SHOP_FORM_ERRORS,
  RESET_PRODUCT_SHOP
} from '../Product/constants';
import { FETCH_ADDRESSES } from '../Address/constants'

import { CART_ID, CART_ITEMS, CART_TOTAL, EMAIL_PROVIDER } from '../../constants';
import handleError from '../../utils/error';
import { allFieldsValidation } from '../../utils/validation';
import { toggleCart } from '../Navigation/actions';
// import { fetchAddresses } from '../Address/actions'



// Handle Add To Cart
export const handleAddToCart = (product, total) => {
  return (dispatch, getState) => {
    product.quantity = Number(getState().product.productShopData.quantity);
    product.size = String(getState().product.productShopData.size);
    product.totalPrice = product.quantity * product.price;
    product.totalPrice = parseFloat(product.totalPrice.toFixed(2));
    const inventory = getState().product.storeProduct.inventory;



    const result = calculatePurchaseQuantity(inventory);

    const rules = {
      quantity: `min:1|max:${result}`
    };

    const { isValid, errors } = allFieldsValidation(product, rules, {
      'min.quantity': 'Quantity must be at least 1.',
      'max.quantity': `Quantity may not be greater than ${result}.`
    });

    if (!isValid) {
      return dispatch({ type: SET_PRODUCT_SHOP_FORM_ERRORS, payload: errors });
    }

    dispatch({
      type: RESET_PRODUCT_SHOP
    });

    dispatch({
      type: ADD_TO_CART,
      payload: product
    });

    const cartItems = JSON.parse(localStorage.getItem(CART_ITEMS));
    let newCartItems = [];
    if (cartItems) {
      newCartItems = [...cartItems, product];
    } else {
      newCartItems.push(product);
    }
    localStorage.setItem(CART_ITEMS, JSON.stringify(newCartItems));

    dispatch(calculateCartTotal());
    dispatch(toggleCart());
  };
};

// Handle Remove From Cart
export const handleRemoveFromCart = product => {
  return (dispatch, getState) => {
    const cartItems = JSON.parse(localStorage.getItem(CART_ITEMS));
    const newCartItems = cartItems.filter(item => item._id !== product._id);
    localStorage.setItem(CART_ITEMS, JSON.stringify(newCartItems));

    dispatch({
      type: REMOVE_FROM_CART,
      payload: product
    });
    dispatch(calculateCartTotal());
    // dispatch(toggleCart());
  };
};

export const calculateCartTotal = () => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;

    let total = 0;

    cartItems.map(item => {
      total += item.price * item.quantity;
    });

    total = parseFloat(total.toFixed(2));
    localStorage.setItem(UPDATE_CART_TOTAL, total); // this is where the shippingfee should be added and it will reflect in stripe checkout
    dispatch({
      type: HANDLE_CART_TOTAL,
      payload: total
    });
  };
};

export const setShippingFee = (fee) => {
  return (dispatch) => {
    localStorage.setItem(SET_SHIPPING_FEE, fee);
    dispatch({
      type: SET_SHIPPING_FEE,
      payload: fee,
    });
  };
};

// set cart store from local storage
export const handleCart = () => {
  const cart = {
    cartItems: JSON.parse(localStorage.getItem(CART_ITEMS)),
    cartTotal: localStorage.getItem(CART_TOTAL),
    cartId: localStorage.getItem(CART_ID)
  };

  return (dispatch, getState) => {
    if (cart.cartItems != undefined) {
      dispatch({
        type: HANDLE_CART,
        payload: cart
      });
      dispatch(calculateCartTotal());
    }
  };
};

export const handleCheckout = () => {
  return (dispatch, getState) => {
    const successfulOptions = {
      title: `Please Login to proceed to checkout`,
      position: 'tr',
      autoDismiss: 1
    };

    dispatch(toggleCart());
    dispatch(push('/login'));
    dispatch(success(successfulOptions));
  };
};

// Continue shopping use case
export const handleShopping = () => {
  return (dispatch, getState) => {
    dispatch(push('/shop'));
    dispatch(toggleCart());
  };
};

// create cart id api
export const getCartId = () => {
  return async (dispatch, getState) => {
    try {
      const cartId = localStorage.getItem(CART_ID);
      const cartItems = getState().cart.cartItems;
      const products = getCartItems(cartItems);

      // create cart id if there is no one
      if (!cartId) {
        const response = await axios.post(`/api/cart/add`, { products });

        dispatch(setCartId(response.data.cartId));
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const setCartId = cartId => {
  return (dispatch, getState) => {
    localStorage.setItem(CART_ID, cartId);
    dispatch({
      type: SET_CART_ID,
      payload: cartId
    });
  };
};

export const clearCart = () => {
  return (dispatch, getState) => {
    localStorage.removeItem(CART_ITEMS);
    localStorage.removeItem(CART_TOTAL);
    localStorage.removeItem(CART_ID);

    dispatch({
      type: CLEAR_CART
    });
  };
};

const getCartItems = cartItems => {
  const newCartItems = [];
  cartItems.map(item => {
    const newItem = {};
    newItem.quantity = item.quantity;
    newItem.size = item.size;
    newItem.price = item.price;
    newItem.taxable = item.taxable;
    newItem.product = item._id;
    newCartItems.push(newItem);
  });

  return newCartItems;
};

export const updateCartTotal = total => ({
  type: UPDATE_CART_TOTAL,
  payload: total,
});

export const handlePayments = user => {
  return async (dispatch, getState) => {
    const storedTotal = JSON.parse(localStorage.getItem('shippingTotal'));
    const cartTotal = parseFloat(localStorage.getItem(CART_TOTAL));
    const cartItems = getState().cart.cartItems;
    const productNames = cartItems.map(item => item.name);

    // console.log('cartItems:', cartItems)
    // console.log(user.email)

  }
}

export const handlePayment = user => {
  return async (dispatch, getState) => {  
    // const cartTotal = parseFloat(localStorage.getItem(CART_TOTAL));
    const total = JSON.parse(localStorage.getItem('shippingTotal'));
    const cartItems = getState().cart.cartItems;
    const productNames = cartItems.map(item => item.name);

    console.log('cartItems:', cartItems)
    try {
      const response = await axios.post('/api/stripe/create-checkout-session', {
        cartItems,
        total,
        productNames,
        user,
      })

      window.location.href = response.data.url
    } catch (error) {
      console.log('Error, error')
    }
  }
}


const calculatePurchaseQuantity = inventory => {
  if (inventory === 1) {
    return 1;
  } else if (inventory === 2) {
    return 2;
  } else if (inventory === 3) {
    return 3;
  } else if (inventory === 4) {
    return 4;
  } else if (inventory === 5) {
    return 5;
  } else if (inventory === 6) {
    return 6;
  } else if (inventory === 7) {
    return 7;
  } else if (inventory === 8) {
    return 8;
  } else if (inventory === 9) {
    return 9;
  } else if (inventory === 10) {
    return 10;
  } else if (inventory === 11) {
    return 11;
  } else if (inventory === 12) {
    return 12;
  } else if (inventory === 13) {
    return 13;
  } else if (inventory === 14) {
    return 14;
  } else {
    return 50;
  }
};