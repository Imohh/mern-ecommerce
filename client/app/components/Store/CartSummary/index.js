/**
 *
 * CartSummary
 *
 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { updateCartTotal, handlePayments } from '../../../containers/Cart/actions'

const CartSummary = props => {
  const { cartTotal, cartItems } = props;
  const addresses = useSelector((state) => state.address.addresses);
  const order = useSelector((state) => state.order.order);
  const [ shippingFee, setShippingFee ] = useState(0);
  const [ newTotal, setNewTotal ] = useState(0);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    // Calculate the shipping fee based on the country
    const country = addresses.length > 0 ? addresses[0].country.trim().toLowerCase() : ''; // Assuming the country is in the first address

    if (cartTotal >= 120) {
      setShippingFee(0)
    } else if (country === 'nigeria' || country === 'united kingdom') {
      setShippingFee(0)
      console.log('cartTotal greater than 120')
    } else {
      setShippingFee(5 * totalQuantity)
    }


    // Calculate the total when shippingFee or cartTotal changes
    const total = shippingFee + cartTotal;
    setNewTotal(total);

    // Dispatch the action with the new total
    dispatch(updateCartTotal(total));

    dispatch(handlePayments(total))

    localStorage.setItem('shippingFee', shippingFee);
    localStorage.setItem('cartTotal', cartTotal);

  }, [shippingFee, cartItems, addresses, cartTotal, dispatch]);

  localStorage.setItem('shippingTotal', JSON.stringify(newTotal));

  return (
    <div className='cart-summary'>
        <Row className='mb-2 summary-item'>
          <Col xs='9'>
            <p className='summary-label'>Shipping fee</p>
          </Col>
          <Col xs='3' className='text-right'>
            <p className='summary-value'>£{shippingFee}</p>
          </Col>
        </Row>
        <Row className='mb-2 summary-item'>
          <Col xs='9'>
            <p className='summary-label'>Total</p>
          </Col>
          <Col xs='3' className='text-right'>
            <p className='summary-value'>£{newTotal}</p>
          </Col>
        </Row>
    </div>
  );
};

export default CartSummary;