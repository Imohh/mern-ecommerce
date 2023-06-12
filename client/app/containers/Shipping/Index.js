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
      
        <div className="shipping-section">

          <div className="first-shipping-section">
            <div className="containers">
              <div className="row">
                <div className="col-lg-6 col-sm-12 shipping-text-section">
                  <h2>Your Items will get to you anywhere in the world</h2>
                  <p>we outsource this service to DHL to handle and we trust their ability to always deliver hence the partnership</p>
                  <button type="text" className="shipping-btn">Shipping status</button>
                </div>

                <div className="col-lg-6 col-sm-12">
                  <img src="images/logistics.png" alt="logistics"/>
                </div>
              </div>
            </div>
          </div>

        </div>



      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Shipping);
