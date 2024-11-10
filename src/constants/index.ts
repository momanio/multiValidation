import type { StepConfig } from "../types/step";

export const stepConfig: StepConfig[] = [
  {
    title: "Job Location",
    fields: [
      {
        label: "Location",
        name: "location",
        type: "text",
        placeholder: "Enter job location",
      },
    ],
  },
  {
    title: "Job Position",
    fields: [
      {
        label: "Position",
        name: "position",
        type: "text",
        placeholder: "Enter your Position",
      },
    ],
  },
  {
    title: "Persdonal Information",
    fields: [
      {
        label: "Name",
        name: "name",
        type: "text",
        placeholder: "Enter your name",
      },
      {
        label: "Phone",
        name: "phone",
        type: "text",
        placeholder: "Enter your Mobile Number",
      },
      {
        label: "Certification",
        name: "certification",
        type: "file",
        placeholder: "Upload your certification",
      },
    ],
  },
];
