import React from 'react';
import './FormPersonalInfo.scss';

const FormPersonalInfo = () => {
  return (
    <React.Fragment>
      <h1 className="form__title">Personal Info</h1>
      <p className="form__subtitle">Plese provide name, email adress, and phone number.</p>
      <label className="form__label">
        Name
        <input className="form__input" type="text" placeholder="Name" name="name" required></input>
      </label>
      <label className="form__label">
        Email Adress
        <input className="form__input" type="text" placeholder="Email" name="email" required></input>
      </label>
      <label className="form__label">
        Phone Number
        <input className="form__input" type="tel" placeholder="8(999)999-99-99" name="telephone" required></input>
      </label>
    </React.Fragment>
  )
}


export default FormPersonalInfo;