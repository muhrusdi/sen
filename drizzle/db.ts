import "@/env.config"
import { drizzle } from "drizzle-orm/libsql"
import { createClient } from "@libsql/client"
import { UserType, user } from "./schema"
import * as schema from "./schema"

const client = createClient({
  url: process.env.TURSO_URL as string,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

export const db = drizzle(client, { schema })

type Params = {
  limit?: number
  offset?: number
}
export const getUsers = (params?: Params) =>
  db.query.user.findMany({
    limit: params?.limit || 12,
    offset: params?.offset || 0,
    orderBy: (users, { desc }) => [desc(users.createdAt)],
  })

export const insertUser = async (_user: UserType) => {
  return db.insert(user).values(_user).returning()
}
