import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Input, Card } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { locationSchema } from "../../types/validationSchema.d";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("firstName")}
        label="First Name"
        placeholder="Your first name"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <Input
        {...register("lastName")}
        label="Last Name"
        placeholder="Your last name"
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}
      <Input
        {...register("email")}
        label="Email"
        placeholder="Your email"
        type="email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <Card className="flex justify-end">
        <Button type="submit">Next</Button>
      </Card>
    </form>
  );
}
