import { useState } from "react";
import BackButton from "@/components/BackButton";
import Select from "@/reusable/Select";
import Input from "@/reusable/Input";
import Button from "@/reusable/Button";

const OPTIONS = [
  {id: 0, type: 'NIN', name: 'NIN or NIMC Card PIN'},
  {id: 1, type: 'BVN', name: 'Bank Verification Number (BVN)'},
  {id: 2, type: 'VCN', name: 'Voter"s Card Number'},
  {id: 3, type: 'IPN', name: 'International Passport Number'},
]

export default function Verification() {
  const [form, setForm] = useState({})
  return (
    <>
      <header className="border-b p-2">
        <BackButton title="Verification" />
      </header>

      <section className="space-y-6 px-2 pt-12">
        <div className="space-y-2">
          <h3 className="text-black font-inter--sm font-22">Verify that you are a Nigerian</h3>
          <p className="text-darkColor-500 font-14 font-inter--md">To verify that you are a nigerian, we will need any of this approved government ID document number</p>
        </div>

        <div>
          <Select
            options={OPTIONS}
            dispatch={(data) => console.log(data)}
            placeholder="Select Type Of Document"
          />
          <Input 
            placeholder="Enter Document Number"
          />

          <Button 
            text="Next"
            styles="bg-greenPrimary font-inter--sm mt-4 text-white rounded-md"
          />
        </div>
      </section>
    </>
  )
}