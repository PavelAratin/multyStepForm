import React from "react";
import "./FormFinishingUp.scss";

const FormFinishingUp = () => {
  return (
    <React.Fragment>
      <h1 className="form__title">Finishing up</h1>
      <p className="form__subtitle">
        Double-check everything looks OK before confirming.
      </p>
      <div className="form-finish">
        <div className="form-finish__head">
          <div className="form-finish__wrapper">
            <span className="form-finish__title">Arcade (Monthly)</span>
            <span className="form-finish__change">Change</span>
          </div>
          <span className="form-finish__arcade-price">$9/mo</span>
        </div>
        <ul className="form-finish__list">
          <li className="form-finish__item">
            <span className="form-finish__select-title">Online service</span>
            <span className="form-finish__select-price">+$12/mo</span>
          </li>
          <li className="form-finish__item">
            <span className="form-finish__select-title">large storage</span>
            <span className="form-finish__select-price">+$2/mo</span>
          </li>
        </ul>
      </div>
      <div className="form-finish-footer">
        <span className="form-finish-footer__select-title">Total (per month)</span>
        <span className="form-finish-footer__total-price">+$2/mo</span>
        </div>
    </React.Fragment>
  );
};

export default FormFinishingUp;
