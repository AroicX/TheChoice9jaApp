import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Tab } from '@headlessui/react'
import Poll from './Poll'
import About from './About'

import { useSelector, useDispatch } from 'react-redux'

import { classNames } from '../helpers';
import { getPostsByDiscussion } from 'actions'
import Post from './Post';

export default function Tabs() {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state.postByDiscussion);
  let [categories] = useState(['Discussions', 'About']);
  const {query} = useRouter();

  useEffect(() => {
    dispatch(getPostsByDiscussion(+query.slug));
  }, [dispatch]);

  return (
    <div className="w-full max-w-md px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 border-b border-green-primaryColor-500">
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
            {loading && <p className='text-center'>Loading..</p>}
            {posts && posts.posts.length > 0 ? (
              <>
                {posts.posts.map((post) => <Post key={post.id} post={post}/>)}
              </>
            ) : (
              <p>No posts</p>
            )}
          </Tab.Panel>
          <Tab.Panel>
            <About />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
