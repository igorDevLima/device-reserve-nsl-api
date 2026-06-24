import express from 'express'
import { teacherRouter } from './modules/teachers/teacher.routes'
import { errorHandler } from './common/middlewares/error.middleware'
import { deviceRouter } from './modules/devices/device.routes'
import { reservationRouter } from './modules/reservations/reservation.routes'

export const app = express()

app.use(express.json())

app.get('/health', (_req, res) => res.json({ status: 'ok' }))
app.use('/api/teachers', teacherRouter)
app.use('/api/devices', deviceRouter)
app.use('/api/reservations', reservationRouter)

app.use(errorHandler)