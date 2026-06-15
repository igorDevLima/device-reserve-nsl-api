import { prisma } from "@/database/prisma";
import { CreateReservation, UpdateReservation } from "./reservation.schema";
import { ID } from "@/types";

export const reservationRepository = {
  findAll: () =>
    prisma.reservation.findMany({
      include: {
        device: true,
        teacher: true,
        
      },
    }),
  findById: (id: ID) => prisma.reservation.findUnique({ where: { id } }),
  create: (data: CreateReservation) => prisma.reservation.create({ data }),
  update: (id: ID, data: UpdateReservation) =>{
    console.log(id,data)
    return prisma.reservation.update({ where: { id }, data })},
  delete: (id: ID) => prisma.reservation.delete({ where: { id } }),
};
