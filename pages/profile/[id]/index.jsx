import Layout from '@/components/layout';
import {
  ChevronRightIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircleIcon,
  ShieldExclamationIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { GET_PROFILE_BY_ID } from '@/services/profile';
import { useRouter } from 'next/router';
import BackButton from '@/components/BackButton';
import AvatarName from '@/components/NameAvatar';
import Verified from '@/components/Verified';
import SinglePost from '@/components/discourse/singlePost';

const LISTS = [
  { id: 0, title: 'Security', icon: ShieldExclamationIcon },
  { id: 1, title: 'About App', icon: QuestionMarkCircleIcon },
  { id: 2, title: 'Terms & Conditions', icon: NewspaperIcon },
  { id: 3, title: 'Report a problem', icon: ExclamationTriangleIcon },
];

export default function Profile() {
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
          <BackButton />
          <div className='flex-1 text-center'>
            <h3 className='text-greenPrimary font-14 font-inter--sm'>
              Choice9ja
            </h3>
          </div>
        </div>

        <div className='py-6 px-2 flex space-x-10'>
          {Object.keys(user).length !== 0 ? (
            <AvatarName user={user} />
          ) : (
            <span className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-bluePrimary ring-2 ring-offset-2 ring-blueSecondary'>
              <span className='text-lg font-medium leading-none text-white'>
                DD
              </span>
            </span>
          )}
          <span>
            {Object.keys(user).length !== 0 ? (
              <>
                <span className='block text-dark font-18 font-inter--sm'>{`${user.firstName} ${user.lastName}`}</span>
                <span className='text-dark font-18 font-inter--sm flex items-center space-x-2'>
                  {user.verifiedPhoneNo && <Verified />}
                  <span>{user.username}</span>
                </span>
              </>
            ) : (
              'Loading'
            )}
          </span>
        </div>
      </header>
      <Layout>
        <main className='pt-2'>
          {Object.keys(user).length !== 0 &&
            user.posts.map(
              ({ id, comments, likes, dislikes, message } = post, key) => (
                <div key={key + 1} className='relative'>
                  <SinglePost
                    key={key + 1}
                    user={user}
                    post={{ comments, likes, dislikes, likes, message, id }}
                  />
                  {key !== user.posts.length - 1 ? (
                    <span
                      className='absolute top-6 left-8 -ml-px h-full w-0.5 bg-gray-200'
                      aria-hidden='true'
                    />
                  ) : null}
                </div>
              )
            )}
        </main>
      </Layout>
    </>
  );
}
