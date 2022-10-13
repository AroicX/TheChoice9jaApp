import Avatar from "./Avatar"
import Verified from "./Verified";
import { RadioGroup } from '@headlessui/react';
import { useState } from "react";
import { useRouter } from "next/router";
import { classNames } from "../helpers";
import { numberFormatter } from "../helpers";
import Button from "@/reusable/Button";
import { ICONS } from "@/reusable/Icons";
import Comments from "./Comments";
import Modal from "@/reusable/Modal";

import { 
  EllipsisHorizontalIcon,
  ChartBarSquareIcon,
  FlagIcon ,
  TrashIcon
} from "@heroicons/react/24/outline";

import { comments } from "data/comments";



const people = [
  {
    id: 0,
    name: 'Nuhu Ribado',
    imageUrl:
      '/nuhu.png',
  },
  {
    id: 1,
    name: 'Rotimi Ameachi',
    imageUrl:
      '/rotimi.png',
  },
];

const Candidates = ({person}) => {
  return (
    <RadioGroup.Option
        value={person}
        className={({active}) => 
        classNames(active ? 'ring-2 ring-green-500' : '',
        'group relative border rounded-md focus:outline-none '
        )
      }
      >
        {({active, checked}) => (
          <>
            <div className="flex w-full items-center justify-between space-x-6">
              <img className="w-full rounded-t-md" src={person.imageUrl} alt="" />
            </div>
            <div className="-mt-px p-4 font-bold flex items-center space-x-4 bg-coolblack-50">
              <input readOnly checked={checked} type="radio" name="candidate" className="h-5 w-5 checked:bg-green-500 border border-3 border-green-neutral-300 focus:ring-green-neutral-500"/>
              <p className="text-green-neutral-900">{person.name}</p>
              </div>
          </>
        )}
    </RadioGroup.Option>
  )
}

export default function Discourse({poll}) {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const [comment, setComment] = useState("");

  return (
    <>
      <section className="flex space-x-4 mt-6 px-4">
        <div className="">
          <Avatar 
            alt="" 
            style="border border-green-500 w-9 h-9"
            imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
        </div>
        <div className="flex-1">
          <header className="flex justify-between">
            <div className="flex space-x-2">
              <h3>Choice9ja</h3>
              <Verified />
            </div>
            <EllipsisHorizontalIcon onClick={() => setModal(true)} className="h-7 w-7"/>
          </header>
          <div className="mt-2 space-y-2">
            <header onClick={() => router.push("/poll")}>
              <h3 className="uppercase flex items-center space-x-2 text-green-neutral-500">
                <span>poll</span>
                <span className="text-2xl -mt-2">.</span>
                <span>{poll}</span>
              </h3>
              <p className="text-coolblack-900 font-bold text-lg">From this options, who do you think is the 
                the best fit for Minister of Petroleum?
              </p>
            </header>
            <div className="candidates">    
              <RadioGroup value={selectedCandidate} onChange={setSelectedCandidate}>
                <ul className="grid grid-cols-2 gap-6">
                  {people.map((person) => (
                    <Candidates key={person.id} person={person}/>
                  ))}
                </ul>
              </RadioGroup>
              {selectedCandidate && <Button type="button" text="Vote now" styles="my-4 bg-green-500 rounded-full text-white text-lg py-1"/>}
            </div>
            <div className="text-green-neutral-600 flex space-x-3 items-center">
              <span>42,000 Votes</span>
              <span className="font-bold text-lg">.</span>
              <span>8 days left</span>
            </div>
            <footer className="flex items-center space-x-4">
              {
              ICONS.map((item) => (
                <div key={item.name} className="flex items-center space-x-3 text-coolblack-200">
                  <item.icon className="w-8" aria-hidden="true" />
                  <span className="text-lg">{item.count !== 0 && numberFormatter(item.count)}</span>
                </div>
              ))}
            </footer>
          </div>
        </div>
      </section>
      <Comments comments={comments}/>
      <div className="flex items-center px-3 mt-3 h-fit space-x-4">
        <Avatar 
          alt="" 
          style="border border-green-500 w-9 h-9"
          imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
        <div className="min-w-0 flex-1">
          <form action="#">
            <div className="focus-within:border-indigo-600">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={1}
                name="comment"
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="block w-full resize-none border rounded-full px-2 py-1 border-green-200 p-0 pb-2 focus:border-green-600 focus:ring-0 sm:text-sm"
                placeholder="Add your comment..."
              />
            </div>
          </form>
        </div>
      </div>
      <Modal 
        title="Poll"
        toggle={modal}
        dispatch={() => setModal(false)}
      >
        <div className="divide-y">
          <div onClick={() => router.push("/analytics")} className="flex items-center py-2 px-3 space-x-2">
            <ChartBarSquareIcon className="w-5 h-5 text-green-neutral-500" />
            <span className="text-coolblack-primary font-normal">Edit Discourse Post</span>
          </div>
          <div className="flex items-center py-2 px-3 space-x-2">
            <TrashIcon className="w-5 h-5 text-green-neutral-500" />
            <span className="text-coolblack-primary font-normal">Delete Post</span>
          </div>
          <div onClick={() => router.push("/reports")} className="flex items-center py-2 px-3 space-x-2">
            <FlagIcon className="w-5 h-5 text-green-neutral-500" />
            <span className="text-red-400 font-normal">Result</span>
          </div>
        </div>
      </Modal>
    </>
  )
}