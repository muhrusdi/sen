import { Await } from "@/components/await"
import Header from "@/containers/next/header"
import { getData } from "@/lib/api"
import { Movie } from "@/types/movie"
import type { NextPage } from "next"
import { cookies } from "next/headers"
import Link from "next/link"
import Filter from "./filter"

const Home: NextPage = ({ searchParams }) => {
  const sort_by = cookies().get("sort_by")
  const page = cookies().get("page")

  console.log("-dd-d", searchParams)

  return (
    <div>
      <Header />
      <Filter sort_by={sort_by?.value} page={page?.value} />
      <div>
        <Await
          tags={[searchParams?.sort_by as string]}
          sleep={3000}
          data={getData<{ results: Movie[] }>("/discover/movie", {
            query: { sort_by: searchParams?.sort_by || "" },
          })}
        >
          {movies => (
            <ul>
              {movies?.results?.map(item => (
                <li key={item.id}>
                  <Link prefetch href={`/movie/${item.id}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Await>
      </div>
      <div>
        <Await
          sleep={4000}
          tags={[page?.value as string]}
          data={getData<{ results: Movie[] }>("/discover/tv", {
            query: { page: (page?.value as string) || 1 },
          })}
        >
          {tv => (
            <ul>
              {tv.results.map(item => (
                <li key={item.id}>
                  <Link href={`/movie/${item.id}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </Await>
      </div>
    </div>
  )
}

export default Home
