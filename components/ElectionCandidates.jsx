import SVG from "react-inlinesvg"
import { useRouter } from "next/router";

export default function ElectionCandidates({people}) {
  const router = useRouter();

  return (
    <>
    {people.map((person) => (
      <li onClick={() => router.push("/candidates")} key={person.name} className="rounded-xl bg-green-600 py-4 px-6 xl:px-10 xl:text-left shadow-lg">
        <SVG src="/users.svg" />
        <div className="space-y-2 mt-8">
          <h3 className="text-2xl text-white font-semibold">2023 Election Candidates</h3>
          <p className="text-green-100 font-14">
            Background, Criminality, Assets and
            Other Information about Nigerian 
            Politicians.
          </p>
        </div>
        <div className="flex justify-end mt-4 mb-2">
          <button>
            <SVG src="/arrow_outward.svg" />
          </button>
        </div>
      </li>
    ))}
    </>
  )
}
