/**
 *
 * FAQ
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

class Faq extends React.PureComponent {
  render() {
    return (
      <>

        <div className="faq-section">
          <Row xs='12'>
            <Col
              xs={{ size: 12, order: 1 }}
              sm={{ size: 12, order: 1 }}
              md={{ size: 12, order: 1 }}
              lg={{ size: 12, order: 1 }}
            >
              <h2>FAQ Page</h2>
            </Col>
            <Col
              xs={{ size: 12, order: 1 }}
              sm={{ size: 12, order: 1 }}
              md={{ size: 12, order: 1 }}
              lg={{ size: 6, order: 1 }}
            >
              <div className="first-section">
                <div className="col-lg-6">
                  <h2>first section</h2>
                </div>
              </div>
            </Col>

            <Col
              xs={{ size: 12, order: 1 }}
              sm={{ size: 12, order: 1 }}
              md={{ size: 12, order: 1 }}
              lg={{ size: 6, order: 1 }}
            >
              <div className="second-section">
                <div className="col-lg-6">
                  <h2>second section</h2>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        

        



      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Faq);
