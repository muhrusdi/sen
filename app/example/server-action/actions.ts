"use server"

import { insertUser } from "@/drizzle/db"
import { schema, RoleSchema } from "./types"
import { z } from "zod"
import { pending } from "@/utils"

export const validateUser = async (formData: FormData) => {
  const validatedFields = schema.safeParse(Object.fromEntries(formData))
  console.log("validatedFields", validatedFields.data)
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.formErrors.fieldErrors,
      data: Object.fromEntries(formData),
    }
  }
  return {
    data: validatedFields.data,
  }
}

export const createUser = async (prevData: any, formData: FormData) => {
  const data = await validateUser(formData)

  if (data.error) {
    return data
  }

  await pending(3000)

  const result = await insertUser({
    email: formData.get("email") as string,
    name: formData.get("name") as string,
    password: formData.get("password") as string,
    role: formData.get("role") as z.infer<typeof RoleSchema>,
  })

  return {
    data: result,
  }
}
