import { createContext } from "react";

import { ContextProps } from "../types/context";
import { Variant } from "../types/variant";
import { initialValues } from "../constants/initialValues";

const variant: Variant = "faded";

export const useNavigationSteps = createContext<ContextProps>({
  activeStep: 0,
  formValues: initialValues,
  handleChange() {},
  handleNext() {},
  handleBack() {},
  variant,
});
