import { prisma } from "@/database/prisma";
import { CreateReservation } from "./reservation.schema";

export const reservationRepository = {
  getAll: () => prisma.reservation.findMany(),
  createReservation: (data: CreateReservation)=> prisma.reservation.create({ data })

};
