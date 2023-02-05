import React, { useEffect, useState, useRef } from "react";
import "./FormPickAddOnce.scss";
import { useDispatch, useSelector } from "react-redux";
import { addOnceDataActions, formStepNumberActions } from "../../store/store";

import ButtonGoBack from "../formButtons/ButtonGoBack";
import ButtonNextStep from "../formButtons/ButtonNextStep";

const FormPickAddOnce = ({ changeFinishingUpVisible }) => {
  const [onlineServiseInput, setOnlineServiseInput] = useState(false);
  const [largeServiceInput, setLargeServiceInput] = useState(false);
  const [customizeProfileInput, setCustomizeProfileInput] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const onlineServiceInputEl = useRef();
  const largeServiceInputEl = useRef();
  const customizeProfileInputEl = useRef();
  const onlineServiceDispatch = useDispatch();
  const formStepDispatch = useDispatch();
  const moYoToggleIs = useSelector((state) => state[4].moYoToggleIs);

  const changeOnlineServiseInputHandler = () => {
    setOnlineServiseInput((previousState) => !previousState);
  };
  const changeLargeServiceInputHandler = () => {
    setLargeServiceInput((previousState) => !previousState);
  };
  const changeCustomizeProfileInputHandler = () => {
    setCustomizeProfileInput((previousState) => !previousState);
  };
  const arrayPick = [];
  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    changeFinishingUpVisible();
    onlineServiceDispatch(addOnceDataActions(arrayPick));
    formStepDispatch(formStepNumberActions(4));
  };
  useEffect(() => {
    if (onlineServiseInput || largeServiceInput || customizeProfileInput) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [onlineServiseInput, , largeServiceInput, customizeProfileInput]);

  if (onlineServiseInput) {
    arrayPick.push({
      title: "Online service",
      price: Number(onlineServiceInputEl.current.value),
    });
  }
  if (largeServiceInput) {
    arrayPick.push({
      title: "Large storage",
      price: Number(largeServiceInputEl.current.value),
    });
  }
  if (customizeProfileInput) {
    arrayPick.push({
      title: "Customizable profile",
      price: Number(customizeProfileInputEl.current.value),
    });
  }

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
              value={moYoToggleIs ? "120" : "12"}
              ref={onlineServiceInputEl}
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
            <span className="form-addonce-list__price">
              {moYoToggleIs ? "+$120/yo" : "+$12/mo"}
            </span>
          </label>
        </li>
        <li className="form-addonce-list__item">
          <label className="form-addonce-list__label">
            <input
              className="form-addonce-list__input"
              type="checkbox"
              name="large storage"
              value={moYoToggleIs ? "100" : "10"}
              ref={largeServiceInputEl}
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
            <span className="form-addonce-list__price">
              {moYoToggleIs ? "+$100/yo" : "+$10/mo"}
            </span>
          </label>
        </li>
        <li className="form-addonce-list__item">
          <label className="form-addonce-list__label">
            <input
              className="form-addonce-list__input"
              type="checkbox"
              name="customizable profile"
              value={moYoToggleIs ? "80" : "8"}
              ref={customizeProfileInputEl}
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
            <span className="form-addonce-list__price">
              {moYoToggleIs ? "+$80/yo" : "+$8/mo"}
            </span>
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
