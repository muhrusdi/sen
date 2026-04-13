"use server"

import { insertUser } from "@/drizzle/db"
import { schema, RoleSchema } from "./types"
import { z } from "zod"
import { revalidatePath } from "next/cache"

export const createUserForm = async (prev: any, formData: FormData) => {
  const validatedFields = schema.safeParse(Object.fromEntries(formData))

  console.log("validatedFields", validatedFields)

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.formErrors.fieldErrors,
      data: formData,
    }
  }

  const result = await insertUser({
    email: validatedFields.data.email,
    name: validatedFields.data.name,
    password: validatedFields.data.password,
    role: validatedFields.data.role,
  })

  return {
    data: result,
  }
}

export const createUser = async (prevData: any, formData: FormData) => {
  const validatedFields = schema.safeParse(Object.fromEntries(formData))

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.formErrors.fieldErrors,
      data: Object.fromEntries(formData),
    }
  }

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
