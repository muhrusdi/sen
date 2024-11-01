import { z } from "zod"

export const RoleSchema = z.union([z.literal("admin"), z.literal("customer")])

export const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(5),
  role: RoleSchema,
})

export type ActionState = {
  error?: z.infer<typeof schema>
  data?: Record<string, any>
  [key: string]: any
}
