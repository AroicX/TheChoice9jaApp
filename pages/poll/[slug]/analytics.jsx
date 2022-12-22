import BackButton from '@/components/BackButton';
import { useRouter } from 'next/router';

import { PARTIES } from '@/helpers/index';
import { useEffect, useState } from 'react';
import { GET_POLL_BY_ID } from '@/services/polls';
import Avatar from '@/components/Avatar';

export default function Analytics() {
  const [poll, setPoll] = useState(null);
  const [results, setResults] = useState(null);
  const { query } = useRouter();

  const getPollById = async (poll_id) => {
    const callback = (response) => {
      const { poll } = response;

      setPoll(poll);
      setResults(poll.results);
    };

    const onError = (error) => {
      console.log(error);
    };

    await GET_POLL_BY_ID(poll_id, callback, onError);
  };

  useEffect(() => {
    if (query.slug) {
      getPollById(query.slug);
    }
  }, []);

  return (
    <>
      <header className='px-2 py-4 border-b'>
        <BackButton title='Poll Analytics' />
      </header>

      <div className='my-10 px-2'>
        <span className='text-darkColor-300 block'>Total Votes</span>
        <span className='text-darkColor-500 block font-bold'>
          {poll && poll.poll_count}
        </span>
      </div>

      <main className='px-2'>
        <h3 className='mb-3'>Results</h3>
        {poll &&
          Object.values(poll.options).map((person, idx) => {
            const result = results[Object.keys(poll.options)[idx]].value;
            return (
              <div
                key={person.id}
                className='bg-gray-200 relative rounded-md my-2 h-14 mb-1 dark:bg-gray-700'
              >
                <Avatar
                  style='w-9 h-9 absolute top-2 left-2 z-[10]'
                  imgSrc={`/candidates/${
                    PARTIES[person.text.trim()]?.image
                  }.png`}
                />
                <div className='absolute text-sm top-2 left-14 z-[999]'>
                  <span className='block'>{person.text}</span>
                  <span className='block'>{`${person.value} ${
                    person.value === 0 || 1 ? 'Vote' : 'Votes'
                  }`}</span>
                </div>
                <div
                  className={` h-full rounded-md flex items-center justify-end ${
                    result < 75 ? 'bg-primaryColor-400' : 'bg-green-600'
                  }`}
                  style={{ width: `${result}%` }}
                >
                  <span className='absolute right-2'>{`${result}%`}</span>
                </div>
              </div>
            );
          })}
      </main>
    </>
  );
}
