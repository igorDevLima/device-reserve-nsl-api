import type { Request, Response, NextFunction } from "express";
import { teacherService } from "./teacher.service";
import type { CreateTeacher } from "./teacher.schema";

export const teacherController = {
  getAll: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const teacher = await teacherService.getAll();
      res.json(teacher);
    } catch (err) {
      next(err);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const teacher = await teacherService.getById(Number(id));
      res.json(teacher);
    } catch (err) {
      next(err);
    }
  },

  create: async (
    req: Request<{}, {}, CreateTeacher>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const teacher = await teacherService.create(req.body);
      res.status(201).json(teacher);
    } catch (err) {
      next(err);
    }
  },
};
