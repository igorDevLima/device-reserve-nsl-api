import { Router } from 'express'
import { validate } from '@/middlewares/validate.middleware'
import { deviceController } from './device.controller'
import { createDeviceSchema } from './device.schema'


export const deviceRouter = Router()

deviceRouter.get('/', deviceController.getAll)
deviceRouter.post('/', validate(createDeviceSchema), deviceController.create)
deviceRouter.delete('/:id', deviceController.delete)