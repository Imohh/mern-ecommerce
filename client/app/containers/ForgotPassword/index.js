/*
 *
 * ForgotPassword
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class ForgotPassword extends React.PureComponent {
  render() {
    const {
      authenticated,
      forgotFormData,
      formErrors,
      forgotPasswordChange,
      forgotPassowrd
    } = this.props;

    if (authenticated) return <Redirect to='/dashboard' />;

    const handleSubmit = event => {
      event.preventDefault();
      forgotPassowrd();
    };

    return (

      <>

        <div className='login-forms'>
          <Row>
            <Col
              xs={{ size: 12, order: 2 }}
              md={{ size: '6', order: 1 }}
              className='p-0'
            >
              <div id="slider">
                <figure>
                  <div className="image"><img src="https://www.essence.com/wp-content/uploads/2020/12/Oliver-Kumbi-GQ.com-by-Daniel-Jackson.jpg" height="300px" alt="Slider 1" /></div>
                  <div className="image"><img src="https://www.essence.com/wp-content/uploads/2020/12/Luka-Sabbat-SID-Pre-Fall-2015-Ph-Yu-Cong.jpg" height="300px"alt="Slider 2" /></div>
                  <div className="image"><img src="https://www.essence.com/wp-content/uploads/2020/12/Oliver-Kumbi-GQ.com-by-Daniel-Jackson.jpg" height="300px" alt="Slider 3" /></div>
                  <div className="image"><img src="https://www.essence.com/wp-content/uploads/2020/12/Luka-Sabbat-SID-Pre-Fall-2015-Ph-Yu-Cong.jpg" height="300px" alt="Slider 4" /></div>
                </figure>
              </div>
            </Col>

            <Col
              xs={{ size: 12, order: 1 }}
              md={{ size: '6', order: 2 }}
              className='login-right'
            >
              <h3 className="forgot-password-header">Forgot Password</h3>
              <form onSubmit={handleSubmit} noValidate>
                <Row>
                  <Col
                    xs={{ size: 12, order: 2 }}
                    md={{ size: '12', order: 1 }}
                    className='p-0'
                    style={{margin: "auto"}}
                  >
                    <Col xs='12' md='12'>
                      <Input
                        type={'text'}
                        error={formErrors['email']}
                        name={'email'}
                        placeholder={'Please Enter Your Email'}
                        value={forgotFormData.email}
                        onInputChange={(name, value) => {
                          forgotPasswordChange(name, value);
                        }}
                      />
                      
                    </Col>
                    <Col xs='12' md='12'>
                      <Button
                        type='submit'
                        className="custom-btn-dark login-btn"
                        text='Send Email'
                        style={{color: "#fff"}}
                      />
                    </Col>
                  </Col>
                </Row>

                <div className="sign-up-button">
                  <Link className='forgot-password-links' to={'/login'}>
                    Back to login
                  </Link>
                </div>
              </form>
            </Col>
          </Row>
        </div>









      {/*<div className='forgot-password-form'>
        <h3>Forgot Password</h3>
        <hr />
        <form onSubmit={handleSubmit} className="forgot-password-container">
          
              <Input
                type={'text'}
                error={formErrors['email']}
                name={'email'}
                placeholder={'Please Enter Your Email'}
                value={forgotFormData.email}
                onInputChange={(name, value) => {
                  forgotPasswordChange(name, value);
                }}
              />
          <hr />
          <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-center'>
            <Button
              type='submit'
              variant='dark'
              text='Send Email'
              className='mb-3 mb-md-0'
            />
            <Link className='forgot-password-links' to={'/login'}>
              Back to login
            </Link>
          </div>
        </form>
      </div>*/}

      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated,
    forgotFormData: state.forgotPassword.forgotFormData,
    formErrors: state.forgotPassword.formErrors
  };
};

export default connect(mapStateToProps, actions)(ForgotPassword);
