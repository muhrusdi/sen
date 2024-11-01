import { Await } from "@/components/await"
import Form from "./form"
import { getUsers } from "@/drizzle/db"
import Item from "./components/item"

const ReactHookForm = () => {
  const PAGE_SIZE = 12
  const userPromise = getUsers({ limit: PAGE_SIZE })

  return (
    <div>
      <h1>Server Action Form</h1>
      <div className="flex space-x-2">
        <div className="w-1/2">
          <div className="rounded-lg bg-gray-100 p-4">
            <ul className="space-y-2">
              <Await sleep={4000} data={userPromise}>
                {data =>
                  data.map(item => (
                    <li key={item.id}>
                      <Item item={item as any} />
                    </li>
                  ))
                }
              </Await>
            </ul>
          </div>
        </div>
        <div className="w-1/2">
          <div className="rounded-lg bg-gray-100 p-4">
            <h2>Create user</h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactHookForm
