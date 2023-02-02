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

  if (action.type === 'SELECT_ARCADE_PLAN') {
    return [
      ...state,
      {
        selectArcadePlan: action.selectPlan,
        price: 9,
      }
    ]
  }
  if (action.type === 'SELECT_ADVANCED_PLAN') {
    return [
      ...state,
      {
        selectAdvancedPlan: action.selectPlan,
        price: 12,
      }
    ]
  }
  if (action.type === 'SELECT_PRO_PLAN') {
    return [
      ...state,
      {
        selectProPlan: action.selectPlan,
        price: 15,
      }
    ]
  }
  if (action.type === 'ADD_ONCE_PICK') {
    return [
      ...state,
      {
        addOnseStep:action.addOnceData
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
export const selectArcadePlanActions = (selectPlan) => {
  return {
    type: 'SELECT_ARCADE_PLAN',
    selectPlan
  }
}
export const selectAdvancedPlanActions = (selectPlan) => {
  return {
    type: 'SELECT_ADVANCED_PLAN',
    selectPlan
  }
}
export const selectProPlanActions = (selectPlan) => {
  return {
    type: 'SELECT_PRO_PLAN',
    selectPlan
  }
}
export const addOnceDataActions = (addOnceData) => {
  return {
    type: 'ADD_ONCE_PICK',
    addOnceData
  }
}