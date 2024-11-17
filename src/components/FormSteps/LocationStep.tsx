import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Input } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";

import { locationSchema } from "../../schema/validationSchema";
import { useStepsStore } from "../../stores/useStepsStore";

type LocationFormData = z.infer<typeof locationSchema>;

export default function LocationStep() {
  const { handleChange, handleNext, formValues } = useStepsStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LocationFormData>({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      location: formValues.location?.value || "",
    },
  });

  const onSubmit = (data: LocationFormData) => {
    // Update Zustand store with form value
    handleChange(
      {
        target: {
          name: "location",
          value: data.location,
          type: "text",
        },
      } as React.ChangeEvent<HTMLInputElement> // Type assertion for the event
    );
    handleNext(); // Proceed to the next step
  };

  return (
    <div className="container justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("location")}
          label="Location"
          placeholder="e.g., NYC"
          errorMessage={errors.location ? "error" : "default"}
        />
        {errors.location && (
          <p className="text-red-600">{errors.location.message}</p>
        )}

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
