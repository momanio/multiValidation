import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input } from "@nextui-org/react";

import { detailsSchema } from "../../schema/validationSchema";
import { useStepsStore } from "../../stores/useStepsStore";

type DetailsFormData = z.infer<typeof detailsSchema>;
export default function DetailsStep() {
  const { handleChange, handleNext, handleBack, formValues } = useStepsStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DetailsFormData>({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      name: formValues.name?.value || "",
      phone: formValues.phone?.value || "",
    },
  });

  const onSubmit = (data: DetailsFormData) => {
    handleChange(
      {
        target: {
          name: "name",
          value: data.name,
          type: "text",
        },
      } as React.ChangeEvent<HTMLInputElement> // Type assertion for the event
    );
    console.log("Details data:", data);
    console.log("Form values:", formValues);

    handleNext();
  };

  return (
    <div className="container justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Location"
          className="p-4"
          value={formValues.location.value}
          disabled={true}
        />
        <Input
          label="Role"
          className="p-4"
          value={formValues.role.value}
          disabled={true}
        />
        <Input
          {...register("name")}
          label="Name"
          placeholder="Enter your Name"
          className="p-4"
        />
        {errors.name && <p>{errors.name.message}</p>}
        <Input
          {...register("phone")}
          label="Phone"
          placeholder="e.g., 079-123-4567"
          className="p-4"
        />
        {errors.phone && <p>{errors.phone.message}</p>}

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
