import { create } from "zustand";
import { initialValues } from "../constants/initialValues";
import { Variant } from "../types/variant";
import { State } from "../types/state";

const isText = /^[A-Z ]+$/i;
const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const isPhone = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/;
const isZip = /^[0-9]{5}([- /]?[0-9]{4})?$/;
const isNumber = /^\d+$/;

// Applied to all fields
const variant: Variant = "faded";

interface StepsStore extends State {
  handleNext: () => void;
  handleBack: () => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checked?: boolean
  ) => void;
}

export const useStepsStore = create<StepsStore>((set) => ({
  activeStep: 0,
  formValues: initialValues,

  handleNext: () =>
    set((state) => ({
      activeStep: state.activeStep + 1,
    })),

  handleBack: () =>
    set((state) => ({
      activeStep: state.activeStep - 1,
    })),

  handleChange: (event, checked) => {
    const { type, name, value } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    set((state) => ({
      formValues: {
        ...state.formValues,
        [name]: {
          ...state.formValues[name],
          value: fieldValue,
        },
      },
    }));

    const fieldName = initialValues[name];
    if (!fieldName) return;

    const { required, validate, minLength, maxLength, helperText } = fieldName;

    let error = "";

    if (required && !fieldValue) error = "This field is required";
    if (minLength && value && value.length < minLength)
      error = `Minimum ${minLength} characters is required.`;
    if (maxLength && value && value.length > maxLength)
      error = "Maximum length exceeded!";
    if (validate) {
      switch (validate) {
        case "text":
          if (value && !isText.test(value))
            error = helperText || "This field accepts text only.";
          break;

        case "number":
          if (value && !isNumber.test(value))
            error = helperText || "This field accepts numbers only.";
          break;

        case "email":
          if (value && !isEmail.test(value))
            error = helperText || "Please enter a valid email address.";
          break;

        case "phone":
          if (value && !isPhone.test(value))
            error =
              helperText ||
              "Please enter a valid phone number. i.e: xxx-xxx-xxxx";
          break;

        case "zip":
          if (value && !isZip.test(value))
            error = helperText || "Please enter a valid zip code.";
          break;

        case "checkbox":
          if (!checked) error = helperText || "Please provide a valid value.";
          break;

        case "select":
          if (!value) error = helperText || "Please select a value.";
          break;

        default:
          break;
      }
    }

    set((state) => ({
      formValues: {
        ...state.formValues,
        [name]: {
          ...state.formValues[name],
          error,
        },
      },
    }));
  },
}));
