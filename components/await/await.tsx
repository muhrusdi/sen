import { Fragment, Suspense, type JSX } from "react"
import ErrorComponent from "../errors/error"
import {
  ErrorBoundary as NextErrorBoundary,
  ErrorComponent as ErrorComponentType,
} from "next/dist/client/components/error-boundary"
import Loading from "./loading"
import Promise from "./promise"

export type Props<T> = {
  data: Promise<T>
  children: (result: T) => JSX.Element
  sleep?: number
  name?: string
  fallback?: string | React.ReactNode
  errorComponent?: ErrorComponentType
}

const Await = <T,>({
  fallback = "Loading...",
  name,
  errorComponent = ErrorComponent,
  ...props
}: Props<T>) => {
  const ErrorBoundary = errorComponent ? NextErrorBoundary : Fragment

  return (
    <ErrorBoundary errorComponent={errorComponent}>
      <Suspense fallback={fallback}>
        <Loading name={name} fallback={fallback}>
          <Promise {...props} />
        </Loading>
      </Suspense>
    </ErrorBoundary>
  )
}

export default Await
