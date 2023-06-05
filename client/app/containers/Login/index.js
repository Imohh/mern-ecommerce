/*
 *
 * Login
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import SignupProvider from '../../components/Common/SignupProvider';

class Login extends React.PureComponent {
  render() {
    const {
      authenticated,
      loginFormData,
      loginChange,
      login,
      formErrors,
      isLoading,
      isSubmitting
    } = this.props;

    if (authenticated) return <Redirect to='/dashboard' />;

    const registerLink = () => {
      this.props.history.push('/register');
    };

    const handleSubmit = event => {
      event.preventDefault();
      login();
    };

    return (


      <>




      <div className='login-forms'>
      {isLoading && <LoadingIndicator />}
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
            <form onSubmit={handleSubmit} noValidate>
              <Row>
                <Col
                  xs={{ size: 12, order: 2 }}
                  md={{ size: '12', order: 1 }}
                  className='p-0'
                >
                  <Col xs='12' md='12'>
                    <Input
                      type={'text'}
                      error={formErrors['email']}
                      label={'Email Address'}
                      name={'email'}
                      placeholder={'Please Enter Your Email'}
                      value={loginFormData.email}
                      onInputChange={(name, value) => {
                        loginChange(name, value);
                      }}
                    />
                  </Col>
                  <Col xs='12' md='12'>
                    <Input
                      type={'password'}
                      error={formErrors['password']}
                      label={'Password'}
                      name={'password'}
                      placeholder={'Please Enter Your Password'}
                      value={loginFormData.password}
                      onInputChange={(name, value) => {
                        loginChange(name, value);
                      }}
                    />
                    <Link
                      className='redirect-link forgot-password-link'
                      to={'/forgot-password'}
                    >
                      Forgot Password?
                    </Link>
                  </Col>
                    <Button
                      type='submit'
                      className="custom-btn-dark login-btn"
                      text='Login'
                      style={{color: "#fff"}}
                      disabled={isSubmitting}
                    />
                </Col>
              </Row>
                    
              <Col
                xs={{ size: 12, order: 1 }}
                md={{ size: '12', order: 2 }}
                className='mb-2 mb-md-0 signup-provider'
              >
                <SignupProvider />
              </Col>

              <div className="sign-up-button">
                <p>Don't have an account yet? <span onClick={registerLink}>Sign Up</span></p>
                {/*<Button
                    text='Create an account'
                    variant='link'
                    className='ml-md-3'
                    onClick={registerLink}
                  />*/}
              </div>
            </form>
          </Col>

        </Row>














{/*


        {isLoading && <LoadingIndicator />}
        <h2>Login</h2>
        <hr />
        <form onSubmit={handleSubmit} noValidate>
          <Row>
            <Col
              xs={{ size: 12, order: 2 }}
              md={{ size: '6', order: 1 }}
              className='p-0'
            >
              <Col xs='12' md='12'>
                <Input
                  type={'text'}
                  error={formErrors['email']}
                  label={'Email Address'}
                  name={'email'}
                  placeholder={'Please Enter Your Email'}
                  value={loginFormData.email}
                  onInputChange={(name, value) => {
                    loginChange(name, value);
                  }}
                />
              </Col>
              <Col xs='12' md='12'>
                <Input
                  type={'password'}
                  error={formErrors['password']}
                  label={'Password'}
                  name={'password'}
                  placeholder={'Please Enter Your Password'}
                  value={loginFormData.password}
                  onInputChange={(name, value) => {
                    loginChange(name, value);
                  }}
                />
              </Col>
            </Col>
            <Col
              xs={{ size: 12, order: 1 }}
              md={{ size: '6', order: 2 }}
              className='mb-2 mb-md-0'
            >
              <SignupProvider />
            </Col>
          </Row>
          <hr />
          <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-between'>
            <div className='d-flex justify-content-between align-items-center mb-3 mb-md-0'>
              <Button
                type='submit'
                className="custom-btn-dark"
                text='Login'
                style={{color: "#fff"}}
                disabled={isSubmitting}
              />
              <Button
                text='Create an account'
                variant='link'
                className='ml-md-3'
                onClick={registerLink}
              />
            </div>
            <Link
              className='redirect-link forgot-password-link'
              to={'/forgot-password'}
            >
              Forgot Password?
            </Link>
          </div>
        </form>*/}
      </div>

      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated,
    loginFormData: state.login.loginFormData,
    formErrors: state.login.formErrors,
    isLoading: state.login.isLoading,
    isSubmitting: state.login.isSubmitting
  };
};

export default connect(mapStateToProps, actions)(Login);
