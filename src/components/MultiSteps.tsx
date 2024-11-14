import { useState } from "react";
import { Divider } from "@nextui-org/react";

import LocationStep from "./FormSteps/LocationStep";
import RoleStep from "./FormSteps/RoleStep";
import DetailsStep from "./FormSteps/DetailsStep";
import Success from "./FormSteps/Success";
import { FaRegThumbsUp } from "react-icons/fa";

const steps = [LocationStep, RoleStep, DetailsStep];
const labels = ["Job Location", "Job Position", "Personal Details"];
const MultiSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const StepComponent = steps[activeStep];

  return (
    <div className="container flex flex-col items-center justify-center rounded-3xl p-5 opacity-70 shadow-2xl dark dark:bg-slate-100 dark:text-gray-600 bg-black text-white">
      {activeStep != labels.length ? (
        <div className="flex flex-col w-full p-5 justify-center">
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
      ) : (
        <div className="flex flex-col items-center justify-center mt-5">
          <FaRegThumbsUp className="text-[8rem] m-4" />

          <h2 className="font-semibold text-2xl">Thank you!</h2>
          <p className="text-lg">
            You will get an email with further instructions
          </p>
        </div>
      )}
    </div>
  );
};

export default MultiSteps;
