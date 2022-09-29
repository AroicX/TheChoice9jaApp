import Link from 'next/link';
import SVG from 'react-inlinesvg';

export default function Footer() {
  return (
    <footer className=" bg-white w-full py-2 flex justify-between fixed bottom-0 border-t border-t-coolblack-200">
      <Link href="/home">
        <div className="text-green-neutral-500 flex flex-col justify-center items-center">
        <SVG className="w-9" src="/home.svg"/>
        <h4>Discourse</h4>
        </div>
      </Link>
      <Link href="/discussion">
        <div className="text-green-neutral-500 flex flex-col justify-center items-center">
          <SVG className="w-9" src="/comment.svg" />
          <h4>Discourse</h4>
        </div>
      </Link>
      <Link href="/voting">
      <div className="text-green-neutral-500 flex flex-col justify-center items-center">
        <SVG className="w-9" src="/vote.svg"/>
        <h4>Voting</h4>
      </div>
      </Link>
      <Link href="/results">
      <div className="text-green-neutral-500 flex flex-col justify-center items-center">
        <SVG className="w-9" src="/results.svg"/>
        <h4>Results</h4>
      </div>
      </Link>
      <Link href="/notifications">
      <div className="text-green-neutral-500 flex flex-col justify-center items-center">
        <SVG className="w-9" src="/notifications.svg" />
        <h4>Notifications</h4>
      </div>
      </Link>
    </footer>
  )
}