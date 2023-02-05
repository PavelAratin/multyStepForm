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
    let price = 0;
    if (action.moYoToggleIs) {
      price = 90
    } else {
      price = 9
    }
    return [
      ...state,
      {
        selectArcadePlan: action.selectPlan,
        price: price,
        moYoToggleIs: action.moYoToggleIs
      }
    ]
  }
  if (action.type === 'SELECT_ADVANCED_PLAN') {
    let price = 0;
    if (action.moYoToggleIs) {
      price = 120
    } else {
      price = 12
    }
    return [
      ...state,
      {
        selectAdvancedPlan: action.selectPlan,
        price: price,
        moYoToggleIs: action.moYoToggleIs
      }
    ]
  }
  if (action.type === 'SELECT_PRO_PLAN') {
    let price = 0;
    if (action.moYoToggleIs) {
      price = 150
    } else {
      price = 15
    }
    return [
      ...state,
      {
        selectProPlan: action.selectPlan,
        price: price,
        moYoToggleIs: action.moYoToggleIs
      }
    ]
  }
  if (action.type === 'ADD_ONCE_PICK') {
    return [
      ...state,
      {
        addOnseStep: action.addOnceData
      }
    ]
  }
  if (action.type === 'FORM_STEP_NUMBER_TWO') {
    return [
      ...state,
      {
        stepForm: action.formStepNumber
      }
    ]
  }
  if (action.type === 'FORM_STEP_NUMBER') {
    state = state.map((item) => {
      if ("stepForm" in item) {
        item.stepForm = action.formStepNumber
      }
      return item;
    })
    return [
      ...state,
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
export const selectArcadePlanActions = (selectPlan, moYoToggleIs) => {
  return {
    type: 'SELECT_ARCADE_PLAN',
    selectPlan,
    moYoToggleIs
  }
}
export const selectAdvancedPlanActions = (selectPlan, moYoToggleIs) => {
  return {
    type: 'SELECT_ADVANCED_PLAN',
    selectPlan,
    moYoToggleIs
  }
}
export const selectProPlanActions = (selectPlan, moYoToggleIs) => {
  return {
    type: 'SELECT_PRO_PLAN',
    selectPlan,
    moYoToggleIs
  }
}
export const addOnceDataActions = (addOnceData) => {
  return {
    type: 'ADD_ONCE_PICK',
    addOnceData
  }
}
export const formStepNumberTwoActions = (formStepNumber) => {
  return {
    type: 'FORM_STEP_NUMBER_TWO',
    formStepNumber
  }
}
export const formStepNumberActions = (formStepNumber) => {
  return {
    type: 'FORM_STEP_NUMBER',
    formStepNumber
  }
}