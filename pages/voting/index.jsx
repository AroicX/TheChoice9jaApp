import Layout from '@/components/layout';
import Avatar from '@/components/Avatar';
import SVG from 'react-inlinesvg';
import { useRouter } from 'next/router';
import { GET_ELECTIONS } from '@/services/elections';
import { useState, useEffect } from 'react';

export default function Voting() {
  const router = useRouter();
  const [elections, setElections] = useState([]);

  const getElections = async () => {
    const callback = (response) => {
      const { election } = response;

      setElections(election);
    };

    const onError = (error) => {
      console.log(error);
    };

    await GET_ELECTIONS(callback, onError);
  };

  useEffect(() => {
    getElections();
  }, []);
  return (
    <>
      <header className='mb-3 flex items-center px-3 py-2 border-b pb-3'>
        <Avatar style='w-9 h-9' imgSrc='/parties/admin.png' />
        <div className='w-full text-center'>
          <h2 className='text-greenPrimary font-14 font-inter--sm'>
            Choice9ja
          </h2>
        </div>
      </header>
      <Layout>
        <header className='space-y-2 mb-20 mt-10'>
          <h3 className='font-16 font-inter--sm text-dark'>
            Choice9ja Mock Election
          </h3>
          <div className='flex justify-between items-center p-4 bg-greenPrimary text-white rounded-md'>
            <div>
              <h3 className='font-16 font-inter--sm'>
                Voting Ends in 6hr 30mins
              </h3>
              <p className='font-14'>Voting Ends at 23 Aug, 2030 - 12:00am</p>
            </div>
            <SVG
              src='/close.svg'
              className='cursor-pointer w-4 h-4 text-white'
              fill='white'
            />
          </div>
        </header>

        <main className='px-2'>
          <h2 className='uppercase text-darkColor-800 font-10 font-inter--sm'>
            select election
          </h2>

          <ul className='mt-6 space-y-4'>
            {elections &&
              elections.map(({ id, title, description, status }) => (
                <li
                  key={id}
                  onClick={() => router.push(`/voting/${id}`)}
                  className='relative rounded-md border cursor-pointer border-coolblack-300 bg-green-neutral-50'
                >
                  <div className='mb-10 flex w-full items-center justify-between space-x-6 px-6 py-6 pb-2'>
                    <div className='flex-1 truncate'>
                      <div className='flex items-center space-x-3'>
                        <h3 className='truncate text-lg text-secondaryColor-800 font-16 font-inter--md'>
                          {title}
                        </h3>
                      </div>
                      <p className='space-x-2 text-darkColor-400 font-11 font-inter-light truncate'>
                        <span>{description}</span>
                      </p>
                    </div>
                    <div
                      className={`${
                        id > 1 ? 'bg-secondaryColor-200' : 'bg-greenPrimary-100'
                      } rounded-full px-3 py-2`}
                    >
                      <SVG src='/caret.svg' />
                    </div>
                  </div>
                  <div
                    className={`bottom-0 font-10 rounded-tr-md rounded-bl-md absolute px-4 py-1 ${
                      id > 1 ? 'bg-secondaryColor-200' : 'bg-greenPrimary-100'
                    }`}
                  >
                    {status}
                  </div>
                </li>
              ))}
          </ul>
        </main>
      </Layout>
    </>
  );
}
