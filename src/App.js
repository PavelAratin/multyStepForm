// import FormWrapper from "./components/formWrapper/FormWrapper";
import FormAside from "./components/formAside/FormAside";
import FormWrapper from "./components/formWrapper/FormWrapper";
import FormPersonalInfo from "./components/formPersonalInfo/FormPersonalInfo";
import FormFinishingUp from "./components/formFinishingUp/FormFinishingUp";
import FormSelectPlan from "./components/formSelectPlan/FormSelectPlan";
import FormPickAddOnce from "./components/formPickAddOnce/FormPickAddOnce";
import { useState } from "react";
import ThankYou from "./components/thankYou/ThankYou";


function App() {
  const [formPersonalVisible, setFormPersonalVisible] = useState(true);
  const [selectPlanVisible, setSelectPlanVisible] = useState(false);
  const [pickAddOneVisible, setPickAddOneVisible] = useState(false);
  const [finishingUpVisible, setFinishingUpVisible] = useState(false);
  const [thankYoyVisible, setThankYoyVisible] = useState(false);
  const changeFormPersonalVisible = () => {
    setFormPersonalVisible((previousState) => !previousState)
    setSelectPlanVisible((previousState) => !previousState)
  }

  const changePickAddOneVisible = () => {
    setSelectPlanVisible((previousState) => !previousState)
    setPickAddOneVisible((previousState) => !previousState)
  }

  const changeFinishingUpVisible = () => {
    setPickAddOneVisible((previousState) => !previousState)
    setFinishingUpVisible((previousState) => !previousState)
  }

  const changeThankYouVisible = () => {
    setFinishingUpVisible((previousState) => !previousState)
    setThankYoyVisible((previousState) => !previousState)
  }

  return (
    <FormWrapper>
      <FormAside></FormAside>
      <div className="from-mobile-wrapper">
        {formPersonalVisible ? <FormPersonalInfo changeFormPersonalVisible={changeFormPersonalVisible}></FormPersonalInfo> : ''}
        {selectPlanVisible ? <FormSelectPlan changePickAddOneVisible={changePickAddOneVisible}></FormSelectPlan> : ''}
        {pickAddOneVisible ? <FormPickAddOnce changeFinishingUpVisible={changeFinishingUpVisible}></FormPickAddOnce> : ''}
        {finishingUpVisible ? <FormFinishingUp changeThankYouVisible={changeThankYouVisible}></FormFinishingUp> : ''}
        {thankYoyVisible ? <ThankYou></ThankYou> : ''}
      </div>

    </FormWrapper>
  );
}

export default App;
