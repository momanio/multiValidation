import { useContext } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LocationStep from "./FormSteps/LocationStep";
import RoleStep from "./FormSteps/RoleStep";
import DetailsStep from "./FormSteps/DetailsStep";

import Success from "./FormSteps/Success";
import { useNavigationSteps } from "../hooks/useNavigationSteps";

// Step titles
const labels = ["Job Location", "Job Position", "Personal Details"];
const handleSteps = (step: number) => {
  switch (step) {
    case 0:
      return <LocationStep />;
    case 1:
      return <RoleStep />;
    case 2:
      return <DetailsStep />;
    default:
      throw new Error("Unknown step");
  }
};

export default function MultiSteps() {
  const { activeStep } = useContext(useNavigationSteps);

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

          {handleSteps(activeStep)}
        </>
      )}
    </>
  );
}
