import { useState } from "react";
import { Divider } from "@nextui-org/react";

import LocationStep from "./FormSteps/LocationStep";
import RoleStep from "./FormSteps/RoleStep";
import DetailsStep from "./FormSteps/DetailsStep";
import Success from "./FormSteps/Success";

const steps = [LocationStep, RoleStep, DetailsStep];
const labels = ["Job Location", "Job Position", "Personal Details"];
const MultiSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const StepComponent = steps[activeStep];

  return (
    <div className="container">
      {activeStep === labels.length ? (
        <Success />
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl p-5 opacity-80 shadow-2xl dark dark:bg-slate-100 dark:text-gray-600 bg-black text-white ">
          <div className="flex justify-center mb-6">
            {labels.map((label, index) => (
              <div key={label} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    activeStep === index
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {activeStep === index ? index + 1 : "✓"}
                </div>

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
          <div className="flex justify-center mb-8 space-x-12">
            {labels.map((label, index) => (
              <div
                key={label}
                className={`text-sm ${
                  activeStep === index ? "text-gray" : "text-gray-400"
                }`}
              >
                {label}
              </div>
            ))}
          </div>{" "}
          <Divider className="mb-5" />
          <StepComponent onNext={handleNext} onBack={handleBack} />
        </div>
      )}
    </div>
  );
};

export default MultiSteps;
