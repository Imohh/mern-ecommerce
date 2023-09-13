/**
 *
 * OrderSummary
 *
 */

import React from 'react';

import { Col } from 'reactstrap';

const OrderSummary = props => {
  const { order } = props;

  const pound = '\u00A3'

  return (
    <Col className='order-summary pt-3'>
      <h2>Order Summary</h2>
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Subtotal</p>
        <p className='summary-value ml-auto'>{pound}{order.total}</p>
      </div>
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Est. Sales Tax</p>
        <p className='summary-value ml-auto'>{pound}{order.totalTax}</p>
      </div>

      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Shipping & Handling</p>
        <p className='summary-value ml-auto'>{pound}0</p>
      </div>

      <hr />
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Total</p>
        <p className='summary-value ml-auto'>{pound}{order.totalWithTax}</p>
      </div>
    </Col>
  );
};

export default OrderSummary;
