/**
 *
 * CartSummary
 *
 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { updateCartTotal } from '../../../containers/Cart/actions'

const CartSummary = props => {
  const { cartTotal, cartItems } = props;
  const addresses = useSelector((state) => state.address.addresses);
  const [ shippingFee, setShippingFee ] = useState(0);
  const [ total, setTotal ] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    // Calculate the shipping fee based on the country
    const country = addresses.length > 0 ? addresses[0].country.trim().toLowerCase() : ''; // Assuming the country is in the first address

    if(country === 'nigeria' || country === 'united kingdom') {
      setShippingFee(0)
    } else {
      setShippingFee(4)
    }

  }, [addresses]);

  useEffect(() => {
    // Calculate the total when shippingFee or cartTotal changes
    const newTotal = shippingFee + cartTotal;
    setTotal(newTotal);

    // Dispatch the action with the new total
    dispatch(updateCartTotal(newTotal));

  }, [shippingFee, cartTotal, dispatch]);

  // const total = shippingFee + cartTotal

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
            <p className='summary-value'>£{total}</p>
          </Col>
        </Row>
    </div>
  );
};

export default CartSummary;