/**
 *
 * Unsubscribe
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import landscape from '../../images/20230903_015023.jpg'

class About extends React.PureComponent  {
  render() {

    return (
      <>
        <div className="unsubscribe-section">
          <div style={{
            height: "400px",
            backgroundImage: `url(${landscape})`,
            backgroundSize: "cover",
            backgroundPosition: "center", 
          }}>
          </div>
          <div className="unsubscribe-form-section" style={{width: "70%", margin: "auto"}}>
            <p style={{fontSize: "14px"}}>Founded in Florence, Italy, in 1921, EminenceByGtx is one of the world’s leading luxury brands. Following the House’s centenary, EminenceByGtx forges ahead continuing to redefine luxury while celebrating creativity, Italian craftsmanship, and innovation.</p>

            <p style={{fontSize: "14px"}}>EminenceByGtx is part of the global luxury group Kering, which manages renowned Houses in fashion, leather goods, jewelry, and eyewear.</p>
            
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return;
};
export default connect(mapStateToProps, actions)(About);