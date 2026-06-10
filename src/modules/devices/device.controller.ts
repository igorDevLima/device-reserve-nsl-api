import { Request, Response, NextFunction } from "express";
import { deviceService } from "./device.service";
import { CreateDevice } from "./device.schema";
import { convertStringArgToNumber } from "@/utils/convert";
import { CreatedResponse, OKResponse } from "@/common/helpers/success";

export const deviceController = {
  getAll: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const device = await deviceService.getAll();
      new OKResponse("Dispositivos encontrados com sucesso", device).send(res);
    } catch (err) {
      next(err);
    }
  },

  create: async (
    req: Request<{}, {}, CreateDevice>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const device = await deviceService.create(req.body);
      new CreatedResponse("Dispositivo criado com sucesso", device).send(res);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = convertStringArgToNumber(req.params.id);
      const device = await deviceService.delete(id);
      new OKResponse("Dispositivo excluido com sucesso", device).send(res);
    } catch (err) {
      next(err);
    }
  },
};
