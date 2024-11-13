import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Textarea, Card } from "@nextui-org/react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { roleSchema } from "../../types/validationSchema.d";

type RoleFormData = z.infer<typeof roleSchema>;

export default function RoleStep({
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
  } = useForm<RoleFormData>({
    resolver: zodResolver(roleSchema),
  });

  const onSubmit = (data: RoleFormData) => {
    console.log("Role data:", data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        {...register("city")}
        label="City"
        placeholder="Enter your city"
      />
      {errors.city && <p>{errors.city.message}</p>}
      <Textarea
        {...register("phone")}
        label="Phone"
        placeholder="e.g., xxx-xxx-xxxx"
      />
      {errors.phone && <p>{errors.phone.message}</p>}
      <FormControlLabel
        control={<Checkbox {...register("agreement")} />}
        label="Agree to terms and conditions"
      />
      {errors.agreement && <p>{errors.agreement.message}</p>}

      <Card className="flex justify-end">
        <Button onClick={onBack}>Back</Button>
        <Button type="submit">Next</Button>
      </Card>
    </form>
  );
}
