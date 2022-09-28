import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CreateUserName() {
  const [username, setUsername] = useState("");

  const router = useRouter();
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center space-x-4 xl:mt-0 mt-4">
        <img onClick={() => router.push("/signup/create_password")} className="w-4 h-4 cursor-pointer" alt="Close icon" src="/arrow_back.svg"/>
        <span className="text-xl font-semibold">
          <span>Step </span>
          <span>4 of 5</span>
        </span>
      </div>
      <form className="space-y-8">
        <h3 className="mt-8 font-bold text-2xl">Create a Username</h3>
        <p className="text-slate-500">
          Create a unique  name you can easily 
          change later. 
        </p>
        <div className="relative rounded-md border border-gray-300 p-3 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green">
          <label
            htmlFor="username"
            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-sm font-medium text-gray-900"
          >
            Create @username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="@thebash"
          />
        </div>
      </form>
      <div className="flex items-end h-full mb-8">
        <div className="w-full">
          <Link
            href="/signup/verification"
          >
            <a className="inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 bg-green-600 text-base font-medium text-white shadow-sm">Next</a>
          </Link>
          <button onClick={() => router.push('/home')} className="text-center w-full text-lg text-green-600 font-bold">Skip for now</button>
        </div>
      </div>
    </div>
  )
}