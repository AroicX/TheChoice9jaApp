import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import services from '@/services/index';
import Avatar from '@/components/Avatar';
import Layout from '@/components/layout';
import Loader from '@/reusable/Loader';
import Discourse from '@/components/Discourse';

export default function Discussion({ discussions }) {
  const router = useRouter();

  return (
    <>
      <header className='flex items-center px-2 py-2 border-b border-darkColor-200 pb-2'>
        <Avatar
          alt='Bash picture'
          style='w-9 h-9'
          imgSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        />
        <div className='flex-1 text-center'>
          <h3 className='text-greenPrimary font-14 font-inter--bold'>
            Choice9ja
          </h3>
        </div>
      </header>
      <Layout>
        <main className='mt-6 border-b-4 pb-6'>
          <h4 className='text-dark font-16 font-inter--sm mb-3'>
            Discourse Forums
          </h4>
          <ul className='divide-y divide-primaryColor-300'>
            {discussions &&
              discussions.map(({ id, topic }) => (
                <li
                  className='flex justify-between p-2 py-4 cursor-pointer transition-all 1s duration-75 ease-in-out text-dark hover:bg-gray-200  '
                  key={id}
                  onClick={() => router.push(`discourse/${id}`)}
                >
                  <div className='flex items-center space-x-3 '>
                    <div className='rounded-md bg-blue-500 h-8 w-8' />
                    <span className='font-inter--sm  text-ellipsis  font-14 '>
                      {topic}
                    </span>
                  </div>
                  <ChevronRightIcon className='w-6 h-6 my-auto text-darkColor-300' />
                </li>
              ))}
          </ul>
        </main>

        {/* <Discourse poll='restructuring nigeria' /> */}
      </Layout>
    </>
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
