import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Poll from '../Poll';
import About from '../About';

import { classNames } from '../../helpers';
import SinglePost from './singlePost';

export default function DiscourssionTabs({ discussions }) {
  let [categories] = useState(['Discussions', 'About']);

  return (
    <div className='w-full sm:px-0 py-2'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 border-b border-green-primaryColor-500'>
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-md font-medium leading-5 text-green-neutral-600',
                  'ring-white focus:outline-none focus:ring-0',
                  selected
                    ? 'border-b-2 border-greenPrimary'
                    : 'text-green-nuetral-800 hover:text-green-neutral-500'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <Tab.Panel>
            {discussions &&
              discussions.map(
                (
                  {
                    id,
                    user,
                    discussions,
                    message,
                    comments,
                    likes,
                    dislikes,
                  } = post,
                  key
                ) => (
                  <div key={key + 1} className='relative'>
                    <SinglePost
                      key={key + 1}
                      user={user}
                      discussion={discussions}
                      post={{ comments, likes, dislikes, message, id }}
                      // dispatch={(val) => _updateState(val)}
                    />
                  </div>
                )
              )}
          </Tab.Panel>
          <Tab.Panel>
            <About />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
