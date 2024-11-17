export const initialValues: ValidationSchema = {
  location: {
    value: "",
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 20,
    helperText: "Custom error message",
  },
  role: {
    value: "",
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 20,
  },
  name: {
    value: "",
    error: "",
    validate: "text",
  },
  phone: {
    value: "",
    error: "",
    validate: "phone",
    maxLength: 10,
  },
};
