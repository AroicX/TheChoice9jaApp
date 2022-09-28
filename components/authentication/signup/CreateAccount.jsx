import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Input from "@/reusable/Input";

export default function CreateAccount({ next }) {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center space-x-4 xl:mt-0 mt-4">
        <img onClick={() => router.push("/")} className="w-4 h-4 cursor-pointer" alt="Close icon" src="/close.svg"/>
        <span className="text-xl font-semibold">
          <span>Step</span>
          <span>1 of 5</span>
        </span>
      </div>
      <form className="space-y-8">
        <h3 className="mt-8 font-bold text-2xl">Create a Password</h3>
        <Input 
          id="name"
          label="First Name"
          placeholder="Enter Firstname"
          value={data.firstname}
          dispatch={(value) => setData({...data, firstname: value})}
          required
        /> 

        <Input 
          id="name"
          label="Last Name"
          placeholder="Enter Surname"
          value={data.lastname}
          dispatch={(value) => setData({...data, lastname: value})}
          required
        /> 

        <Input 
          id="email"
          label="Email"
          type="email"
          placeholder="Enter Email Address"
          value={data.email}
          dispatch={(value) => setData({...data, email: value})}
          required
        /> 
      </form>
      <div className="flex justify-end mt-2">
          <p className="text-green-600 font-semibold">Use Phone Number Instead</p>
        </div>
      <div className="flex items-end h-full">
        <Link
          passHref
          href="/signup/confirm"
        >
        <a className="inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 bg-green-600 text-base font-medium text-white shadow-sm">
          continue
        </a>
        </Link>
      </div>
    </div>
  )
}