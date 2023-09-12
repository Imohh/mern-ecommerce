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
  const { authenticated, handleShopping, handleCheckout, handlePayment, placeOrder, cartTotal, cartItems } = props;
  const publicKey = "pk_test_7114661f512e87772aefeab61d6811334b084c85"; // PAYSTACK key
  const amount = cartTotal * 100 * 750; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("")
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const location = useLocation()

// PAYSTACK PAYMENT WORKS FINE
  // const handlePaystackSuccessAction = (reference) => {
  //     alert("Thanks for doing business with us! Come back soon!!");
  //   <Redirect to='/' />
  //     // Implementation for whatever you want to do with reference and after success call.
  //     console.log(reference);
  //   };

  //   const handlePaystackCloseAction = () => {
  //     alert("Wait! Don't leave ")
  //     // implementation for  whatever you want to do when the Paystack dialog closed.
  //     console.log('closed')
  //   }

  //   const componentProps = {
  //   reference: (new Date()).getTime().toString(),
  //     email,
  //     amount,
  //     metadata: {
  //       name,
  //       phone,
  //     },
  //     publicKey,
  //     text: "Pay Now",
  //     onSuccess: (reference) => {
  //       handlePaystackSuccessAction(reference);
  //       placeOrder();
  //     },
  //     onClose: handlePaystackCloseAction,
  //     // onSuccess: () =>
  //     //   alert("Thanks for doing business with us! Come back soon!!"),
  //     // onClose: () => alert("Wait! Don't leave :("),
// }

  
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
            // <Button
            //   variant='primary'
            //   text='Place Order'
            //   onClick={() => placeOrder()}
            // />
            <Button
              variant='primary'
              text='Place Order'
              onClick={() => handlePayment()}
            />

          // <a className="btn" href="#open-modals">Place Order</a>
        ) : (
          <Button
            variant='primary'
            text='Proceed To Checkout'
            onClick={() => handleCheckout()}
          />
        )}
      </div>
      {/*<div id="open-modals" className="modal-window" style={{marginTop: "10%"}}>
        <div style={{marginTop: "5%"}}>
          <a href="#" title="Close" className="modal-close">Close</a>
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default Checkout;