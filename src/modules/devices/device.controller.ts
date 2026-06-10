import { Request, Response, NextFunction } from "express";
import { deviceService } from "./device.service";
import { CreateDevice } from "./device.schema";

export const deviceController = {
  getAll: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const device = await deviceService.getAll();
      res.json(device);
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
        res.status(201).json(device);
      } catch (err) {
        next(err);
      }
    },
};
