import { SearchParamsType } from "@/lib/types"

type Props = {
  searchParams: SearchParamsType<{ sort_by: string; page: string }>
}

const Home = async ({ searchParams }: Props) => {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  )
}

export default Home
