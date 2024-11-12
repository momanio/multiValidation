import { useCallback, useContext } from "react";

import { Button, Card, Input } from "@nextui-org/react";
import { useNavigationSteps } from "../../hooks/useNavigationSteps";

export default function LocationStep() {
  const { formValues, handleChange, handleNext, variant } =
    useContext(useNavigationSteps);
  const { firstName, lastName, email, gender } = formValues;

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ firstName, lastName, email, gender }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [formValues, firstName, lastName, email, gender]
  );

  return (
    <>
      <div className=" w-full grid grid-cols-12 gap-4">
        <Input
          variant={variant}
          fullWidth
          radius={"full"}
          label="First Name"
          name="firstName"
          placeholder="Your first name"
          value={firstName.value}
          onChange={handleChange}
          isInvalid={!!firstName.error}
          errorMessage={firstName.error}
          isRequired={firstName.required}
        />

        <Input
          variant={variant}
          fullWidth
          label="Last Name"
          name="lastName"
          placeholder="Your last name"
          value={lastName.value}
          onChange={handleChange}
          isInvalid={!!lastName.error}
          errorMessage={lastName.error}
          required={lastName.required}
        />

        <Input
          variant={variant}
          fullWidth
          label="Email"
          name="email"
          placeholder="Your email address"
          type="email"
          value={email.value}
          onChange={handleChange}
          isInvalid={!!email.error}
          errorMessage={email.error}
          required={email.required}
        />
      </div>

      <Card className="flex justify-end">
        <Button
          variant="faded"
          disabled={isError()}
          color="primary"
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Card>
    </>
  );
}
