export declare type ContextProps = {
  activeStep: number;
  formValues: ValidationSchema;

  handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checked?: boolean
  ): void;
  handleNext(): void;
  handleBack(): void;
  variant: Variant;
};
