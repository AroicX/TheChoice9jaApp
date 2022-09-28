import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Select from "@/reusable/Select";
import Input from "@/reusable/Input";

export default function Verification() {
  const [verificationType, setVerificationType] = useState("");

  const router = useRouter();
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center space-x-4 xl:mt-0 mt-4">
        <img onClick={() => router.push("/signup/create_password")} className="w-4 h-4 cursor-pointer" alt="Close icon" src="/arrow_back.svg"/>
        <span className="text-xl font-semibold">
          <span>Step </span>
          <span>5 of 5</span>
        </span>
      </div>
      <form className="space-y-8">
        <h3 className="mt-8 font-bold text-2xl">
          One last step,
          Verify that you’re a Nigerian
        </h3>
        <p className="text-slate-500">
          To verify that you’re a nigerian, we will need 
          any of this approved government ID document
          number.
        </p>
        {/* <Select 
          dispatch={true}
          initialValue="Select Type of Document"
          label="Select Type of Document"
          options={['NIN or NIMC Card PIN', 'Bank Verification Number (BVN)', "'Voter's Card Number", 'International Password Number']}
        /> */}
        <Select
          label={'Select Type of Document'}
          placeholder={'Selected Country'}
          initialValue={'Select Type of Document'}
          options={[{ name: 'NIN or NIMC Card PIN' }, { name: 'Bank Verification Number (BVN)' }, {name: "'Voter's Card Number"}, {name: 'International Password Number'}]}
          dispatch={(data) => setVerificationType(data)}
        />
        <Input 
          id="document-number"
          label="Document Number"
          placeholder="Enter Document Number"
        />
      </form>
      <div className="flex items-end h-full mb-8">
        <div className="w-full">
          <Link
            href="/signup/create_password"
          >
            <a className="inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 bg-green-600 text-base font-medium text-white shadow-sm">Next</a>
          </Link>
          <button onClick={() => router.push('/home')} className="text-center w-full text-lg text-green-600 font-bold">Skip for now</button>
        </div>
      </div>
    </div>
  )
}