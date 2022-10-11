import Layout from "@/components/layout"
import Avatar from "@/components/Avatar"
import SVG from "react-inlinesvg";
import { useRouter } from "next/router";

const candidates = [
  {
    id: 0,
    title: "Presidential Election",
    description: "Candidates and their running mates",
    status: "Ongoing Election",
    statusColor: 'bg-red-400 text-white font-normal',
    slug: 'presidential'
  },
  {
    id: 1,
    title: "Gubernatorial Election",
    description: "",
    status: "Upcoming Election",
    statusColor: "bg-yellow-400 text-yellow-900 font-normal",
    slug: 'gubernatorial'
  },
  {
    id: 2,
    title: "Senatorial Election",
    description: "",
    status: "Completed Election",
    statusColor: "bg-green-neutral-200 text-coolbalck-500 font-normal",
    slug: 'senatorial'
  }
];

export default function Voting() {
  const router = useRouter();
  return (
    <>
      <header className="mb-10 flex items-center space-x-10 px-3 py-2 border-b pb-3">
        <Avatar 
          style="w-9 h-9"
          imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <div className="w-full text-center">
          <h2 className="font-bold text-lg text-green-neutral-primary">Choice9ja</h2>
        </div>
      </header>
      <Layout>
        <header className="space-y-2 mb-10">
          <h3 className="font-bold text-coolblack-primary">Choice9ja Mock Election</h3>
          <div className="p-2 bg-green-600 text-white">
            <h3 className="font-semibold">Voting Ends in 6hr 30mins</h3>
            <p className="font-normal">Voting Ends at 23 Aug, 2030 - 12:00am</p>
          </div>
        </header>

        <main>
          <h2 className="uppercase text-coolblack-700 text-lg">select selection</h2>

          <ul className="mt-6 space-y-4">
            {candidates.map(({id, title, description, status, statusColor, slug}) => (
              <li key={id} onClick={() => router.push(`/voting/${slug}`)} className="relative rounded-md border cursor-pointer border-coolblack-300 bg-green-neutral-50">
                <div className="mb-10 flex w-full items-center justify-between space-x-6 px-6 py-6 pb-2">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-lg text-coolblack-800 font-semibold">{title}</h3>
                    </div>
                    <p className="space-x-2 text-coolblack-400 text-lg truncate text-md">
                      <span>{description}</span>
                    </p>
                  </div>
                  <div className="bg-coolblack-100 rounded-full px-3 py-2">
                    <SVG src="/caret.svg"/>
                  </div>
                </div>
                <div className={`bottom-0 rounded-tr-md rounded-bl-md absolute px-4 py-1 ${statusColor}`}>{status}</div>
              </li>
            ))}
          </ul>
        </main>
      </Layout>
    </>
  )
}