import { ID } from '@/types'
import { teacherRepository } from './teacher.repository'
import type { CreateTeacher } from './teacher.schema'

export const teacherService = {
  getAll: () => teacherRepository.findAll(),

  getById: async (id: ID) => {
    const teacher = await teacherRepository.findById(id)
    
    if (!teacher) throw new Error('Professor não encontrado')
    return teacher
  },

  create: (data: CreateTeacher) =>
    teacherRepository.create(data),

  delete: async (id: ID) => {
    const teacher = await teacherRepository.findById(id)

    if (!teacher) throw new Error('Professor não encontrado')

    return teacherRepository.delete(id)
  }
}