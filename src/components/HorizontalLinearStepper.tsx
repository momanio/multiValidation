import { useState } from "react";
import LocationStep from "./FormSteps/LocationStep";
import RoleStep from "./FormSteps/RoleStep";
import DetailsStep from "./FormSteps/DetailsStep";

const steps = [LocationStep, RoleStep, DetailsStep];
const labels = ["Job Location", "Job Position", "Personal Details"];
const HorizontalLinearStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const StepComponent = steps[activeStep];

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <>
        {/* Custom Stepper */}
        <div className="flex justify-center mb-6">
          {labels.map((label, index) => (
            <div key={label} className="flex items-center">
              {/* Circle for Step Number */}
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  activeStep === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                {index + 1}
              </div>

              {/* Line Between Steps */}
              {index < labels.length - 1 && (
                <div
                  className={`w-16 h-1 ${
                    activeStep > index ? "bg-blue-500" : "bg-gray-700"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Labels Under Steps */}
        <div className="flex justify-center mb-8 space-x-12">
          {labels.map((label, index) => (
            <div
              key={label}
              className={`text-sm ${
                activeStep === index ? "text-white" : "text-gray-400"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Render the Step Component */}
        <StepComponent onNext={handleNext} onBack={handleBack} />
      </>
    </div>
  );
};

export default HorizontalLinearStepper;
