import { useCallback, useContext } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { Button, Card, Textarea } from "@nextui-org/react";
import { useNavigationSteps } from "../../hooks/useNavigationSteps";

export default function RoleStep() {
  const { formValues, handleChange, handleBack, handleNext, variant } =
    useContext(useNavigationSteps);
  const { city, date, phone, agreenemt } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({ city, date, phone, agreenemt }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [formValues, city, date, phone, agreenemt]
  );

  return (
    <>
      <div className="container w-full grid grid-cols-12 gap-4">
        <Textarea
          variant={variant}
          fullWidth
          label="City"
          name="city"
          placeholder="Enter your city"
          value={city.value}
          onChange={handleChange}
          isInvalid={!!city.error}
          errorMessage={city.error}
          required={city.required}
        />

        <Textarea
          variant={variant}
          fullWidth
          label="Phone number"
          name="phone"
          placeholder="i.e: xxx-xxx-xxxx"
          value={phone.value}
          onChange={handleChange}
          isInvalid={!!phone.error}
          errorMessage={phone.error}
          required={phone.required}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={agreenemt.value}
              onChange={handleChange}
              name="agreenemt"
              color="primary"
              required={agreenemt.required}
            />
          }
          label="Agree to terms and conditions"
        />
        <FormHelperText error={!!agreenemt.error}>
          {agreenemt.error}
        </FormHelperText>
      </div>

      <Card className="flex justify-end">
        <Button onClick={handleBack}>Back</Button>
        <Button
          variant="bordered"
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
