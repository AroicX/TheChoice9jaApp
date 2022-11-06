import Avatar from './Avatar';
import Verified from './Verified';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { classNames } from '../helpers';
import { numberFormatter } from '../helpers';
import Button from '@/reusable/Button';
import Comments from './Comments';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { VOTE_ON_POLL } from '@/services/polls';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Candidates = ({ person, option, click }) => {
  return (
    <div onClick={() => click(option)}>
      <RadioGroup.Option
        value={person}
        className={({ active }) =>
          classNames(
            active ? 'ring-2 ring-green-500' : '',
            'group relative h-auto border h-fit rounded-md focus:outline-none '
          )
        }
      >
        {({ active, checked }) => (
          <section>
            <div className='flex w-full items-center justify-between space-x-6'>
              <img className='w-full rounded-t-md' src={person.image} alt='' />
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
            {/* <div className='bg-gray-200 rounded-md h-6 mb-1 dark:bg-gray-700'>
              <div
                className='bg-green-600 h-full rounded-md dark:bg-green-500'
                style={{ width: '45%' }}
              ></div>
            </div> */}
          </section>
        )}
      </RadioGroup.Option>
    </div>
  );
};

export default function Poll({ poll }) {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [voting, setVoting] = useState(false);
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const [comment, setComment] = useState('');

  const voteOnPoll = async () => {
    const data = {
      value: selectedCandidate,
    };

    setVoting(true);

    const callback = (response) => {
      toast.success('Your vote has been casted');

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
      <section className='flex space-x-4 cursor-pointer mt-6 px-4'>
        <div className=''>
          <Avatar
            alt=''
            style='border border-green-500 w-9 h-9'
            imgSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          />
        </div>
        <div className='flex-1'>
          <header className='flex justify-between items-center'>
            <div className='flex space-x-2'>
              <h3 className='text-coolblack-primary font-12 font-inter--sm'>
                Choice9ja
              </h3>
              <Verified />
            </div>
            <EllipsisHorizontalIcon
              onClick={() => setModal(true)}
              className='h-7 w-7'
            />
          </header>
          <div className='mt-2 space-y-2'>
            <header onClick={() => router.push(`/poll/${poll.id}`)}>
              <h3 className='uppercase font-10 font-inter-md flex items-center space-x-2 text-green-neutral-500'>
                <span>poll</span>
                <span className='text-2xl -mt-2'>.</span>
                <span className='text-coolblack-primary text-body-2-regular'>
                  poll
                </span>
              </h3>
              <p className='text-coolblack-900 font-14 font-inter--regular'>
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
                      click={getSelectedCandidate}
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
              <span>42,000 Votes</span>
              <span className='font-bold text-lg'>.</span>
              <span>8 days left</span>
            </div>
          </div>
        </div>
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
    </>
  );
}
