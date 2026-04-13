"use client"
import { Input } from "@/components/forms/input"
import { startTransition, useActionState, useTransition } from "react"
import { createUserForm } from "./actions"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "./types"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { Select } from "@/components/forms/select"

const FormPage = () => {
  const [data, createUserAction, isPending] = useActionState(
    createUserForm,
    null,
  )
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (e: any) => {
    // await methods.trigger()
    methods.handleSubmit(() => {
      console.log("onSubmit", methods.formState.isValid)
    })(e)

    console.log("onCreateUser", methods.formState.isValid)
    // if (methods.formState.isValid) {
    startTransition(() => {
      const formData = new FormData(e.target)
      createUserAction(formData)
      methods.reset()
    })
    // }
    e.currentTarget.requestSubmit()
  }

  const handleCreateUserAction = async (e: any) => {
    console.log("onCreateUser===", methods.formState.isValid)
  }

  return (
    <FormProvider {...methods}>
      <form action={handleCreateUserAction} onSubmit={onSubmit}>
        <div>
          <Input name="name" placeholder="Full name" defaultValue="" />
        </div>
        <div>
          <Input name="email" placeholder="Email" defaultValue="" />
        </div>
        <div>
          <Input name="password" placeholder="Password" defaultValue="" />
        </div>
        <div>
          <Select name="role" defaultValue="" />
        </div>
        <div>
          <button type="submit">{isPending ? "Loading..." : "Submit"}</button>
        </div>
      </form>
    </FormProvider>
  )
}

export default FormPage
