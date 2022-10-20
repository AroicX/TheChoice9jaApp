import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { useRouter } from 'next/router';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { classNames } from '@/helpers/index';
import { ICONS } from '@/reusable/Icons';
import { numberFormatter } from '@/helpers/index';

import BackButton from "@/components/BackButton";
import AvatarName from "@/components/NameAvatar";
import Button from "@/reusable/Button";
import Verified from '@/components/Verified';
import Avatar from '@/components/Avatar';
import { useSelector } from 'react-redux';

export default function ViewProfile() {
  let [categories] = useState(['Polls', 'Discussions']);
  const [modal, setModal] = useState(false);
  const Router = useRouter();

  const {user} = useSelector((state) => state.userDetails);

  return (
    <>
      <header className="border-b p-2">
        <BackButton title="Ahmed's Profile" />
      </header>
      <section className="flex items-center space-x-4 p-2">
        <AvatarName name={`${user.firstName.charAt(0).toUpperCase()}${user.lastName.charAt(0).toUpperCase()}`} style="w-14 h-14" />
        <span>
          <span className="block text text-body-semibold text-coolblack-primary">
            {`${user.firstName} ${user.lastName}`}
          </span>
          <span className="inline-block text-caption-2-regular px-2 py-1 rounded-full bg-green-neutral-200 text-green-neutral-700">Star Citizen</span>
        </span>
      </section>

      <section className="p-2 space-y-4">
        <h3 className="text-coolblack-500">A Student of Life</h3>
        <div className="space-y-2">
          <Button
            click={() => Router.push("/profile/edit")}
            text="Edit Profile"
            styles="border border-green-500 rounded-full text-body-semibold text-green-500"
          />
          <Button 
            click={() => Router.push("/verification")}
            text="Get Verified"
            styles="border border-green-500 rounded-full text-body-semibold bg-green-500 text-white"
          />
        </div>
      </section>

      <section className="w-full max-w-md px-2 sm:px-0 mt-8">
        <Tab.Group>
          <Tab.List className="flex space-x-1 border-b border-green-neutral-500">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-md font-medium leading-5 text-green-neutral-600',
                    'ring-white focus:outline-none focus:ring-0',
                    selected
                      ? 'border-b border-green-neutral-700'
                      : 'text-green-nuetral-800 hover:text-green-neutral-500'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <h4 className='text-coolblack-500 py-2'>60 Discussions & Polls</h4>
              <section className="flex space-x-4 mt-2">
                <div className="">
                  <Avatar 
                    alt="" 
                    style="border border-green-500 w-9 h-9"
                    imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                </div>
                <div className="flex-1">
                  <header className="flex justify-between">
                    <div className="flex space-x-2">
                      <h3 className="text-coolblack-primary text-heading-3-semibold">Shehu Sani</h3>
                      <Verified />
                    </div>
                    <EllipsisHorizontalIcon onClick={() => setModal(true)} className="h-7 w-7"/>
                  </header>
                  <div className="mt-2 space-y-2">
                    <header>
                      <h3 className="uppercase text-overline-regular flex items-center space-x-2 text-green-neutral-500">
                        <span >discourse</span>
                        <span className="text-2xl -mt-2">.</span>
                        <span>state policing</span>
                      </h3>
                      <p className="text-coolblack-900 text-lg my-2">
                        State policing is one of the most important features of the nigerian state in terms
                      </p>
                    </header>
                    <footer className="flex items-center space-x-4">
                      {
                      ICONS.map((item) => (
                        <div key={item.name} className="flex items-center space-x-3 text-coolblack-200 font-bold">
                          <item.icon className="w-6 h-6" aria-hidden="true" />
                          <span className="text-md">{item.count !== 0 && numberFormatter(item.count)}</span>
                        </div>
                      ))}
                    </footer>
                  </div>
                </div>
              </section>
            </Tab.Panel>
            <Tab.Panel>
              Discussion
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </>
  )
}