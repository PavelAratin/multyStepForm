import React, { useState } from "react";
import "./FormPersonalInfo.scss";

const FormPersonalInfo = ({getPersonalInfoValidate}) => {
  const [inputName, setInputName] = useState("");
  const [inputNameValidate, setInputNameValidate] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputEmailValidate, setInputEmailValidate] = useState(false);
  const [inputTelephone, setInputTelephone] = useState("");
  const [inputTelephoneValidate, setInputTelephoneValidate] = useState(false);
  const [allInputsvalidate,setAllInputsvalidate] = useState(false);
  //regexp на числа в инпуте телефона
  const hasOnlyDigits = (v) => /^\d+$/.test(v);
  //валидация инпута имени
  const getInputNameHandler = (e) => {
    setInputName(e.target.value);
  };
  const getInputNameBlurHandler = () => {
    if (inputName.trim() !== "") {
      setInputNameValidate(true);
    } else {
      console.log("поле пустое");
    }
  };
  //валидация инпута email
  const getInputEmailHandler = (e) => {
    setInputEmail(e.target.value);
  };
  const getInputEmailBlurHandler = () => {
    if (inputEmail.trim() !== "" && inputEmail.includes("@")) {
      setInputEmailValidate(true);
    } else {
      console.log("поле пустое");
    }
  };
  //валидация инпута нормер телефона
  const getInputTelephoneHandler = (e) => {
    setInputTelephone(e.target.value);
  };
  const getInputTelephoneBlurHandler = () => {
    if (inputTelephone.trim() !== "" && hasOnlyDigits(inputTelephone)) {
      setInputTelephoneValidate(true);
    } else {
    }
  };

  if(inputNameValidate && inputEmailValidate && inputTelephoneValidate){
    getPersonalInfoValidate(true)
  }

  return (
    <React.Fragment>
      <h1 className="form__title">Personal Info</h1>
      <p className="form__subtitle">
        Plese provide name, email adress, and phone number.
      </p>
      <label className="form__label">
        Name
        <input
          value={inputName}
          onChange={getInputNameHandler}
          onBlur={getInputNameBlurHandler}
          className="form__input"
          type="text"
          placeholder="Name"
          name="name"
          required
        ></input>
      </label>
      <label className="form__label">
        Email Adress
        <input
          value={inputEmail}
          onChange={getInputEmailHandler}
          onBlur={getInputEmailBlurHandler}
          className="form__input"
          type="email"
          placeholder="Email"
          name="email"
          required
        ></input>
      </label>
      <label className="form__label">
        Phone Number
        <input
          value={inputTelephone}
          onChange={getInputTelephoneHandler}
          onBlur={getInputTelephoneBlurHandler}
          className="form__input"
          type="tel"
          placeholder="8-(999)-999-99-99"
          name="telephone"
          required
        ></input>
      </label>
    </React.Fragment>
  );
};

export default FormPersonalInfo;
