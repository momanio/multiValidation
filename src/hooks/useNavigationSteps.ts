import { createContext } from "react";

import { ContextProps } from "../types/context";
import { initialValues } from "../constants/initialValues";
import { Variant } from "../types/variant";

const variant: Variant = "faded";

export const useNavigationSteps = createContext<ContextProps>({
  activeStep: 0,
  formValues: initialValues,
  handleChange() {},
  handleNext() {},
  handleBack() {},
  variant,
});
