import SVG from "react-inlinesvg";
import { useRouter } from "next/router";

export default function Candidates() {
  const router = useRouter();
  return (
    <li onClick={() => router.push("/candidates/presidential/salisu")} className="rounded-xl border border-coolblack-300 bg-white">
      <div className="flex w-full items-center justify-between space-x-6 px-6 py-6 pb-2">
        <div className="bg-green-100 w-10 h-10 flex justify-center items-center rounded-full">
          <SVG src="/parties.svg"/>
        </div>
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-lg text-green-neutral-800 font-medium">imumolen irene christopher</h3>
          </div>
          <p className="mt-1 space-x-2 text-coolblack-500 text-lg truncate text-md">
            <span>A</span>
            <span className="text-2xl">.</span>
            <span>Presidential</span>
          </p>
        </div>
        <SVG src="/caret.svg"/>
      </div>
    </li>
  )
}