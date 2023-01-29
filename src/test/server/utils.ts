import { db } from '@/test/db'
import jwt from 'jsonwebtoken'
import omit from 'lodash/omit'
import { context, createResponseComposition } from 'msw'

export const delayedResponse = createResponseComposition(undefined, [
  context.delay(1000),
])

export const hash = (str: string) => {
  let hash = 5381
  let i = str.length

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i)
  }
  return String(hash >>> 0)
}

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export const sanitizeUser = (user: any) => omit(user, ['password', 'iat'])

export function authenticate({
  email,
  password,
}: { email: string; password: string }) {
  const user = db.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  })

  if (user?.password === hash(password)) {
    const sanitizedUser = sanitizeUser(user)
    const encodedToken = jwt.sign(sanitizedUser, 'JWT_SECRET')
    return { user: sanitizedUser, jwt: encodedToken }
  }

  const error = new Error('Invalid username or password')
  throw error
}
