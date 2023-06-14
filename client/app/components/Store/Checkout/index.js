/**
 *
 * Checkout
 *
 */

import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { PaystackButton } from 'react-paystack'

import Button from '../../Common/Button';


const Checkout = props => {
  const { authenticated, handleShopping, handleCheckout, placeOrder, cartTotal } = props;
  const publicKey = "pk_test_7114661f512e87772aefeab61d6811334b084c85";
  const amount = cartTotal * 100 * 750; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");






  // PAYSTACK PAYMENT
  const handlePaystackSuccessAction = (reference) => {
      alert("Thanks for doing business with us! Come back soon!!");
    <Redirect to='/' />
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };

    const handlePaystackCloseAction = () => {
      alert("Wait! Don't leave ")
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }

    const componentProps = {
    reference: (new Date()).getTime().toString(),
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Pay Now",
      onSuccess: (reference) => {
        handlePaystackSuccessAction(reference);
        placeOrder();
      },
      onClose: handlePaystackCloseAction,
      // onSuccess: () =>
      //   alert("Thanks for doing business with us! Come back soon!!"),
      // onClose: () => alert("Wait! Don't leave :("),
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

          <a className="btn" href="#open-modals">Place Order</a>
        ) : (
          <Button
            variant='primary'
            text='Proceed To Checkout'
            onClick={() => handleCheckout()}
          />
        )}
      </div>
      <div id="open-modals" className="modal-window" style={{marginTop: "10%"}}>
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
      </div>
    </div>
  );
};

export default Checkout;