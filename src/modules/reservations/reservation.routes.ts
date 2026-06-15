import { Router } from "express";
import { validate } from "@/middlewares/validate.middleware";
import { reservationController } from "./reservation.controller";
import {
  createReservationSchema,
  updateReservationSchema,
} from "./reservation.schema";

export const reservationRouter = Router();

reservationRouter.get("/", reservationController.getAll);
reservationRouter.post(
  "/",
  validate(createReservationSchema),
  reservationController.create,
);
reservationRouter.post(
  "/:id/refund",
  reservationController.refund,
);
reservationRouter.delete("/:id", reservationController.delete);
