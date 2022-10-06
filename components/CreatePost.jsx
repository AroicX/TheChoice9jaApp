import { PlusIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"

export default function CreatePost() {
  const { push } = useRouter();

  return (
      <button
        type="button"
        onClick={() => push("/create")}
        className="fixed left-[24rem] top-56 z-[999] inline-flex items-center rounded-full border border-transparent bg-green-800 p-4 text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        <PlusIcon className="h-8 w-8" aria-hidden="true" />
      </button>
  )
}