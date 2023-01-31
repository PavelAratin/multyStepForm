import React, { useEffect, useState } from "react";
import "./FormPickAddOnce.scss";

import ButtonGoBack from "../formButtons/ButtonGoBack";
import ButtonNextStep from "../formButtons/ButtonNextStep";

const FormPickAddOnce = ({ changeFinishingUpVisible }) => {
  const [onlineServiseInput, setOnlineServiseInput] = useState(false);
  const [largeServiceInput, setLargeServiceInput] = useState(false);
  const [customizeProfileInput, setCustomizeProfileInput] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const changeOnlineServiseInputHandler = () => {
    setOnlineServiseInput((previousState) => !previousState);
  };
  const changeLargeServiceInputHandler = () => {
    setLargeServiceInput((previousState) => !previousState);
  };
  const changeCustomizeProfileInputHandler = () => {
    setCustomizeProfileInput((previousState) => !previousState);
  };
  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    console.log("форма отправлена");
    changeFinishingUpVisible()
  };
  useEffect(() => {
    if (onlineServiseInput || largeServiceInput || customizeProfileInput) {
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
  }, [onlineServiseInput, , largeServiceInput, customizeProfileInput]);
  
  return (
    <form className="form-add-once" onSubmit={onSubmitFormHandler}>
      <h1 className="form-add-once__title">Pick add-ons</h1>
      <p className="form-add-once__subtitle">
        Add-onc help enhance your gaming experience.
      </p>
      <ul className="form-addonce-list">
        <li className="form-addonce-list__item">
          <label className="form-addonce-list__label">
            <input
              className="form-addonce-list__input"
              type="checkbox"
              name="online service"
              checked={onlineServiseInput}
              onChange={changeOnlineServiseInputHandler}
            ></input>
            <span className="form-addonce-list__costomcheckbox"></span>
            <span className="form-addonce-list__ovelraycheckbox"></span>
            <div className="form-addonce-list__wrapper">
              <div className="form-addonce-list__title">Online service</div>
              <div className="form-addonce-list__subtitle">
                Access to multiplay games
              </div>
            </div>
            <span className="form-addonce-list__price">+$1/mo</span>
          </label>
        </li>
        <li className="form-addonce-list__item">
          <label className="form-addonce-list__label">
            <input
              className="form-addonce-list__input"
              type="checkbox"
              name="online service"
              checked={largeServiceInput}
              onChange={changeLargeServiceInputHandler}
            ></input>
            <span className="form-addonce-list__costomcheckbox"></span>
            <span className="form-addonce-list__ovelraycheckbox"></span>
            <div className="form-addonce-list__wrapper">
              <div className="form-addonce-list__title">Larger storage</div>
              <div className="form-addonce-list__subtitle">
                extra 1TB of cloud save
              </div>
            </div>
            <span className="form-addonce-list__price">+$2/mo</span>
          </label>
        </li>
        <li className="form-addonce-list__item">
          <label className="form-addonce-list__label">
            <input
              className="form-addonce-list__input"
              type="checkbox"
              name="online service"
              checked={customizeProfileInput}
              onChange={changeCustomizeProfileInputHandler}
            ></input>
            <span className="form-addonce-list__costomcheckbox"></span>
            <span className="form-addonce-list__ovelraycheckbox"></span>
            <div className="form-addonce-list__wrapper">
              <div className="form-addonce-list__title">
                Customizable Profile
              </div>
              <div className="form-addonce-list__subtitle">
                Custom theme on your profile
              </div>
            </div>
            <span className="form-addonce-list__price">+$2/mo</span>
          </label>
        </li>
      </ul>
      <div className="form-buttons">
        <ButtonGoBack></ButtonGoBack>
        <ButtonNextStep buttonDisabled={buttonDisabled}></ButtonNextStep>
      </div>
    </form>
  );
};

export default FormPickAddOnce;
