/**
 *
 * Checkout
 *
 */

import React, {useState, useEffect} from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { PaystackButton } from 'react-paystack'
import axios from 'axios'

import Button from '../../Common/Button';


const Checkout = props => {
  const { authenticated, handleShopping, handleCheckout, handlePayment, handlePayments, placeOrder, cartTotal, cartItems } = props;
  const publicKey = "pk_test_7114661f512e87772aefeab61d6811334b084c85"; // PAYSTACK key
  const amount = cartTotal * 100 * 750; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("")
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const location = useLocation()

  // STRIPE PAYMENT
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success") || location.pathname === '/success') {
      setMessage("Order placed! You will receive an email confirmation.");
      setPaymentSuccess(true)
      placeOrder();
      alert("Order placed! You will receive an email confirmation.")
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [location.pathname]);

  // Use the paymentSuccess flag to conditionally render content
  if (paymentSuccess) {
    return (
      <div>
        {message}
        <Redirect to="/shop" />
      </div>
    );
  }

  return (
    <div className='easy-checkout'>
      <div className='checkout-actions'>
        <Button
          variant='primary'
          text='Continue shopping'
          onClick={() => handleShopping()}
        />
        {authenticated ? (
            <Button
              variant='primary'
              text='Place Order'
              onClick={() => handlePayment()}
            />
        ) : (
          <Button
            variant='primary'
            text='Proceed To Checkout'
            onClick={() => handleCheckout()}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;