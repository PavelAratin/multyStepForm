import React from "react";
import "./FormPickAddOnce.scss";

const FormPickAddOnce = () => {
  return (
    <React.Fragment>
      <h1 className="form__title">Pick add-ons</h1>
      <p className="form__subtitle">
        Add-onc help enhance your gaming experience.
      </p>
      <ul className="form-addonce-list">
        <li className="form-addonce-list__item">
          <label className="form-addonce-list__label">
            <input
              className="form-addonce-list__input"
              type="checkbox"
              name="online service"
            ></input>
            <span className="form-addonce-list__costomcheckbox"></span>
            <span className="form-addonce-list__ovelraycheckbox"></span>
            <div className="form-addonce-list__wrapper">
              <div className="form-addonce-list__title">Online service</div>
              <div className="form-addonce-list__subtitle">Access to multiplay games</div>
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
            ></input>
            <span className="form-addonce-list__costomcheckbox"></span>
            <span className="form-addonce-list__ovelraycheckbox"></span>
            <div className="form-addonce-list__wrapper">
              <div className="form-addonce-list__title">Larger storage</div>
              <div className="form-addonce-list__subtitle">extra 1TB of cloud save</div>
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
            ></input>
            <span className="form-addonce-list__costomcheckbox"></span>
            <span className="form-addonce-list__ovelraycheckbox"></span>
            <div className="form-addonce-list__wrapper">
              <div className="form-addonce-list__title">Customizable Profile</div>
              <div className="form-addonce-list__subtitle">Custom theme on your profile</div>
            </div>
            <span className="form-addonce-list__price">+$2/mo</span>
          </label>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default FormPickAddOnce;
