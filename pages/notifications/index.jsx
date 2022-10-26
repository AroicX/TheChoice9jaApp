import Avatar from "@/components/Avatar";
import Button from "@/reusable/Button";
import { 
  HandThumbUpIcon,
  EllipsisVerticalIcon,
  BellSlashIcon,
  TrashIcon,
 } from "@heroicons/react/24/outline";
 import Layout from "@/components/layout";
import Modal from "@/reusable/Modal";
import { useState } from "react";


export default function Notifications() {
  const [modal, setModal] = useState(false);


  return (
    <div className="my-3">
      <header className="mb-3 flex items-center px-3 py-2 border-b pb-3">
        <Avatar 
          style="w-9 h-9"
          imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <div className="w-full text-center">
          <h2 className="text-greenPrimary font-14 font-inter--sm">Choice9ja</h2>
        </div>
      </header>
      <h3 className="uppercase mb-2 px-2 text-black-light font-10 font-inter--md">recents</h3>

      <Layout>
        <ul>
          <li className="bg-greenPrimary-50 flex space-x-3 p-2">
            <div className="relative">
              <Avatar 
                alt=""
                style="w-12 h-12"
                imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <span className="absolute top-0 left-8 flex justify-center items-center bg-greenPrimary rounded-full w-6 h-6">
                <HandThumbUpIcon className="w-4 h-4 text-white" fill="white" />
              </span>
            </div>
            <div className="space-y-4 flex-1">
              <p className="font-12 font-inter--md">Ahmed Baba Bashir <span className="text-black font-inter--bold">likes your post</span>: your in Insecurity in Nigeria forum</p>
              <Button text="View Post" styles="text-greenPrimary border-2 border-greenPrimary w-48 rounded-full font-12 font-inter--md"/>
            </div>
            <div className="text-darkColor-300">
              <EllipsisVerticalIcon onClick={() => setModal(true)} className="h-5 w-5 mb-3"/>
              <span className="text-coolblack-400 font-12">3d</span>
            </div>
          </li>
        </ul>
      </Layout>

      <Modal 
        title="Notifications"
        toggle={modal}
        dispatch={() => setModal(false)}
      >
        <div className="divide-y">
          <div className="flex items-center py-2 px-3 space-x-2">
            <TrashIcon className="w-5 h-5 text-green-neutral-500" />
            <span className="text-coolblack-primary font-normal">Delete Notification</span>
          </div>
          <div className="flex items-center py-2 px-3 space-x-2">
            <BellSlashIcon className="w-5 h-5 text-green-neutral-500" />
            <span className="text-coolblack-primary font-normal">Turn Off Notification</span>
          </div>
        </div>
      </Modal>
    </div>
  )
}