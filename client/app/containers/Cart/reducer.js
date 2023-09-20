/*
 *
 * Cart reducer
 *
 */

import {
  HANDLE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  HANDLE_CART_TOTAL,
  SET_CART_ID,
  CLEAR_CART,
  SET_SHIPPING_FEE,
} from './constants';

const initialState = {
  cartItems: [],
  cartTotal: 0,
  cartId: '',
  shippingFee: 7,
};

const cartReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case ADD_TO_CART:
      newState = {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };

      return newState;
    case REMOVE_FROM_CART:
      let itemIndex = state.cartItems.findIndex(
        x => x._id == action.payload._id
      );

      newState = {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, itemIndex),
          ...state.cartItems.slice(itemIndex + 1)
        ]
      };

      return newState;
    case HANDLE_CART_TOTAL:
      newState = {
        ...state,
        cartTotal: action.payload,
        shippingFee: action.payload
      };

      return newState;
    case HANDLE_CART:
      newState = {
        ...state,
        cartItems: action.payload.cartItems,
        cartTotal: action.payload.cartTotal,
        cartId: action.payload.cartId,
        shippingFee: action.payload.shippingFee
      };
      return newState;
    case SET_CART_ID:
      newState = {
        ...state,
        cartId: action.payload
      };
      return newState;
    case CLEAR_CART:
      newState = {
        ...state,
        cartItems: [],
        cartTotal: 0,
        shippingFee: 0,
        cartId: ''
      };
      return newState;
    case SET_SHIPPING_FEE:
      newState = {
        ...state,
        shippingFee: 0,
      };
      return newState;

    default:
      return state;
  }
};

export default cartReducer;
