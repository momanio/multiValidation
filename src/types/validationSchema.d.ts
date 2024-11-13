import { z } from "zod";

// Define schemas for each step
export const locationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
});

export const roleSchema = z.object({
  city: z.string().min(1, "City is required"),
  phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone format"),
  agreement: z.boolean().refine((val) => val === true, "Must accept terms"),
});

export const detailsSchema = z.object({
  date: z.string().nonempty("Date is required"),
  gender: z.string().min(1, "Gender is required"),
});
