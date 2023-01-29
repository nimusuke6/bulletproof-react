import { factory, primaryKey } from '@mswjs/data'

const models = {
  user: {
    id: primaryKey(String),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    createdAt: Number,
  },
}

export const db = factory(models)

export type Model = keyof typeof db

export const loadDb = () =>
  Object.assign(JSON.parse(window.localStorage.getItem('msw-db') || '{}'), null)

export const persistDb = (model: Model) => {
  const data = loadDb()
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  const dbModel = db[model] as any
  data[model] = dbModel.getAll()
  window.localStorage.setItem('msw-db', JSON.stringify(data))
}

export const initializeDb = () => {
  const database = loadDb()
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key]
    if (dataEntres) {
      // rome-ignore lint/suspicious/noExplicitAny: <explanation>
      dataEntres?.forEach((entry: Record<string, any>) => {
        model.create(entry)
      })
    }
  })
}

initializeDb()
