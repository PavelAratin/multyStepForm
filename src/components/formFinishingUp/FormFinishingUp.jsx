import React from "react";
import ButtonGoBack from "../formButtons/ButtonGoBack";
import ButtonNextStep from "../formButtons/ButtonNextStep";
import { useSelector } from "react-redux";
import "./FormFinishingUp.scss";

const FormFinishingUp = ({ changeThankYouVisible }) => {
  const inputName = useSelector((state) => state[0].inputName);
  const inputEmail = useSelector((state) => state[1].inputEmail);
  const inputPhone = useSelector((state) => state[2].inputPhone);
  const selectArcadePlane = useSelector((state) => state[3].selectArcadePlan);
  const selectAdvancedPlane = useSelector(
    (state) => state[3].selectAdvancedPlan
  );
  const selectProPlane = useSelector((state) => state[3].selectProPlan);
  const selectPricePlane = useSelector((state) => state[3].price);
  const pickAddOnceData = useSelector((state) => state[4].addOnseStep);

  let sum = Number();
  pickAddOnceData.forEach((item) => {
    sum += Number(item.price);
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
    changeThankYouVisible();
  };

  return (
    <form className="form-finishing-up" onSubmit={submitFormHandler}>
      <h1 className="form-finishing-up__title">Finishing up</h1>
      <p className="form-finishing-up__subtitle">
        Double-check everything looks OK before confirming.
      </p>
      <div className="form-finish">
        <ul className="user-info-list">
          <li className="user-info-list__item">
            <div className="form-finish__title">Имя пользвателя:</div>
            <div className="form-finish__select-title">{inputName}</div>
          </li>
          <li className="user-info-list__item">
            <div className="form-finish__title">Email пользвателя:</div>
            <div className="form-finish__select-title">{inputEmail}</div>
          </li>
          <li className="user-info-list__item">
            <div className="form-finish__title">Телефон пользвателя:</div>
            <div className="form-finish__select-title">{inputPhone}</div>
          </li>
        </ul>
        <div className="form-finish__head">
          <div className="form-finish__wrapper">
            <span className="form-finish__title">
              {selectArcadePlane}
              {selectAdvancedPlane}
              {selectProPlane}
              (Monthly)
            </span>
            <span className="form-finish__change">Change</span>
          </div>
          <span className="form-finish__arcade-price">
            ${selectPricePlane}/mo
          </span>
        </div>
        <ul className="form-finish__list">
          {pickAddOnceData.map((item) => (
            <li className="form-finish__item" key={item.title}>
              <span className="form-finish__select-title">{item.title}</span>
              <span className="form-finish__select-price">
                +${item.price}/mo
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="form-finish-footer">
        <span className="form-finish-footer__select-title">
          Total (per month)
        </span>
        <span className="form-finish-footer__total-price">
          +${sum + selectPricePlane}/mo
        </span>
      </div>
      <div className="form-buttons">
        <ButtonGoBack></ButtonGoBack>
        <ButtonNextStep text="Confirm"></ButtonNextStep>
      </div>
    </form>
  );
};

export default FormFinishingUp;
