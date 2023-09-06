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

class Unsubscribe extends React.PureComponent  {
  render() {

    const { email, unsubscribeChange, unsubscribeToNewsletter, formErrors } =
      this.props;

    const handleSubmit = event => {
      event.preventDefault();
      unsubscribeToNewsletter();
    };


    


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
          <div className="unsubscribe-form-section">
            <p>please enter your email address below and we will remove you from our mailing list.</p>
            <form onSubmit={handleSubmit}>
              <input 
                type={'text'}
                name={'email'} 
                value={email}
                onInputChange={(name, value) => {
                  unsubscribeChange(name, value);
                }}
                placeholder={'Please Enter Your Email'}
              />
              <button>unsubscribe</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Unsubscribe);