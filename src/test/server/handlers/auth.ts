import { rest } from 'msw'
import { nanoid } from 'nanoid'

import { API_URL } from '@/config'
import { db, persistDb } from '@/test/db'
import { authenticate, delayedResponse, hash } from '@/test/server/utils'

type RegisterBody = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export const authHandlers = [
  rest.post<RegisterBody>(`${API_URL}/auth/register`, (req, res, ctx) => {
    try {
      const userObject = req.body

      const existingUser = db.user.findFirst({
        where: {
          email: {
            equals: userObject.email,
          },
        },
      })

      if (existingUser) {
        throw new Error('The user already exists')
      }

      db.user.create({
        ...userObject,
        id: nanoid(),
        password: hash(userObject.password),
        createdAt: Date.now(),
      })

      persistDb('user')

      const result = authenticate({
        email: userObject.email,
        password: userObject.password,
      })

      return delayedResponse(ctx.json(result))
      // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' }),
      )
    }
  }),
]
