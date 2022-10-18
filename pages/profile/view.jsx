import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { useRouter } from 'next/router';

import BackButton from "@/components/BackButton";
import AvatarName from "@/components/NameAvatar";
import Button from "@/reusable/Button";

import { classNames } from '@/helpers/index';

export default function ViewProfile() {
  let [categories] = useState(['Polls', 'Discussions']);
  const Router = useRouter();

  return (
    <>
      <header className="border-b p-2">
        <BackButton title="Ahmed's Profile" />
      </header>
      <section className="flex items-center space-x-4 p-2">
        <AvatarName name="AB" style="w-14 h-14" />
        <span>
          <span className="block text text-body-semibold text-coolblack-primary">Ahmed Bbash</span>
          <span className="inline-block text-caption-2-regular px-2 py-1 rounded-full bg-green-neutral-200 text-green-neutral-700">Star Citizen</span>
        </span>
      </section>

      <section className="p-2 space-y-4">
        <h3 className="text-coolblack-500">A Student of Life</h3>
        <div className="space-y-2">
          <Button
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
              Poll
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