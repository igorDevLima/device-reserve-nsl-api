import { z } from "zod";

export const createReservationSchema = z.object({
  body: z.object({
    teacher_id: z.int().positive(),
    reservation_quantity: z.int().positive(),
    device_id: z.int().positive(),
  }),
});

export const updateReservationSchema = z.object({
  body: z.object({
    teacher_id: z.int().positive().optional(),
    reservation_quantity: z.int().positive().optional(),
    device_id: z.int().positive().optional(),
    refunded: z.boolean().optional(),
    refundedAt: z.date().optional()
  })
})

export type UpdateReservation = z.infer<typeof updateReservationSchema>["body"];

export type CreateReservation = z.infer<typeof createReservationSchema>["body"];
