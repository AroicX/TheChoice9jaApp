import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import services from '@/services/index';
import Avatar from '@/components/Avatar';
import Layout from '@/components/layout';
import AuthProvider from '@/components/AuthProvider';

import { useState, useEffect } from 'react';

import { GET_POLLS } from '@/services/polls';
import Poll from '@/components/Poll';
import { randomColor } from '@/helpers/index';

export default function Discussion({ discussions }) {
  const router = useRouter();
  const [polls, setPolls] = useState([]);

  const [bgColor, setBgColor] = useState(randomColor() || '#000');

  const getPolls = async () => {
    const callback = (response) => {
      const { poll } = response;
      setPolls(poll);
    };

    const onError = (error) => {
      console.log(error);
    };

    await GET_POLLS(callback, onError);
  };

  useEffect(() => {
    getPolls();
  }, []);

  return (
    <AuthProvider>
      <header className='flex items-center px-2 py-2 border-b border-darkColor-200 pb-2'>
        <Avatar
          alt='Bash picture'
          style='w-9 h-9'
          imgSrc='/parties/admin.png'
        />
        <div className='flex-1 text-center'>
          <h3 className='text-greenPrimary font-14 font-inter--bold'>
            Choice9ja
          </h3>
        </div>
      </header>
      <Layout style='px-0'>
        <main className='mt-6 border-b-4 pb-6'>
          <h4 className='text-dark px-3 font-16 font-inter--sm mb-3'>
            Discourse Forums
          </h4>
          <ul className='divide-y-2 divide-primaryColor-200'>
            {discussions &&
              discussions.map(({ id, topic }) => (
                <li
                  className='flex justify-between p-3 cursor-pointer transition-all 1s duration-75 ease-in-out text-dark hover:bg-gray-200  '
                  key={id}
                  onClick={() => router.push(`discourse/${id}`)}
                >
                  <div className='flex items-center space-x-3 '>
                    <div
                      className='rounded-md h-8 w-8'
                      style={{
                        background: bgColor,
                      }}
                    />
                    <span className='font-inter--sm  text-ellipsis  font-14 '>
                      {topic}
                    </span>
                  </div>
                  <ChevronRightIcon className='w-6 h-6 my-auto text-darkColor-300' />
                </li>
              ))}
          </ul>
        </main>

        {polls &&
          polls.length > 0 &&
          polls.map((poll, idx) => {
            return <Poll key={idx + 1} poll={poll} />;
          })}
      </Layout>
    </AuthProvider>
  );
}

export const getServerSideProps = async () => {
  const response = await services.get('discussions');

  const discussions = response.data.data;

  return {
    props: {
      discussions,
    },
  };
};
