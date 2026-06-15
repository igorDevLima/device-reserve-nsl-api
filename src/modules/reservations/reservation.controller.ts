import { Request, Response, NextFunction } from "express";
import { convertStringArgToNumber } from "@/utils/convert";
import { CreatedResponse, OKResponse } from "@/common/helpers/success";
import { reservationService } from "./reservation.service";
import { CreateReservation } from "./reservation.schema";
import { teacherService } from "../teachers/teacher.service";
import { BadRequestError } from "@/common/helpers/error";
import { deviceService } from "../devices/device.service";

export const reservationController = {
  getAll: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const reservation = await reservationService.getAll();
      new OKResponse("Reservas encontradas com sucesso", reservation).send(res);
    } catch (err) {
      next(err);
    }
  },

  create: async (
    req: Request<{}, {}, CreateReservation>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { device_id, reservation_quantity, teacher_id } = req.body;

      const teacher = await teacherService.getById(teacher_id);
      const device = await deviceService.getById(device_id);

      if (!teacher) throw new BadRequestError("Professor não encontrado!");

      if (!device) throw new BadRequestError("Dispositivo não encontrado!");

      if (device.available_quantity < reservation_quantity)
        throw new BadRequestError("Quantidade solicitada indisponível! Há apenas " + device.available_quantity + " disponíveis");

      const reservation = await reservationService.create(req.body);
      await deviceService.update(device.id, {
        ...device,
        available_quantity: device.available_quantity - reservation_quantity,
      });
      new CreatedResponse("Reserva criada com sucesso", reservation).send(res);
    } catch (err) {
      next(err);
    }
  },

  refund: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reservation_id = convertStringArgToNumber(req.params.id);

      const reservation = await reservationService.getById(reservation_id);

      if (!reservation) throw new BadRequestError("Reserva não encontrada!");

      if (reservation.refunded === true)
        throw new BadRequestError("Reserva já devolvida!");

      const device = await deviceService.getById(reservation.device_id);

      if (!device)
        throw new BadRequestError(
          "Não foi possível encontrar o dispositivo, certifique-se que o dispositivo não foi deletado!",
        );

      const update_reservation = await reservationService.update(reservation.id, {
        ...reservation,
        refunded: true,
        refundedAt: new Date(),
      });

      await deviceService.update(device.id, {
        ...device,
        available_quantity: device.max_quantity,
      });

      new OKResponse("Reserva devolvida com sucesso", update_reservation).send(
        res,
      );
    } catch (err) {
      next(err);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = convertStringArgToNumber(req.params.id);
      const reservation = await reservationService.delete(id);
      new OKResponse("Reserva excluída com sucesso", reservation).send(res);
    } catch (err) {
      next(err);
    }
  },
};
