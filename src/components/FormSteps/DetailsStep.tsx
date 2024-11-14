import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input, Card } from "@nextui-org/react";
import { detailsSchema } from "../../schema/validationSchema";

type DetailsFormData = z.infer<typeof detailsSchema>;
export default function DetailsStep({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DetailsFormData>({
    resolver: zodResolver(detailsSchema),
  });

  const onSubmit = (data: DetailsFormData) => {
    console.log("Details data:", data);

    onNext();
  };

  return (
    <div className="container justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
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
          onClick={onBack}
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
