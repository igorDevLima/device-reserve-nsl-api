import z from "zod";

export const createReservationSchema = z.object({
  body: z.object({
    teacher_id: z.int().positive(),
    reservation_quantity: z.int().positive(),
    device_id: z.int().positive(),
  }),
});

export type CreateReservation = z.infer<typeof createReservationSchema>["body"];
