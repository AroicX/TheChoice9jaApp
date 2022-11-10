import Link from 'next/link';
import Layout from '@/components/layout';
import {
  ChevronRightIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircleIcon,
  ShieldExclamationIcon,
  NewspaperIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { getUserDetails } from 'actions/users';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AvatarName from '@/components/NameAvatar';

const LISTS = [
  { id: 0, title: 'Security', icon: ShieldExclamationIcon },
  { id: 1, title: 'About App', icon: QuestionMarkCircleIcon },
  { id: 2, title: 'Terms & Conditions', icon: NewspaperIcon },
  { id: 3, title: 'Report a problem', icon: ExclamationTriangleIcon },
];

export default function Profile() {
  const Router = useRouter();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.userDetails);

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  const logOut = () => {
    localStorage.removeItem('user-data');
    Router.push('/login');
  };

  return (
    <>
      <header className='border-b-2'>
        <div className='py-6 px-2 flex space-x-10'>
          <AvatarName
            user={user}
            style='h-10 w-10 ring ring-blue-200 ring-offset-2'
          />
          <span>
            <span className='block text-dark font-18 font-inter--sm'>
              {Object.keys(user).length === 0 || user === null ? (
                <>
                  <span>Loading</span>
                </>
              ) : (
                `${user.firstName} ${user.lastName}`
              )}
            </span>
            <Link
              className='text-primaryColor-700 font-12 font-inter--regular'
              href='/profile/view'
              passHref
            >
              View your profile
            </Link>
          </span>
        </div>
      </header>
      <Layout style='px-0'>
        <main className='py-10'>
          <ul className='divide-y space-y-3 font-14 font-inter--regular divide-green-neutral-200'>
            {LISTS.map((list) => (
              <li
                key={list.id}
                className='flex items-center p-4 justify-between'
              >
                <div className='flex items-center space-x-3 text-darkColor-500'>
                  <list.icon className='text-green-neutral-500 h-5 w-5' />
                  <span className='text-green-neutral-dark'>{list.title}</span>
                </div>
                <ChevronRightIcon className='w-6 h-6 text-darkColor-600' />
              </li>
            ))}
          </ul>

          <button
            type='button'
            onClick={logOut}
            className='flex items-center space-x-6 mt-10 text-secondaryColor-500 font-14 p-4'
          >
            <ArrowRightOnRectangleIcon className='w-6 h-6' />
            <span className='text-body-2-regular'>Log Out</span>
          </button>
        </main>
      </Layout>
    </>
  );
}
