import { z } from 'zod'

export const createTeacherSchema = z.object({
  body: z.object({
    name: z.string().min(2),
  }),
})

export type CreateTeacher = z.infer<
  typeof createTeacherSchema
>['body']