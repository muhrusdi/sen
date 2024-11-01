"use client"
import clsx from "clsx"
import { Heart } from "lucide-react"
import { useOptimistic, useState } from "react"

type Props = {
  id?: string
  name?: string
  email?: string
}

const Item = ({ item }: { item: Props }) => {
  const [liked, setLiked] = useState(false)

  const handleLiked = () => {
    setLiked(prev => !prev)
  }

  return (
    <div className="rounded bg-gray-500 p-3 text-white">
      <span>{item.id}</span>
      <h4>{item.name}</h4>
      <p>{item.email}</p>
      <button type="button" title="liked">
        <Heart
          onClick={handleLiked}
          className={clsx({ "text-red-300": liked })}
        />
      </button>
    </div>
  )
}

export default Item
