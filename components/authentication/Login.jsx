import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Input from "@/reusable/Input";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen">
      <h3 className="text-green-600 mt-8 font-bold text-2xl">Choice9ja</h3>
      <form className="space-y-8">
        <h3 className="mt-8 font-bold text-2xl">Login to your Account</h3>
        <Input 
          id="email"
          type="email"
          label="Email Address"
          placeholder="Enter Email Address"
          required
        />

        <div className="relative rounded-md border border-gray-300 p-3 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green">
          <label
            htmlFor="confirm-password"
            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type={`${passwordVisibility ? 'text' : 'password'}`}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Salisu"
          />
          <button type="button" onClick={() => setPasswordVisibility(!passwordVisibility)} className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            {passwordVisibility ? (
              <img className="h-8 w-8" src="/eye-off.svg" alt="Eye"/>
            ) : (
              <img className="h-8 w-8" src="/eye.svg" alt="Eye"/>
            )}
          </button>
        </div> 
      </form>
      <div className="flex mt-2">
          <Link href="/forget_password" passHref>
            <a className="text-green-600 font-semibold">Forget password</a>
          </Link>
      </div>
      <div className="flex mt-12 flex-col h-full">
        <Link
          passHref
          href="/signup/confirm"
        >
        <a className="inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 bg-green-600 text-base font-medium text-white shadow-sm">
          continue
        </a>
        </Link>
        <p className="text-center">
          Don&apos;t have an account? <Link passHref href="/signup">
            <a className="text-green-600">Sign Up</a>
          </Link>
        </p>
      </div>
    </div>
  )
}