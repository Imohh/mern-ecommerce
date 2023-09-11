/**
 *
 * Success
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

class Success extends React.PureComponent {
  render() {
    return (
      <>
        <div style={{paddingTop: "100px"}}>
          <h2>Your order is being prepared. Thanks for your patronage!</h2>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Success);
