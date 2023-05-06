/**
 *
 * Shipping
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

class Shipping extends React.PureComponent {
  render() {
    return (
      <>
      

        <h2>Shipping page</h2>



      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Shipping);
