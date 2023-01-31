import React, { useState, useEffect } from "react";
import ButtonGoBack from "../formButtons/ButtonGoBack";
import ButtonNextStep from "../formButtons/ButtonNextStep";
import "./FormPersonalInfo.scss";

const FormPersonalInfo = ({changeFormPersonalVisible}) => {
  const [inputName, setInputName] = useState("");
  const [inputNameValidate, setInputNameValidate] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputEmailValidate, setInputEmailValidate] = useState(false);
  const [inputTelephone, setInputTelephone] = useState("");
  const [inputTelephoneValidate, setInputTelephoneValidate] = useState(false);
  // const [allInputsvalidate, setAllInputsvalidate] = useState(false);
  const [buttonPersonalFormDisabled, setButtonPersonalFormDisabled] =
    useState(true);
  //regexp на числа в инпуте телефона
  const hasOnlyDigits = (v) => /^\d+$/.test(v);
  //валидация инпута имени
  const getInputNameHandler = (e) => {
    setInputName(e.target.value);
  };
  const getInputNameBlurHandler = () => {
    if (inputName.trim() !== "") {
      setInputNameValidate((previousState) => !previousState);
    }
    if (inputName.trim() == "") {
      setInputNameValidate((previousState) => !previousState);
    }
  };
  //валидация инпута email
  const getInputEmailHandler = (e) => {
    setInputEmail(e.target.value);
  };
  const getInputEmailBlurHandler = () => {
    if (inputEmail.trim() !== "" && inputEmail.includes("@")) {
      setInputEmailValidate((previousState) => !previousState);
    }
    if (inputEmail.trim() == "") {
      setInputEmailValidate((previousState) => !previousState);
    }
  };
  //валидация инпута нормер телефона
  const getInputTelephoneHandler = (e) => {
    setInputTelephone(e.target.value);
  };
  const getInputTelephoneBlurHandler = () => {
    if (inputTelephone.trim() !== "" && hasOnlyDigits(inputTelephone)) {
      setInputTelephoneValidate((previousState) => !previousState);
    }
    if (inputTelephone.trim() == "") {
      setInputTelephoneValidate((previousState) => !previousState);
    }
  };

  useEffect(() => {
    if (inputNameValidate && inputEmailValidate && inputTelephoneValidate) {
      setButtonPersonalFormDisabled((previousState) => !previousState);
    }
  }, [inputNameValidate, inputEmailValidate, inputTelephoneValidate]);

  const submitFormHandler = (e) => {
    e.preventDefault();
    changeFormPersonalVisible()
  };
  return (
    <form
      className="form-personal-info"
      onSubmit={submitFormHandler}
    >
      <h1 className="form-personal-info__title">Personal Info</h1>
      <p className="form-personal-info__subtitle">
        Plese provide name, email adress, and phone number.
      </p>
      <label className="form-personal-info__label">
        Name
        <input
          value={inputName}
          onChange={getInputNameHandler}
          onBlur={getInputNameBlurHandler}
          className="form-personal-info__input"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
      </label>
      <label className="form-personal-info__label">
        Email Adress
        <input
          value={inputEmail}
          onChange={getInputEmailHandler}
          onBlur={getInputEmailBlurHandler}
          className="form-personal-info__input"
          type="email"
          placeholder="Email"
          name="email"
        ></input>
      </label>
      <label className="form-personal-info__label">
        Phone Number
        <input
          value={inputTelephone}
          onChange={getInputTelephoneHandler}
          onBlur={getInputTelephoneBlurHandler}
          className="form-personal-info__input"
          type="tel"
          placeholder="8-(999)-999-99-99"
          name="telephone"
        ></input>
      </label>
      <div className="form-buttons">
        <ButtonGoBack></ButtonGoBack>
        <ButtonNextStep
          buttonPersonalFormDisabled={buttonPersonalFormDisabled}
        ></ButtonNextStep>
      </div>
    </form>
  );
};

export default FormPersonalInfo;
