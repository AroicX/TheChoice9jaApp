import dynamic from 'next/dynamic';

const SinglePost = dynamic(() => import('@/components/discourse/singlePost'));
const BackButton = dynamic(() => import('@/components/BackButton'));
const AvatarName = dynamic(() => import('@/components/NameAvatar'));
const Button = dynamic(() => import('@/reusable/Button'));

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Tab } from '@headlessui/react';
import { classNames } from '@/helpers/index';
import { useSelector } from 'react-redux';

import { GET_POST_BY_USER } from '@/services/posts';
import { GET_ROOMS_BY_USER } from '@/services/room';

export default function ViewProfile() {
  let [categories] = useState(['Posts', 'Discussions']);
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const Router = useRouter();
  const { user } = useSelector((state) => state.userDetails);

  const getPostByUser = async () => {
    const callback = (response) => {
      const { data } = response;

      setPosts(data);
    };

    const onError = (error) => {
      console.log(error);
    };

    await GET_POST_BY_USER(user.id, callback, onError);
  };

  const getDiscussionsByUser = async () => {
    const callback = (response) => {
      const { room } = response;

      setDiscussions(response);
    };

    const onError = (error) => {
      console.log(error);
    };

    await GET_ROOMS_BY_USER(callback, onError);
  };

  useEffect(() => {
    getPostByUser();
    getDiscussionsByUser();
  }, []);

  return (
    <>
      <header className='border-b p-2'>
        <BackButton title={`${user.firstName}'s Profile`} />
      </header>

      <section className='flex items-center space-x-4 py-2 px-4'>
        {Object.keys(user).length === 0 ? (
          <>
            <AvatarName name='LD' style='w-14 h-14' />
          </>
        ) : (
          <>
            <AvatarName user={user} style='w-14 h-14' />
          </>
        )}
        <span>
          <span className='block font-18 font-inter--sm text-black-primary'>
            {Object.keys(user).length === 0 ? (
              <>Loading</>
            ) : (
              `${user.firstName} ${user.lastName}`
            )}
          </span>
          <span className='inline-block font-11 px-2 py-1 rounded-full bg-green-neutral-200 text-green-neutral-700'>
            Star Citizen
          </span>
        </span>
      </section>

      <section className='py-2 px-4 space-y-4'>
        <h3 className='text-black-medium font-14'>A Student of Life</h3>
        <div className='space-y-2'>
          <Button
            click={() => Router.push('/profile/edit')}
            text='Edit Profile'
            styles='border border-greenPrimary rounded-full font-14 font-inter--sm text-greenPrimary'
          />
          {/* <Button
            click={() => Router.push('/verification')}
            text='Get Verified'
            styles='border border-green-500 rounded-full font-14 font-inter--sm bg-green-500 text-white'
          /> */}
        </div>
      </section>

      <section className='w-full max-w-md sm:px-0 mt-8'>
        <Tab.Group>
          <Tab.List className='flex border-b border-green-neutral-500'>
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-md font-medium leading-5 text-primaryColor-600',
                    'ring-white focus:outline-none focus:ring-0',
                    selected
                      ? 'border-b text-darkColor-800 border-primaryColor-500'
                      : 'text-green-nuetral-800 hover:text-green-neutral-500'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className='border-b'>
              {posts &&
                posts.map((post, idx) => (
                  <SinglePost key={idx + 1} user={user} post={post} />
                ))}
            </Tab.Panel>
            <Tab.Panel>
              {discussions && discussions.length > 0 ? (
                discussions.map((idx) => <p key={idx + 1}>Discussions</p>)
              ) : (
                <p>No Discussions</p>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </>
  );
}
