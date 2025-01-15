"use client"

import { useQuery } from "@/lib/api/query.client"

const ClientPage = () => {
  const data = useQuery("/discover/movie")

  return <div>test</div>
}

export default ClientPage
