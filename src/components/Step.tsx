import React from "react";
import { Input } from "@nextui-org/react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormField } from "../types/formField";

interface StepProps {
  stepConfig: {
    title: string;
    fields: {
      label: string;
      name: string;
      type: string;
      placeholder?: string;
    }[];
  };
  register: UseFormRegister<FormField>; // Accept the `register` function from react-hook-form
  errors: FieldErrors; // Accept validation errors
}

const Step: React.FC<StepProps> = ({ stepConfig, register, errors }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold mb-10">{stepConfig.title}</h3>
      {stepConfig.fields.map((field) => (
        <div key={field.name} className="mb-4">
          <Input
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
            {...register(field.name, {
              required: `${field.label} is required`,
            })} // Register input with validation
            fullWidth
            className="flex flex-col mb-2"
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[field.name]?.message as string}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Step;
