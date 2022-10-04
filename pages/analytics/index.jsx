import Avatar from "@/components/Avatar"
import BackButton from "@/components/BackButton"

export default function Analytic() {
  return (
    <>
      <header className="px-4 py-3">
        <BackButton title="Poll Analytics" />
      </header>
      <main className="px-4 mt-24 space-y-6">
        <div>
          <h4 className="text-coolblack-400">Total Votes</h4>
          <h3 className="text-coolblack-600 font-bold text-lg">50,000</h3>
        </div>

        <section className="results">
          <p className="text-coolblack-300">Results</p>

          <div className="relative mt-4 w-full rounded-lg h-16 mb-4 bg-green-neutral-100">
            <div className="h-full rounded-tl-lg rounded-bl-lg bg-green-neutral-300" style={{width: "10%"}}>
            </div>
            <div className="absolute flex items-center w-full justify-between top-2 left-3">
              <div className="flex space-x-3">
                <Avatar />
                <div className="">
                  <h3 className="font-bold">Nuhu Ribadu</h3>
                  <p>10,500</p>
                </div>
              </div>
              <h2 className="mr-8 font-bold text-lg">
                10%
              </h2>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}