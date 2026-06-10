import { ID } from "@/types";
import { teacherRepository } from "./teacher.repository";
import type { CreateTeacher } from "./teacher.schema";
import { BadRequestError, NotFoundError } from "@/common/helpers/error";

export const teacherService = {
  getAll: () => teacherRepository.findAll(),

  getById: async (id: ID) => {
    const teacher = await teacherRepository.findById(id);

    if (!teacher) throw new NotFoundError("Professor não encontrado");

    return teacher;
  },

  create: (data: CreateTeacher) => teacherRepository.create(data),

  delete: async (id: ID) => {
    const teacher = await teacherRepository.findById(id);

    if (!teacher) throw new BadRequestError("Professor não encontrado");

    return teacherRepository.delete(id);
  },
};
