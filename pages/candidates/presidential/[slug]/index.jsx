import BackButton from "@/components/BackButton"
import SVG from "react-inlinesvg";
import Accordion from "@/components/Accordion";

const CANDIDACY_INFORMATION = [
  {
    question: 'Candidacy Information',
    answers: [
      {name: "Position", value: "Presidential"}, 
      {name: "Constituency", value: "Nigeria"},
      {name: "Age", value: 41},
      {name: "Party", value: "Labour Party"},
      {name: "Education", value: "Bachelor of Engineering"},
      {name: "Profession", value: "Bank Manager"},
    ]
  }
];

const CONTACT_INFORMATION = [
  {
    question: 'Contact Information',
    answers: [
      {name: "Phone Number", value: "08034000001"}, 
      {name: "Email", value: "okalu@orjikalu.com"},
      {name: "Address", value: 'Onu Ibina Square'},
    ]
  }
];

export default function Candidate() {
  return (
    <>
      <header className="px-6 py-4 text-coolblack-800">
        <BackButton title="Salisu - Presidential "/>
      </header>
      <section className="bg-gray-100 py-2 px-4 mt-8 h-full">
        <div className="flex mb-10 space-x-6">
          <span className="relative inline-block">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" />
          </span>
          <div>
            <h3 className="text-lg text-coolblack-700 font-bold">Salisu Shuaibu</h3>
            <span className="flex items-center space-x-3">
              <span className="rounded-full inline-block bg-coolblack-500">
                <SVG className="text-white w-9" src="/settings.svg"/>
              </span>
              <span className="text-lg text-coolblack-600">Accord</span>
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <Accordion faqs={CANDIDACY_INFORMATION}/>
          <Accordion faqs={CONTACT_INFORMATION}/>
        </div>
      </section>
    </>
  )
}