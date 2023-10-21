"use client"
import { Await, Suspense } from "@/components/await"
import NextOverview from "@/containers/next"
import Header from "@/containers/next/header"
import { getData } from "@/libs/api"
import { Movie } from "@/types/movie"
import { getBaseURL } from "@/utils"
import { useSuspenseQuery } from "@tanstack/react-query"
import type { NextPage } from "next"
import { headers } from "next/headers"

const Home: NextPage = ({ searchParams }: any) => {
  const query = useSuspenseQuery({
    queryKey: ["wait"],
    queryFn: async () => {
      const path = "/api/3/discover/movie"
      const url = getBaseURL() + path

      console.log("fetching", url)
      const res = (await (
        await fetch(url, {
          cache: "no-store",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjcyY2U0MjY4MDk1MTI4OGE2OWZjZmE2YTA3NTkyOSIsInN1YiI6IjY1MGUxNmUwZTFmYWVkMDExZDVkNDhlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rgswMtK-5K4JnHk2h9ExgXCYGioC5e6d-_iqbKeGqAs",
          },
        })
      ).json()) as { results: Movie[] }
      return res
    },
  })

  return (
    <div>
      <Header />
      <ul>
        {query.data.results.map((item, i) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>
      {/* <Suspense>
        <Await
          sleep={4000}
          promise={getData<{ results: Movie[] }>("/discover/movie", {
            query: searchParams,
          })}
        >
          {movies => (
            <ul>
              {movies.results.map(item => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense> */}
    </div>
  )
}

export default Home
