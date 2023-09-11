/*
 *
 * Unsubscribe actions
 *
 */

import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
  UNSUBSCRIBE_CHANGE,
  SET_UNSUBSCRIBE_FORM_ERRORS,
  UNSUBSCRIBE_RESET
} from './constants';
import handleError from '../../utils/error';
import { allFieldsValidation } from '../../utils/validation';

export const unsubscribeChange = (name, value) => {
  return {
    type: UNSUBSCRIBE_CHANGE,
    payload: value
  };
};

export const unsubscribeToNewsletter = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        email: 'required|email'
      };

      const user = {};
      user.email = getState().unsub.email;

      const { isValid, errors } = allFieldsValidation(user, rules, {
        'required.email': 'Email is required.',
        'email.email': 'Email format is invalid.'
      });

      if (!isValid) {
        return dispatch({ type: SET_UNSUBSCRIBE_FORM_ERRORS, payload: errors });
      }

      const response = await axios.post('/api/unsub/unsubscribe', user);

      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      dispatch({ type: UNSUBSCRIBE_RESET });
      dispatch(success(successfulOptions));
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};
