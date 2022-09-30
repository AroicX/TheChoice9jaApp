import BackButton from "@/components/BackButton"
import Candidates from "@/components/Candidates"
import SearchBar from "@/components/SearchBar"

export default function PresidentialCanditate() {
  return (
    <>
    <header className="border-b border-b-coolblack-300 px-6 py-4">
      <BackButton title="Presidential Candidates"/>
    </header>
    <div>
      <SearchBar />
    </div>
    <div className="px-4">
      <div className="mb-10 flex items-center justify-between">
        <h3 className="text-green-neutral-500">36 Candidates</h3>
        <div className="relative inline-block">
          <div className="bg-gray-100 flex items-center px-5 py-2 rounded-md">
            <button
              type="button"
              class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Show first:
            </button>
            <select className="py-1 border-0 bg-transparent focus:border-0 outline-none">
              <option className="text-gray-500 px-4 py-2 text-sm">Party</option>
            </select>
          </div>
        </div>
      </div>

      <ul>
        <Candidates />
      </ul>
    </div>
    </>
  )
}