import dynamic from 'next/dynamic';

const BackButton = dynamic(() => import('@/components/BackButton'));
const AvatarName = dynamic(() => import('@/components/NameAvatar'));
const SinglePost = dynamic(() => import('@/components/discourse/singlePost'));

import { useEffect, useState } from 'react';
import { GET_PROFILE_BY_ID } from '@/services/profile';
import { useRouter } from 'next/router';

import { Tab } from '@headlessui/react';
import { classNames } from '@/helpers/index';

export default function Profile() {
  const [categories] = useState(['Posts', 'Discussions']);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id) {
      getProfileById(id);
    }
  }, []);

  const getProfileById = (userId) => {
    setLoading(true);

    const callback = (response) => {
      const { data } = response;

      setUser(data);

      setLoading(false);
    };

    const onError = (error) => {
      console.log(error);
    };

    GET_PROFILE_BY_ID(userId, callback, onError);
  };

  return (
    <>
      <header className='border-b-2'>
        <div className='w-full border-b text-green-neutral-primary p-2 flex items-center text-body-semibold'>
          <BackButton title={`${user?.firstName ?? ''}'s Profile`} />
        </div>
      </header>
      <section className='flex items-center border-b space-x-4 py-4 px-4'>
        {Object.keys(user).length === 0 ? (
          <>
            <AvatarName name='LD' style='w-14 h-14' />
          </>
        ) : (
          <>
            <AvatarName
              user={{ firstName: user.firstName, lastName: user.lastName }}
              style='w-14 h-14'
            />
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
            <Tab.Panel>
              {Object.keys(user).length !== 0 &&
                user.posts.map(
                  ({ id, comments, likes, dislikes, message } = post, key) => (
                    <div key={key + 1} className='relative'>
                      <SinglePost
                        key={key + 1}
                        user={user}
                        post={{ comments, likes, dislikes, likes, message, id }}
                      />
                    </div>
                  )
                )}
            </Tab.Panel>
            <Tab.Panel>Discussions</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </>
  );
}
