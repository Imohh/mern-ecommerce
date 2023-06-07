/*
 *
 * Contact
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class Contact extends React.PureComponent {
  render() {
    const { contactFormData, contactFormChange, contactUs, formErrors } =
      this.props;

    const handleSubmit = event => {
      event.preventDefault();
      contactUs();
    };

    return (
      <div className='contact'>
        <Row>
          <Col
            xs={{ size: 12, order: 2 }}
            md={{ size: '6', order: 1 }}
            className='p-0'
          >
            <img src="/images/3004461se.jpg" alt="contact image" />
          </Col>


          <Col
            xs={{ size: 12, order: 1 }}
            md={{ size: '6', order: 2 }}
            className='login-right'
          >
          <h3 className='text-uppercase'>Contact Information</h3>
          <hr />
            <form onSubmit={handleSubmit}>
              <Row>
                <Col xs='12' md='6'>
                  <Input
                    type={'text'}
                    error={formErrors['name']}
                    label={'Name'}
                    name={'name'}
                    placeholder={'You Full Name'}
                    value={contactFormData.name}
                    onInputChange={(name, value) => {
                      contactFormChange(name, value);
                    }}
                  />
                </Col>
                <Col xs='12' md='6'>
                  <Input
                    type={'text'}
                    error={formErrors['email']}
                    label={'Email'}
                    name={'email'}
                    placeholder={'Your Email Address'}
                    value={contactFormData.email}
                    onInputChange={(name, value) => {
                      contactFormChange(name, value);
                    }}
                  />
                </Col>
                <Col xs='12' md='12'>
                  <Input
                    type={'textarea'}
                    error={formErrors['message']}
                    label={'Message'}
                    name={'message'}
                    placeholder={'Please Describe Your Message'}
                    value={contactFormData.message}
                    onInputChange={(name, value) => {
                      contactFormChange(name, value);
                    }}
                  />
                </Col>
              </Row>
              <hr />
              <div className='contact-actions'>
                <Button 
                  type='submit'
                  text='Submit'
                  variant="dark"
                  className="custom-btn-dark login-btn"
                />
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactFormData: state.contact.contactFormData,
    formErrors: state.contact.formErrors
  };
};

export default connect(mapStateToProps, actions)(Contact);
