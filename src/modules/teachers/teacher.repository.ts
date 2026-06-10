import { prisma } from '@/database/prisma'
import type { CreateTeacher } from './teacher.schema'

export const teacherRepository = {
  findAll: () => prisma.teacher.findMany(),

  findById: (id: string) =>
    prisma.teacher.findUnique({ where: { id } }),

  create: (data: CreateTeacher) =>
    prisma.teacher.create({ data }),

  delete: (id: string) =>
    prisma.teacher.delete({ where: { id } }),
}