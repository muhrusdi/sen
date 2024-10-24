"use client"
import { InputHTMLAttributes } from "react"
import { Controller, useFormContext } from "react-hook-form"
import Input from "."

type Props = {
  name: string
  errors?: Record<string, any>
} & InputHTMLAttributes<HTMLInputElement>

export const FormInput: React.FC<Props> = ({ required, errors, ...props }) => {
  const form = useFormContext()
  const error = (form.formState.errors || errors)[props.name]
  const errorMessage = error?.message as string

  return (
    <>
      <Controller
        render={({ field }) => {
          return <Input {...field} />
        }}
        rules={{ required }}
        control={form.control}
        {...props}
      />
      {errorMessage ? <div className="text-red-500">{errorMessage}</div> : null}
    </>
  )
}
