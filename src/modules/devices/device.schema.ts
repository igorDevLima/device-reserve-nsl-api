import { z } from "zod";

export const createDeviceSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    available_quantity: z.int().positive().optional(),
    max_quantity: z.int().positive().optional(),
  }),
});

export type CreateDevice = z.infer<typeof createDeviceSchema>["body"];
