import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LocationStep from "./FormSteps/LocationStep";
import RoleStep from "./FormSteps/RoleStep";
import DetailsStep from "./FormSteps/DetailsStep";
import Success from "./FormSteps/Success";

const steps = [LocationStep, RoleStep, DetailsStep];
const labels = ["Job Location", "Job Position", "Personal Details"];

export default function MultiSteps() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const StepComponent = steps[activeStep];

  return (
    <>
      {activeStep === labels.length ? (
        <Success />
      ) : (
        <>
          <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <StepComponent onNext={handleNext} onBack={handleBack} />
        </>
      )}
    </>
  );
}
