import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button } from "@nextui-org/react";

import { roleSchema } from "../../schema/validationSchema";
import { useStepsStore } from "../../stores/useStepsStore";

type RoleFormData = z.infer<typeof roleSchema>;

export default function RoleStep() {
  const { handleChange, handleNext, handleBack, formValues } = useStepsStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleFormData>({
    resolver: zodResolver(roleSchema),
    defaultValues: {
      role: formValues.role?.value || "",
    },
  });

  const onSubmit = (data: RoleFormData) => {
    handleChange(
      {
        target: {
          name: "role",
          value: data.role,
          type: "text",
        },
      } as React.ChangeEvent<HTMLInputElement> // Type assertion for the event
    );

    handleNext();
  };

  return (
    <div className="container justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("role")}
          label="Role"
          placeholder="Enter your Job Role"
        />
        {errors.role && <p className="text-red-600">{errors.role.message}</p>}
        <Button
          className="mt-4 w-full hover:scale-105 font-semibold"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          className="mt-4 w-full hover:scale-105 font-semibold"
          type="submit"
        >
          Next
        </Button>
      </form>
    </div>
  );
}
