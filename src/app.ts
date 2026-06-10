import express from 'express'
import { teacherRouter } from './modules/teachers/teacher.routes'
import { errorHandler } from './middlewares/error.middleware'

export const app = express()

app.use(express.json())

app.get('/health', (_req, res) => res.json({ status: 'ok' }))
app.use('/api/teachers', teacherRouter)

app.use(errorHandler)