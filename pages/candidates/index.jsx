import BackButton from "@/components/BackButton"
import SVG from "react-inlinesvg";
import { useRouter } from "next/router";

export default function Candidates() {
  const router = useRouter();
  return (
    <div>
      <header className="text-white bg-green-600 px-6 py-4">
        <BackButton title="2023 Election Candidates" />
      </header>
      <section className="mt-12 mb-6 px-4">
        <h4 className="text-green-neutral-700">Election Categories</h4>
      </section>
      <ul className="px-4">
        <li onClick={() => router.push("/candidates/presidential")} className="rounded-lg border border-green-300 bg-green-50">
          <div className="flex w-full items-center justify-between space-x-6 px-6 pt-10 pb-2">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-lg text-green-neutral-800 font-medium">Presidential Candidate</h3>
              </div>
              <p className="mt-1 truncate text-md">Candidates and their running mate</p>
            </div>
            <div className="bg-green-100 w-10 h-10 flex justify-center items-center rounded-full">
              <SVG src="/caret.svg"/>
            </div>
          </div>
          <div className="pl-6 pb-3">
            <span className="text-blue-500">34 Aspirants</span>
          </div>
        </li>
      </ul>
    </div>
  )
}