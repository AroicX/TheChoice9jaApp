import Avatar from './Avatar';
import Verified from './Verified';
import SVG from 'react-inlinesvg';
import Button from '@/reusable/Button';
import Modal from '@/reusable/Modal';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { classNames } from '../helpers';
import {
  EllipsisHorizontalIcon,
  ChartBarSquareIcon,
  FlagIcon,
} from '@heroicons/react/24/outline';
import { VOTE_ON_POLL } from '@/services/polls';
import toast, { Toaster } from 'react-hot-toast';

const Candidates = ({ person, option, voted, results, click }) => {
  const result = results[option].value;
  return (
    <div onClick={() => click(option)}>
      <RadioGroup.Option
        value={person}
        className={({ active }) =>
          classNames(
            active ? 'ring-2 ring-green-500' : '',
            'group relative h-auto border rounded-md focus:outline-none '
          )
        }
      >
        {({ active, checked }) => (
          <section>
            <div className='flex w-full items-center justify-between space-x-6'>
              <img className='w-full rounded-t-md' src='/nuhu.png' alt='' />
            </div>
            <div className='p-2 h-12 font-bold flex items-center space-x-4 bg-primaryColor-200'>
              <input
                readOnly
                checked={checked}
                type='radio'
                name='candidate'
                className='h-5 w-5 checked:bg-green-500 border border-3 border-green-neutral-300 focus:ring-green-neutral-500'
              />
              <p className='text-coolblack-primary font-12 font-inter--md'>
                {person.text}
              </p>
            </div>
            {voted && (
              <div className='bg-gray-200 rounded-md my-2 mx-1 h-6 mb-1 dark:bg-gray-700'>
                <div
                  className={` h-full rounded-md ${
                    result < 75 ? 'bg-primaryColor-400' : 'bg-green-600'
                  }`}
                  style={{ width: `${result}%` }}
                >
                  <span className='pl-2'>{`${result}%`}</span>
                </div>
              </div>
            )}
          </section>
        )}
      </RadioGroup.Option>
    </div>
  );
};

export default function Poll({ poll }) {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [voting, setVoting] = useState(false);
  const [voted, setVoted] = useState(false);
  const [modal, setModal] = useState(false);
  const [results, setResults] = useState(poll.results);
  const router = useRouter();

  const voteOnPoll = async () => {
    const data = {
      value: selectedCandidate,
    };

    setVoting(true);

    const callback = (response) => {
      const { data } = response;
      toast.success('Your vote has been casted');

      setResults(data.results);

      setVoting(false);
    };

    const onError = (error) => {
      const { data } = error;
      toast.error(data.message);
      setVoting(false);
    };

    await VOTE_ON_POLL(poll.id, data, callback, onError);
  };

  const getSelectedCandidate = (candidate) => {
    setSelectedCandidate(candidate);
  };

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <section className='cursor-pointer mt-6 px-3 border-b pb-4 mb-6'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex space-x-3'>
            <Avatar
              alt=''
              style='border border-green-500 w-9 h-9'
              imgSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            />
            <header className=''>
              <div className='flex space-x-2'>
                <h3 className='text-coolblack-primary font-12 font-inter--sm'>
                  Choice9ja
                </h3>
                <Verified />
              </div>
              <h3 className='uppercase font-10 font-inter-md flex items-center space-x-2 text-darkColor-300'>
                <span>poll</span>
              </h3>
            </header>
          </div>
          <EllipsisHorizontalIcon
            onClick={() => setModal(true)}
            className='h-7 w-7 text-darkColor-300'
          />
        </div>
        <div className='w-full'>
          <div className='mt-2 space-y-2'>
            <header onClick={() => router.push(`/poll/${poll.id}`)}>
              <p className='text-coolblack-800 font-14 font-inter--bold'>
                {poll.question}
              </p>
            </header>
            <div className='candidates'>
              <RadioGroup value={selectedCandidate}>
                <ul className='grid grid-cols-2 gap-6'>
                  {Object.values(poll.options).map((person, idx) => (
                    <Candidates
                      key={person.id}
                      person={person}
                      voted={voted}
                      click={getSelectedCandidate}
                      results={results}
                      option={Object.keys(poll.options)[idx]}
                    />
                  ))}
                </ul>
              </RadioGroup>
              {selectedCandidate && (
                <Button
                  click={voteOnPoll}
                  type='button'
                  loading={voting}
                  text={`${voting ? 'Voting' : 'Vote'}`}
                  styles='my-4 bg-green-500 rounded-full text-white text-lg py-1'
                />
              )}
            </div>
            <div className='text-primaryColor-600 font-12 font-inter--md flex space-x-3 items-center'>
              <span>
                {poll.poll_count}{' '}
                {`${poll.poll_count === 0 || 1 ? 'vote' : 'votes'}`}
              </span>
              <span className='font-bold text-lg'>.</span>
              <span>8 days left</span>
            </div>
          </div>
        </div>
        <footer className='flex items-center space-x-4'>
          <div className='flex items-center space-x-3 text-primaryColor-500'>
            <div className='flex gap-5'>
              <button className='flex items-center space-x-1 p-1'>
                <SVG className='m-auto' src='/svgs/thumbs-up.svg' />
                <span className='text-base mx-0.5 my-auto'>0</span>
              </button>
              <button className='flex items-center space-x-1 p-1'>
                <SVG className='m-auto' src='/svgs/thumbs-down.svg' />
                <span className='text-base mx-0.5 my-auto'>0</span>
              </button>

              <button className='flex space-x-1 p-1'>
                <SVG
                  className='m-auto'
                  height='1.2rem'
                  src='/svgs/comment.svg'
                />
                <span className='text-base mx-0.5 my-auto'>0</span>
              </button>
              <button className='flex p-1'>
                <SVG className='m-auto' height='1.2rem' src='/svgs/reply.svg' />
                <span className='text-base mx-0.5 my-auto'></span>
              </button>
            </div>

            {/* {item.count !== 0 && numberFormatter(item.count)} */}
          </div>
        </footer>
      </section>
      {/* <Comments comments={comments} /> */}
      {/* <div className='flex items-center px-3 mt-3 h-fit space-x-4'>
        <Avatar
          alt=''
          style='border border-green-500 h-12 w-12'
          imgSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        />
        <div className='min-w-0 flex-1'>
          <form action='#'>
            <div className='focus-within:border-indigo-600'>
              <label htmlFor='comment' className='sr-only'>
                Add your comment
              </label>
              <textarea
                rows={1}
                name='comment'
                id='comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className='block w-full resize-none border rounded-full px-2 py-1 border-green-200 p-0 pb-2 focus:border-green-600 focus:ring-0 sm:text-sm'
                placeholder='Add your comment...'
              />
            </div>
          </form>
        </div>
      </div> */}
      <Modal title='Poll' toggle={modal} dispatch={() => setModal(false)}>
        <div className='divide-y'>
          <div
            onClick={() => router.push(`/poll/${poll.id}/analytics`)}
            className='flex items-center py-2 px-3 space-x-2 cursor-pointer'
          >
            <ChartBarSquareIcon className='w-5 h-5 text-green-neutral-500' />
            <span className='text-coolblack-primary font-normal'>
              Expand poll results
            </span>
          </div>
          <div
            onClick={() => router.push('/reports')}
            className='flex items-center py-2 px-3 space-x-2'
          >
            <FlagIcon className='w-5 h-5 text-green-neutral-500' />
            <span className='text-red-400 font-normal'>Result</span>
          </div>
        </div>
      </Modal>
    </>
  );
}
