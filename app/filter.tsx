"use client"
import { useContext } from "react"
import { filterAction } from "./actions"
import { StoreContext } from "./providers"
import { revalidatePath } from "next/cache"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const AsyncFilter = ({ sort_by, page }) => {
  const { startTransition } = useContext(StoreContext)
  const { push, prefetch } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleAction = async (formData: FormData) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString())
      params.set("sort_by", formData.get("sort_by") as string)
      push(pathname + "?" + params.toString())
      // filterAction(formData)
    })
  }

  return (
    <div>
      <form action={handleAction}>
        <button type="submit" name="sort_by" value="popularity.desc">
          Desc
        </button>
        <button type="submit" name="sort_by" value="popularity.asc">
          Asc
        </button>
        <button type="submit" name="page" value={Number(page?.value || 0) + 1}>
          Page {Number(page?.value || 0) + 1}
        </button>
      </form>
    </div>
  )
}

export default AsyncFilter
