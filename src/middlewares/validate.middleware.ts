import type { Request, Response, NextFunction } from 'express'
import type { ZodObject } from 'zod'

export const validate =
  (schema: ZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (err) {
      res.status(400).json({ error: err })
    }
  }