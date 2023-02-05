import React, { useEffect, useRef, useState } from "react";
import "./FormSelectPlan.scss";
import ButtonGoBack from "../formButtons/ButtonGoBack";
import ButtonNextStep from "../formButtons/ButtonNextStep";
import {
  selectArcadePlanActions,
  selectAdvancedPlanActions,
  selectProPlanActions,
  formStepNumberActions,
} from "../../store/store";
import { useDispatch } from "react-redux";

const FormSelectPlan = ({ changePickAddOneVisible }) => {
  const [arcadeInputIs, setArcadeInputIs] = useState(false);
  const [advancedInputIs, setAdvancedInputIs] = useState(false);
  const [proInputIs, setProInputIs] = useState(false);
  const [moYoToggleInputIs, setMoYoToggleInputIs] = useState(false);
  const [buttonSelectplaneDisabled, setButtonSelectplaneDisabled] =
    useState(true);
  const arcadeInputEl = useRef();
  const advancedInputEl = useRef();
  const proInputEl = useRef();

  const arcadeDispatch = useDispatch();
  const advancedDispatch = useDispatch();
  const proDispatch = useDispatch();
  const stepNumberDispatch = useDispatch();


  const arcadeInputHandler = () => {
    setArcadeInputIs(true);
  };
  const advancedInputHandler = () => {
    setAdvancedInputIs(true);
  };
  const proInputHandler = () => {
    setProInputIs(true);
  };
  const changeMoYoToggleHadler = () => {
    setMoYoToggleInputIs((previousState) => !previousState);
  };
  console.log(moYoToggleInputIs);
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (arcadeInputIs || advancedInputIs || proInputIs) {
      changePickAddOneVisible();
    }
    if (arcadeInputIs) {
      arcadeDispatch(
        selectArcadePlanActions(arcadeInputEl.current.value, moYoToggleInputIs)
      );
    }
    if (advancedInputIs) {
      advancedDispatch(
        selectAdvancedPlanActions(
          advancedInputEl.current.value,
          moYoToggleInputIs
        )
      );
    }
    if (proInputIs) {
      proDispatch(
        selectProPlanActions(proInputEl.current.value, moYoToggleInputIs)
      );
    }
    stepNumberDispatch(formStepNumberActions(3));
  };

  useEffect(() => {
    if (arcadeInputIs || advancedInputIs || proInputIs) {
      setButtonSelectplaneDisabled(false);
    }
  }, [arcadeInputIs, advancedInputIs, proInputIs]);

  return (
    <form className="form-select-plan" onSubmit={submitFormHandler}>
      <h1 className="form-select-plan__title">Select you plan</h1>
      <p className="form-select-plan__subtitle">
        Yuo have the opinion of monthly or yearly billing.
      </p>
      <ul className="form-radio-list">
        <li className="form-radio-list__item">
          <svg
            className="form-radio-list__svg"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none">
              <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
              <path
                fill="#FFF"
                d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
              />
            </g>
          </svg>
          <label className="form-radio-list__label">
            <input
              className="form-radio-list__input"
              type="radio"
              name="pickAddOne"
              value="Arcade"
              ref={arcadeInputEl}
              onChange={arcadeInputHandler}
            ></input>
            <span className="form-radio-list__overlay"></span>
            <span className="form-radio-list__title">Arcade</span>
            <span className="form-radio-list__subtitle">
              {moYoToggleInputIs ? "$90/yr" : "$9/mo"}
            </span>
            {moYoToggleInputIs && (
              <span className="form-radio-list__subtitle-yo">
                2 months free
              </span>
            )}
          </label>
        </li>
        <li className="form-radio-list__item">
          <svg
            className="form-radio-list__svg"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none">
              <circle cx="20" cy="20" r="20" fill="#F9818E" />
              <path
                fill="#FFF"
                d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
              />
            </g>
          </svg>
          <label className="form-radio-list__label">
            <input
              className="form-radio-list__input"
              type="radio"
              name="pickAddOne"
              value="Advance"
              ref={advancedInputEl}
              onChange={advancedInputHandler}
            ></input>
            <span className="form-radio-list__overlay"></span>
            <span className="form-radio-list__title">Advanced</span>
            <span className="form-radio-list__subtitle">
              {moYoToggleInputIs ? "$120/yr" : "$12/mo"}
            </span>
            {moYoToggleInputIs && (
              <span className="form-radio-list__subtitle-yo">
                2 months free
              </span>
            )}
          </label>
        </li>
        <li className="form-radio-list__item">
          <svg
            className="form-radio-list__svg"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none">
              <circle cx="20" cy="20" r="20" fill="#483EFF" />
              <path
                fill="#FFF"
                d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
              />
            </g>
          </svg>
          <label className="form-radio-list__label">
            <input
              className="form-radio-list__input"
              type="radio"
              name="pickAddOne"
              value="Pro"
              ref={proInputEl}
              onChange={proInputHandler}
            ></input>
            <span className="form-radio-list__overlay"></span>
            <span className="form-radio-list__title">Pro</span>
            <span className="form-radio-list__subtitle">
              {moYoToggleInputIs ? "$150/yr" : "$15/mo"}
            </span>
            {moYoToggleInputIs && (
              <span className="form-radio-list__subtitle-yo">
                2 months free
              </span>
            )}
          </label>
        </li>
      </ul>
      <div className="form-input-toggle">
        <label className="form-input-toggle__label">
          <input
            className="form-input-toggle__input"
            type="checkbox"
            checked={moYoToggleInputIs}
            onChange={changeMoYoToggleHadler}
          />
          <span className="form-input-toggle__switch"></span>
          <span
            className={`form-input-toggle__text form-input-toggle__text--order2 ${
              moYoToggleInputIs ? "" : "active"
            }`}
          >
            Monthly
          </span>
          <span
            className={`form-input-toggle__text form-input-toggle__text--order4 ${
              moYoToggleInputIs ? "active" : ""
            }`}
          >
            Yearly
          </span>
        </label>
      </div>
      <div className="form-buttons">
        <ButtonGoBack></ButtonGoBack>
        <ButtonNextStep
          buttonSelectplaneDisabled={buttonSelectplaneDisabled}
        ></ButtonNextStep>
      </div>
    </form>
  );
};

export default FormSelectPlan;
