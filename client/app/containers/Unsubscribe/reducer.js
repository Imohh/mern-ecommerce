/*
 *
 * Unsubscribe reducer
 *
 */

import {
  UNSUBSCRIBE_CHANGE,
  SET_UNSUBSCRIBE_FORM_ERRORS,
  UNSUBSCRIBE_RESET
} from './constants';

const initialState = {
  email: '',
  formErrors: {}
};

const unsubscribeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UNSUBSCRIBE_CHANGE:
      return {
        ...state,
        email: action.payload
      };
    case SET_UNSUBSCRIBE_FORM_ERRORS:
      return {
        ...state,
        formErrors: action.payload
      };
    case UNSUBSCRIBE_RESET:
      return {
        ...state,
        email: '',
        formErrors: {}
      };
    default:
      return state;
  }
};

export default unsubscribeReducer;
