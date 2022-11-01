import { PlusIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"

export default function CreatePost() {
  const { push } = useRouter();

  return (
      <button
      className="m_create--post"
        type="button"
        onClick={() => push("/create")}
      >
        <PlusIcon className="h-8 w-8" aria-hidden="true" />
      </button>
  )
}