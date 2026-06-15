import { ID } from "@/types";
import { NotFoundError } from "@/common/helpers/error";
import { reservationRepository } from "./reservation.repository";
import { CreateReservation, UpdateReservation } from "./reservation.schema";

export const reservationService = {
  getAll: () => reservationRepository.findAll(),

  getById: (id: ID) => reservationRepository.findById(id),

  create: (data: CreateReservation) => reservationRepository.create(data),

  update:(id: ID, data: UpdateReservation) => reservationRepository.update(id, data),

  delete: async (id: ID) => {
    const reservation = await reservationRepository.findById(id);

    if (!reservation) throw new NotFoundError("Dispositivo não encontrado");

    return reservationRepository.delete(id);
  },
};
