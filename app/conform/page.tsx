"use client"
import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import { useFormState } from "react-dom"
import { login } from "./action"
import { loginSchema } from "@/types"
import { Submit } from "@/components/submit"

const Conform = () => {
  const [lastResult, action] = useFormState(login, undefined)
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema })
    },
    shouldValidate: "onBlur",
  })

  return (
    <div>
      <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
        <div>
          <label>Email</label>
          <input aria-label="email" type="email" name={fields.email.name} />
          <div>{fields.email.errors}</div>
        </div>
        <div>
          <label>Password</label>
          <input
            aria-label="password"
            type="password"
            name={fields.password.name}
          />
          <div>{fields.password.errors}</div>
        </div>
        <div>
          <span>Remember me</span>
          <input
            aria-label="remember"
            type="checkbox"
            name={fields.remember.name}
          />
        </div>
        <Submit>
          {status => (
            <button type="submit">
              {status.pending ? "Loading..." : "Submit"}
            </button>
          )}
        </Submit>
      </form>
    </div>
  )
}

export default Conform
