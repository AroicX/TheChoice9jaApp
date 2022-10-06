import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Poll from './Poll'
import About from './About'

import { classNames } from '../helpers'

export default function Tabs() {
  let [categories] = useState(['Discussions', 'About'])

  return (
    <div className="w-full max-w-md px-2 sm:px-0">
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
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <Poll />
          </Tab.Panel>
          <Tab.Panel>
            <About />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
