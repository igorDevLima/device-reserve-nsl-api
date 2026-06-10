import type { ErrorRequestHandler } from 'express'

export const errorHandler: ErrorRequestHandler = (
  err, _req, res, _next
) => {
  console.error(err)
  const status = err.statusCode ?? 500
  const message = err.message ?? 'Erro interno do servidor'
  res.status(status).json({ error: message })
}