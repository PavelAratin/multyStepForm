// import FormWrapper from "./components/formWrapper/FormWrapper";
import FormAside from "./components/formAside/FormAside";
import FormWrapper from "./components/formWrapper/FormWrapper";
import Form from "./components/form/Form";
import FormPersonalInfo from "./components/formPersonalInfo/FormPersonalInfo";
import FormButtonsWrapper from "./components/formButtons/FormButtonsWrapper";
import ButtonGoBack from "./components/formButtons/ButtonGoBack";
import ButtonNextStep from "./components/formButtons/ButtonNextStep";
import FormFinishingUp from "./components/formFinishingUp/FormFinishingUp";
import FormSelectPlan from "./components/formSelectPlan/FormSelectPlan";
import FormPickAddOnce from "./components/formPickAddOnce/FormPickAddOnce";
import { useEffect, useState } from "react";


function App() {
  const [validateFirstStep, setValidateFirstStep] = useState(false)
  const getPersonalInfoValidate = (isValidateAllInputs) => {
    //специальная задержка, без нее ошибка,но код не ломается
    setTimeout(() => {
      setValidateFirstStep(isValidateAllInputs)
    })
  }
  return (
    <FormWrapper>
      <FormAside></FormAside>
      <Form>
        {validateFirstStep ? '' : <FormPersonalInfo getPersonalInfoValidate={getPersonalInfoValidate}></FormPersonalInfo>}
        {validateFirstStep && <FormSelectPlan></FormSelectPlan>}
        {/* <FormSelectPlan></FormSelectPlan> */}
        {/* <FormPickAddOnce></FormPickAddOnce> */}
        {/* <FormFinishingUp></FormFinishingUp> */}
        <FormButtonsWrapper>
          <ButtonGoBack></ButtonGoBack>
          <ButtonNextStep></ButtonNextStep>
        </FormButtonsWrapper>
      </Form>
    </FormWrapper>
  );
}

export default App;
