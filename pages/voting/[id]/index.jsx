import dynamic from 'next/dynamic';

const BackButton = dynamic(() => import('@/components/BackButton'));
const Layout = dynamic(() => import('@/components/layout'));
const Avatar = dynamic(() => import('@/components/Avatar'));

import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import SVG from 'react-inlinesvg';

import { GET_ELECTION_BY_ID, VOTE_ON_ELECTION } from '@/services/elections';

import { Dialog, Transition } from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';

export default function Vote() {
  const [open, setOpen] = useState(false);
  const [election, setElection] = useState(null);
  const [voting, setVoting] = useState(false);
  const [votedCandidate, setVotedCandidate] = useState(null);

  const {
    query: { id },
    push,
  } = useRouter();

  useEffect(() => {
    if (id) {
      getElectionById(id);
    }
  }, [id]);

  useEffect(() => {
    setElection(votedCandidate);
  }, [votedCandidate]);

  const getElectionById = async (election_id) => {
    const callback = (response) => {
      const { election } = response;

      console.log(election);

      setElection(election);
    };

    const onError = (err) => {
      console.log(err);
    };

    await GET_ELECTION_BY_ID(election_id, callback, onError);
  };

  const voteCandidate = async (option) => {
    const data = {
      value: option,
    };

    setVoting(true);

    const callback = (response) => {
      const { data } = response;

      toast.success('Your vote has been casted');

      setVotedCandidate(data);

      setVoting(false);
    };

    const onError = (error) => {
      //const { data } = error;
      //toast.error(data.message);
      console.log(error);
      setVoting(false);
    };

    await VOTE_ON_ELECTION(id, data, callback, onError);
  };

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <header className='px-2 py-3'>
        <BackButton title={`Gubernatorial Election`} />
      </header>
      <Layout>
        <div className='mb-6'>
          <img className='w-full' src='/map.png' alt='Map' />
        </div>

        <div className='mb-10 text-darkColor-300 flex items-center justify-between'>
          <h3 className='font-12 font-inter--md'>Candidates</h3>
          <div className='relative inline-block'>
            <div className='flex items-center text-black-light font-12 font-inter--md px-5 py-2 rounded-md'>
              <button
                type='button'
                className='group inline-flex justify-center text-sm font-medium hover:text-gray-900'
                id='menu-button'
                aria-expanded='false'
                aria-haspopup='true'
              >
                Showing by:
              </button>
              <select className='py-1 border-0 bg-transparent focus:border-0 outline-none'>
                <option className='px-4 py-2 text-sm'>Most Votes</option>
              </select>
            </div>
          </div>
        </div>

        <ul>
          {election &&
            Object.values(election.options).map((candidate, idx) => {
              return (
                <li key={idx} className='bg-white'>
                  <div className='flex flex-shrink-0 items-center justify-between space-x-6'>
                    <div className='relative bg-green-100 flex justify-center items-center rounded-full'>
                      <Avatar style='w-16 h-16' imgSrc='/parties/admin.png' />
                      <img
                        className='absolute w-5 h-5 top-0 left-12'
                        src={`/parties/apc.png`}
                      />
                    </div>
                    <div className='flex-1 space-y-3'>
                      <div className='flex justify-between items-center truncate'>
                        <div>
                          <div className='flex items-center space-x-3'>
                            <h3 className='truncate text-darkColor-300 font-12 font-inter--md'>
                              LP
                            </h3>
                          </div>
                          <p className='space-x-2 text-dark truncate font-14 font-inter--sm'>
                            {candidate.text}
                          </p>
                        </div>
                        <SVG src='/caret.svg' />
                      </div>

                      <div className='flex justify-between items-center truncate'>
                        <div>
                          <div className='flex items-center space-x-3'>
                            <h3 className='truncate uppercase text-darkColor-300 font-12 font-inter--md'>
                              Votes
                            </h3>
                          </div>
                          <p className='space-x-2 text-black text-lg truncate text-md'>
                            <span className='text-greenPrimary font-14 font-inter--md'>
                              {candidate?.value}
                            </span>
                            <span className='text-darkColor-300 font-14 font-inter--md'>
                              (47.01%)
                            </span>
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            const option = Object.keys(election.options)[idx];

                            voteCandidate(option);
                          }}
                          type='button'
                          className='inline-flex space-x-2 items-center rounded-md border border-transparent bg-greenPrimary px-4 py-2 font-12 font-inter--sm text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                        >
                          <SVG className='w-6 h-6' src='/svgs/user.svg' />
                          <span>{voting ? 'voting..' : 'Vote Now'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </Layout>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-12 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                  <div>
                    <div className='mx-auto text-coolblack-700 font-semibold text-xl flex items-center justify-center'>
                      <h2>Congratulations</h2>
                    </div>
                    <div className='mt-3 text-center sm:mt-5'>
                      <div className='mt-2'>
                        <span className='text-coolblack-700'>
                          You have casted your vote for
                        </span>
                        <div className='text-sm text-gray-500'>
                          <p className='text-coolblack-primary font-bold text-lg my-4'>
                            Peter Obi
                          </p>
                          <div className='flex space-x-2 justify-center'>
                            <SVG src='/parties.svg' className='w-8 h-8' />
                            <span>Labour Party (LP)</span>
                          </div>

                          <div className='mx-auto my-10 w-fit relative'>
                            <Avatar
                              style='w-[120px] h-[120px]'
                              imgSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            />
                            <div className='absolute left-20 bottom-2 bg-green-600 p-2 w-fit rounded-full flex justify-center items-center'>
                              <SVG
                                src='/check.svg'
                                className='text-white w-5 h-5'
                              />
                            </div>
                          </div>

                          <div className='flex justify-center text-coolblack-500 w-60'>
                            <p className='font-16'>
                              as presidential candidate of Federal Republic of
                              Nigeria.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 sm:mt-6'>
                    <button
                      type='button'
                      className='inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:text-sm'
                      onClick={() => push('/home')}
                    >
                      Return home
                    </button>
                  </div>
                  <div className='mt-5 sm:mt-6 text-center'>
                    <Link passHref href='/results'>
                      <a href='/results' className='font-bold text-green-600'>
                        View Results
                      </a>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
