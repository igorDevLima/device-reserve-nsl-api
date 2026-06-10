import { Router } from 'express'
import { teacherController } from './teacher.controller'
import { validate } from '@/middlewares/validate.middleware'
import { createTeacherSchema } from './teacher.schema'

export const teacherRouter = Router()

teacherRouter.get('/', teacherController.getAll)
teacherRouter.get('/:id', teacherController.getById)
teacherRouter.delete('/:id', teacherController.delete)
teacherRouter.post('/', validate(createTeacherSchema), teacherController.create)