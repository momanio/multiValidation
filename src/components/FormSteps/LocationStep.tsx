import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Input, Card } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { locationSchema } from "../../schema/validationSchema";

type LocationFormData = z.infer<typeof locationSchema>;

export default function LocationStep({ onNext }: { onNext: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LocationFormData>({
    resolver: zodResolver(locationSchema),
  });

  const onSubmit = (data: LocationFormData) => {
    console.log("Location data:", data);
    onNext();
  };

  return (
    <div className="container justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("location")}
          label="Location"
          placeholder="eg. NYC"
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
