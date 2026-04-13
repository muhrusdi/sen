"use client"
import Input from "@/components/forms/input"
import React, {
  startTransition,
  use,
  useActionState,
  useOptimistic,
  useRef,
  useTransition,
} from "react"
import { createUser, validateUser } from "./actions"
import { LoadingContext } from "@/app/providers"
import Form from "next/form"
import { useFormStatus } from "react-dom"
import { z } from "zod"
import { ActionState, schema } from "./types"

const FormPage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [_data, createUserAction, isPending] = useActionState<
    ActionState | null,
    FormData
  >(createUser, null)

  const [data, setOptimisticData] = useOptimistic<ActionState | null>(_data)

  const handleUserAction = async (formData: FormData) => {
    const user = (await validateUser(formData)) as ActionState

    console.log("yser", user)
    if (user.error) {
      setOptimisticData(user)
    }
    startTransition(() => {
      createUserAction(formData)
    })
  }

  console.log("data", data)

  return (
    <form action={handleUserAction} ref={formRef}>
      <div>
        <Input
          name="name"
          placeholder="Full name"
          defaultValue={data?.data?.name}
          error={data?.error}
        />
      </div>
      <div>
        <Input
          name="email"
          placeholder="Email"
          defaultValue={data?.data?.email}
          error={data?.error}
        />
      </div>
      <div>
        <Input name="password" placeholder="Password" error={data?.error} />
      </div>
      <div>
        <select name="role" title="Role">
          <option value="">None</option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <p className="text-red-500">{data?.error?.role}</p>
      </div>
      <div>
        <button type="submit">{isPending ? "Loading..." : "Submit"}</button>
      </div>
    </form>
  )
}

export default FormPage
