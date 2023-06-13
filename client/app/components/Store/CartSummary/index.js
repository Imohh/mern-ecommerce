/**
 *
 * CartSummary
 *
 */

import React from 'react';

import { Container, Row, Col } from 'reactstrap';

const CartSummary = props => {
  const { cartTotal, cartItems } = props;

  return (
    <div className='cart-summary'>
        <Row className='mb-2 summary-item'>
          <Col xs='9'>
            <p className='summary-label'>Free Shipping</p>
          </Col>
          <Col xs='3' className='text-right'>
            <p className='summary-value'>$0</p>
          </Col>
        </Row>
        {cartItems.map((item, index) => (
        <Row key={index} className='mb-2 summary-item'>
          <Col xs='9'>
            <p className='summary-label'>Size</p>
          </Col>
          <Col xs='3' className='text-right'>
            <p className='summary-value'>{` ${item.size}`}</p>
          </Col>
        </Row>
        ))}
        <Row className='mb-2 summary-item'>
          <Col xs='9'>
            <p className='summary-label'>Total</p>
          </Col>
          <Col xs='3' className='text-right'>
            <p className='summary-value'>${cartTotal}</p>
          </Col>
        </Row>
    </div>
  );
};

export default CartSummary;
