"use client"
import { StateContext } from "@/app/providers"
import { useFilterSearch } from "@/hooks"
import Link from "next/link"
import { useContext, useState } from "react"

const Header = () => {
  const { removeFilter, setFilter, clearFilter, searchParams } =
    useFilterSearch()
  const [error, setError] = useState(false)
  const store = useContext(StateContext)

  if (error) {
    throw new Error("oopps")
  }

  return (
    <div className="flex space-x-3">
      <button onClick={() => setFilter({ q: "test", firstDate: "test" })}>
        filter
      </button>
      <button onClick={() => setFilter("sort_by", "popularity.asc")}>
        sort asc
      </button>
      <button onClick={() => setFilter("sort_by", "popularity.desc")}>
        sort
      </button>
      <button onClick={() => setFilter({ page: "1" })}>1</button>
      <button onClick={() => setFilter({ page: "2" })}>2</button>
      <button onClick={() => removeFilter("q")}>remove</button>
      <button
        onClick={() => setFilter({ q: "test-test", lastDate: "test-22" })}
      >
        filter3
      </button>
      <button onClick={() => clearFilter()}>clear</button>
      <Link href="/form-action">Form</Link>
      <button onClick={() => store?.onChange({ data: 1 })}>
        Update context
      </button>
      <form
        onSubmit={e => {
          e.preventDefault()

          const val = e.target as HTMLFormElement
          const search = val.search as HTMLInputElement

          setFilter("s", search.value)
        }}
      >
        <input placeholder="search" name="search" />
      </form>
      <div>
        <button
          onClick={() => {
            setError(true)
          }}
        >
          Catch
        </button>
      </div>
    </div>
  )
}

export default Header
