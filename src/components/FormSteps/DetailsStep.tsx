import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input, Card } from "@nextui-org/react";
import { detailsSchema } from "../../types/validationSchema.d";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("date")}
        label="Date of Birth"
        placeholder="Enter your date of birth"
      />
      {errors.date && <p>{errors.date.message}</p>}
      <Input
        {...register("gender")}
        label="Gender"
        placeholder="Enter your gender"
      />
      {errors.gender && <p>{errors.gender.message}</p>}

      <Card className="flex justify-end">
        <Button onClick={onBack}>Back</Button>
        <Button type="submit">Next</Button>
      </Card>
    </form>
  );
}
