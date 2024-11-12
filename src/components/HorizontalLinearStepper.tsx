import React, { useState } from "react";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

const HorizontalLinearStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => step === 1;
  const isStepSkipped = (step: number) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prev) => prev + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prev) => prev + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setSkipped(new Set());
  };

  return (
    <div className="w-full p-6">
      <div className="flex items-center justify-between mb-6">
        {steps.map((label, index) => (
          <div key={label} className="flex items-center space-x-2">
            <div
              className={`w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full ${
                index <= activeStep
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
            <div className="text-sm">
              {label}
              {isStepOptional(index) && (
                <span className="ml-1 text-xs text-gray-500">(Optional)</span>
              )}
            </div>
          </div>
        ))}
      </div>
      {activeStep === steps.length ? (
        <div className="text-center">
          <p className="mb-4">All steps completed - you're finished!</p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reset
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-4">Step {activeStep + 1}</p>
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={activeStep === 0}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Back
            </button>
            {isStepOptional(activeStep) && (
              <button
                onClick={handleSkip}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Skip
              </button>
            )}
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalLinearStepper;
