import Avatar from "@/components/Avatar";
import Layout from "@/components/layout";
import Discourse from "@/components/Discourse";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";


const DISCOURSE_FORUMS = [
  {
    id: 0,
    discourse: "Insecurity in Nigeria",
    color: 'bg-red-400',
    slug: 'insecurity'
  },
  {
    id: 1,
    discourse: "Restructuring Nigeria",
    color: 'bg-green-500',
    slug: 'restructuring'
  },
  {
    id: 2,
    discourse: "State Policing",
    color: 'bg-yellow-700',
    slug: 'policing'
  },
  {
    id: 3,
    discourse: "Education in Nigeria",
    color: 'bg-blue-500',
    slug: 'education'
  },
  {
    id: 4,
    discourse: "States Infrastructure",
    color: 'bg-green-neutral-500',
    slug: 'infrastructure'
  }
]

export default function Discussion() {
  const router = useRouter();

  return (
    <>
    <header className="flex items-center px-2 space-x-10 py-2 border-b border-coolblack-200 pb-2">
      <Avatar 
        alt="Bash picture" 
        imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <h3 className="text-green-500 font-bold text-lg">Choice9ja</h3>
    </header>
    <Layout>
      <main className="mt-6 border-b-4 pb-6">
        <h4 className="text-coolblack-900 font-bold text-2xl mb-3">Discourse Forums</h4>
        <ul className="divide-y space-y-3 divide-green-neutral-200">
          {DISCOURSE_FORUMS.map(({color, id, discourse, slug}) => (
            <li onClick={() => router.push(`discourse/${slug}`)} key={id} className="flex items-center pt-3 justify-between">
              <div className="flex items-center space-x-3">
                <div className={`rounded-md ${color} h-8 w-8`} />
                <span className="text-coolblack-900 font-bold text-lg">{discourse}</span>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-green-neutral-500" />
            </li>
          ))}
        </ul>
      </main>
      <Discourse poll="restructuring nigeria"/>
    </Layout>
    </>
  )
}