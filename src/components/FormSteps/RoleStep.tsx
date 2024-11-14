import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { roleSchema } from "../../schema/validationSchema";
import { Input } from "@nextui-org/input";

import { Button } from "@nextui-org/button";

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
