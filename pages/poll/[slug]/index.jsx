import BackButton from '@/components/BackButton';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { GET_POLL_BY_ID } from '@/services/polls';
import Avatar from '@/components/Avatar';
import Poll from '@/components/Poll';

export default function SinglePoll() {
  const [poll, setPoll] = useState(null);
  const [results, setResults] = useState(null);
  const { query } = useRouter();

  const getPollById = async (poll_id) => {
    const callback = (response) => {
      const { poll } = response;

      console.log(poll);

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
        <BackButton title='Poll' />
      </header>
      <main className='px-2'>{poll && <Poll poll={poll} />}</main>
    </>
  );
}
