import { prisma } from '@/database/prisma'
import type { CreateTeacher } from './teacher.schema'
import { ID } from '@/types'

export const teacherRepository = {
  findAll: () => prisma.teacher.findMany(),

  findById: (id: ID) =>
    prisma.teacher.findUnique({ where: { id } }),

  create: (data: CreateTeacher) =>
    prisma.teacher.create({ data }),

  delete: (id: ID) =>
    prisma.teacher.delete({ where: { id } }),
}