import type { Request, Response, NextFunction } from "express";
import { teacherService } from "./teacher.service";
import type { CreateTeacher } from "./teacher.schema";
import { convertStringArgToNumber } from "@/common/utils/convert";
import { CreatedResponse, OKResponse } from "@/common/helpers/success";

export const teacherController = {
  getAll: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const teacher = await teacherService.getAll();
      new CreatedResponse("Professores encontrados com sucesso", teacher).send(
        res,
      );
    } catch (err) {
      next(err);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = convertStringArgToNumber(req.params.id);
      const teacher = await teacherService.getById(id);
      new CreatedResponse("Professor encontrado com sucesso", teacher).send(
        res,
      );
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

      new CreatedResponse("Professor criado com sucesso", teacher).send(res);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = convertStringArgToNumber(req.params.id);

      const teacher = await teacherService.delete(id);
      new OKResponse("Professor excluído com sucesso", teacher).send(res);
    } catch (err) {
      next(err);
    }
  },
};
