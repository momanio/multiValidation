import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import PaginationBar from "../components/PaginationBar";
import Step from "../components/Step";
import { stepConfig } from "../constants";

interface FormData {
  location: string;
  position: string;
  name: string;
  mobileNumber: string;
  certification: string;
}

const Register = () => {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>();

  const totalSteps = stepConfig.length;

  const handleNext = () =>
    setStep((prev) => (prev < totalSteps - 1 ? prev + 1 : prev));
  const handleBack = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/2 mx-auto p-6 bg-white/30 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20"
    >
      <PaginationBar step={step} totalSteps={totalSteps} />
      <Step stepConfig={stepConfig[step]} register={register} errors={errors} />
      <div className="flex justify-between text-white mt-6">
        {step > 0 && (
          <Button color="secondary" onClick={handleBack}>
            Back
          </Button>
        )}
        {step < totalSteps - 1 ? (
          <Button color="primary" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button color="success" type="submit">
            Submit
          </Button>
        )}
      </div>
    </form>
  );
};

export default Register;
