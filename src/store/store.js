import { createStore } from 'redux';

const reducer = (state = [], action) => {

  if (action.type === 'ADD_INPUT_NAME') {
    return [
      ...state,
      {
        inputName: action.inputNameValue
      }
    ]
  }

  if (action.type === 'ADD_INPUT_EMAIL') {
    return [
      ...state,
      {
        inputEmail: action.inputEmailValue
      }
    ]
  }

  if (action.type === 'ADD_INPUT_PHONE') {
    return [
      ...state,
      {
        inputPhone: action.inputPhoneValue
      }
    ]
  }

  return state;
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const nameActions = (inputNameValue) => {
  return {
    type: 'ADD_INPUT_NAME',
    inputNameValue
  }
}
export const emailActions = (inputEmailValue) => {
  return {
    type: 'ADD_INPUT_EMAIL',
    inputEmailValue
  }
}
export const phoneActions = (inputPhoneValue) => {
  return {
    type: 'ADD_INPUT_PHONE',
    inputPhoneValue
  }
}