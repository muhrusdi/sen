import { Await } from "@/components/await"
import { getRandomNumber } from "@/utils"

const DynamicIO = async () => {
  const number = getRandomNumber()
  return (
    <div>
      <h1>Dynamic IO</h1>
      <Await data={number}>{number => number}</Await>
    </div>
  )
}

export default DynamicIO
