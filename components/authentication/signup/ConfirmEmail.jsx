import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"
import Input from "@/reusable/Input";
import BackButton from "@/components/BackButton";

export default function ConfirmEmail() {
  const [code, setCode] = useState("");

  const router = useRouter();
  return (
    <div className="flex flex-col h-screen px-4">
      <div className="flex items-center space-x-4 xl:mt-0 mt-4">
        <BackButton title="Step 2 of 5"/>
      </div>
      <form className="space-y-8">
        <h3 className="mt-8 font-bold text-2xl">Confirm Your Email</h3>
        <p className="text-slate-500">
          Please enter the 6 digit code we sent to 
          thebbash@gmail.com
        </p>
        <Input 
          id="code"
          placeholder="Enter code sent to your email"
          value={code}
          dispatch={(value) => setCode(value)}
          required
        />
      </form>
      <div className="flex mt-2">
        <p className="text-green-600 font-bold">Resend code</p>
      </div>
      <div className="flex items-end h-full">
        <Link
          href="/signup/create_password"
        >
          <a className="inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 bg-green-600 text-base font-medium text-white shadow-sm">Next</a>
        </Link>
      </div>
    </div>
  )
}