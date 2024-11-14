import { z } from "zod";

export const locationSchema = z.object({
  location: z.string().min(1, "Location is required"),
});

export const roleSchema = z.object({
  role: z.string().min(1, "Role is required"),
});

export const detailsSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^(077|078|079)\d{7}$/, "Invalid phone format"),
});
