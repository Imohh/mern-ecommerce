/**
 *
 * Checkout
 *
 */

import React, {useState, useEffect} from 'react';

import Button from '../../Common/Button';

// stripe
import StripeCheckout from 'react-stripe-checkout'
const KEY = "pk_test_51MpOePL97tBOgFcnHnPCTpLVPRqPdylcJ3pTdCPGFbmpMsa3ZYSrcdLiSa4ZcEbAHlX6TmpVgo1UuOl6TO9RKbvi00uP51bPxH"

const Checkout = props => {
  const { authenticated, handleShopping, handleCheckout, placeOrder } = props;
  const [stripeToken, setStripeToken] = useState(null)

  const onToken = (token) => {
    setStripeToken(token)
    console.log(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try{
        const res = axios.post(
          "http://localhost:3000/api/payment",
        {
          tokenId: stripeToken.id,
          amount: 20000,
          }
        );
        console.log(res.data)
      } catch(err){
        console.log(err)
      }
    };
    stripeToken && makeRequest
  }, [stripeToken])

  return (
    <div className='easy-checkout'>
      <div className='checkout-actions'>
        <Button
          variant='primary'
          text='Continue shopping'
          onClick={() => handleShopping()}
        />
        {authenticated ? (
          <StripeCheckout 
            name="eminence" 
            image="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg"
            billingAddress
            shippingAddress
            description="Your total is $20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
          >
            <Button
              variant='primary'
              text='Place Order'
              // onClick={() => placeOrder()}
            />
          </StripeCheckout>

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
