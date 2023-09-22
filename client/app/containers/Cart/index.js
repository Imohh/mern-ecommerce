/*
 *
 * Cart
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import CartList from '../../components/Store/CartList';
import CartSummary from '../../components/Store/CartSummary';
import Checkout from '../../components/Store/Checkout';
import { BagIcon, CloseIcon } from '../../components/Common/Icon';
import Button from '../../components/Common/Button';

import { fetchAddress, fetchAddresses } from '../Address/actions';

class Cart extends React.PureComponent {
  // componentDidMount() {
  //   this.props.fetchAddresses();
  // } // THIS IS THE REASON THE WEBSITE WAS NOT LOADING PROPERLY WHEN NOT LOGGED IN
  componentDidMount() {
    if(this.props.authenticated) {
      this.props.fetchAddresses()
    }
  }
  render() {
    const {
      isCartOpen,
      cartItems,
      cartTotal,
      toggleCart,
      handleShopping,
      handleCheckout,
      handlePayment,
      handlePayments,
      handleRemoveFromCart,
      placeOrder,
      authenticated,
      addresses,
      order
    } = this.props;

    return (
      <div className='cart'>
        <div className='cart-header'>
          {isCartOpen && (
            <Button
              borderless
              variant='empty'
              ariaLabel='close the cart'
              icon={<CloseIcon />}
              onClick={toggleCart}
            />
          )}
        </div>
        {cartItems.length > 0 ? (
          <div className='cart-body'>
            <CartList
              toggleCart={toggleCart}
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </div>
        ) : (
          <div className='empty-cart'>
            <BagIcon />
            <p>Your shopping cart is empty</p>
          </div>
        )}
        {cartItems.length > 0 && (
          <div className='cart-checkout'>
            <CartSummary 
              addresses={addresses}
              cartTotal={cartTotal} 
              cartItems={cartItems}
              order={order}
            />
            <Checkout
              handleShopping={handleShopping}
              handleCheckout={handleCheckout}
              placeOrder={placeOrder}
              authenticated={authenticated}
              cartTotal={cartTotal}
              // total={total}
              cartItems={cartItems}
              handlePayment={handlePayment}
              handlePayments={handlePayments}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCartOpen: state.navigation.isCartOpen,
    cartItems: state.cart.cartItems,
    cartTotal: state.cart.cartTotal,
    authenticated: state.authentication.authenticated
  };
};

export default connect(mapStateToProps, actions)(Cart);