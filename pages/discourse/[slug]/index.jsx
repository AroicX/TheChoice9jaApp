import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { JOIN_ROOM, GET_ROOMS_BY_USER } from '@/services/room';
import BackButton from '@/components/BackButton';
import Avatar from '@/components/Avatar';
import Button from '@/reusable/Button';
import Layout from '@/components/layout';
import Modal from '@/components/Modal';
import { PlusIcon } from '@heroicons/react/24/outline';
import toast, { Toaster } from 'react-hot-toast';
import DiscourssionTabs from '@/components/discourse/Tabs';

import { GET_DISCOUSSION_BY_ID } from '@/services/discussions';
import { GET_POLL_BY_DISCUSSION } from '@/services/polls';
import { CREATE_POST, GET_POST_BY_DISCOUSSION } from '@/services/discourse';
import Poll from '@/components/Poll';
import { contrastColor, randomColor } from '@/helpers/index';

export default function Slug() {
  const [room, setRoom] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [poll, setPoll] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [joined, setJoined] = useState(false);
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState('');

  const color = randomColor();

  const { discussion } = useSelector((state) => state.discussion);
  const {
    query: { slug },
  } = useRouter();

  useEffect(() => {
    if (slug) {
      getDiscussionById(slug);
      getPollByDiscussion(slug);
    }
  }, [slug]);

  useEffect(() => {
    const { user } = JSON.parse(localStorage.getItem('user-data'));
    setUser(user);
  }, []);

  useEffect(() => {
    getRoomsByUser();
  }, []);

  const joinRoom = () => {
    setIsLoading(true);

    const data = {
      userId: user.id,
      discussionsId: slug,
    };

    const callback = (response) => {
      if (response) {
        setIsLoading(false);
        setJoined(true);

        toast.success(response.message);
      }
    };

    const onError = (err) => {
      setIsLoading(false);
      ResponseHandler(err);
    };

    JOIN_ROOM(data, callback, onError);
  };

  const getRoomsByUser = () => {
    const callback = (response) => {
      if (response) {
        response.room.map((room) => {
          if (room.discussionsId === +slug) {
            setJoined(true);
          }
        });
      }
    };

    const onError = (err) => {
      ResponseHandler(err);
    };

    GET_ROOMS_BY_USER(callback, onError);
  };

  const getDiscussionById = async (discussion_id) => {
    const callback = async (response) => {
      const { data } = response;
      setRoom(data);
      await getPostByDiscussion(slug);
    };

    const onError = (err) => {
      console.log(err);
    };

    await GET_DISCOUSSION_BY_ID(discussion_id, callback, onError);
  };

  const getPostByDiscussion = async (discussion_id) => {
    const callback = (response) => {
      const { data } = response;
      setDiscussions(data);
    };

    const onError = (err) => {
      console.log(err);
    };

    await GET_POST_BY_DISCOUSSION(discussion_id, callback, onError);
  };

  const getPollByDiscussion = async (discussion_id) => {
    const callback = (response) => {
      const { poll } = response;

      setPoll(poll);
    };

    const onError = (err) => {
      console.log(err);
    };

    await GET_POLL_BY_DISCUSSION(discussion_id, callback, onError);
  };

  const createPost = async (event) => {
    event.preventDefault();

    const data = {
      discussionsId: slug,
      message: post,
    };

    setIsLoading(true);

    const callback = (response) => {
      const { data } = response;

      setIsLoading(false);
    };

    const onError = (err) => {
      console.log(err);
      setIsLoading(false);
    };

    await CREATE_POST(data, callback, onError);
  };

  return (
    <Layout>
      <Toaster position='top-center' reverseOrder={false} />
      <button
        onClick={() => setOpen(true)}
        className='m_create--post'
        type='button'
      >
        <PlusIcon className='h-8 w-8' aria-hidden='true' />
      </button>
      <header className='py-2 px-3 mb-1'>
        <BackButton title={room.topic} />
      </header>
      <section
        className={`pt-2`}
        style={{
          background: color,
        }}
      >
        <div className='px-2'>
          <div className='flex justify-between items-center'>
            <Avatar style='bg-white' />
            <Button
              click={joinRoom}
              loading={isLoading}
              type='button'
              disabled={isLoading || joined}
              text={`${joined ? 'Joined' : 'Join +'}`}
              styles={`${
                joined &&
                'bg-darkColor-300 cursor-not-allowed text-black border-0'
              } border-2 text-white font-bold border-white w-fit px-12 rounded-full`}
            />
          </div>
          <div
            className=' space-y-2 my-2'
            style={{
              color: contrastColor(color),
            }}
          >
            <h3 className='font-20 font-inter--sm'>{room.topic}</h3>
            <p className='font-12 font-inter--regular'>
              {room.question}
              {discussion ? discussion.discussion.description : ''}
            </p>
          </div>
        </div>
        <div className='text-white p-2 border border-t'>
          <p>{Math.floor(Math.random() * (1000 - 100) + 100)} People Joined</p>
        </div>
      </section>

      <DiscourssionTabs discussions={discussions} />

      {poll && <Poll poll={poll} />}

      <Modal open={open} setOpen={setOpen}>
        <form onSubmit={createPost}>
          <div>
            <label
              htmlFor='post'
              className='block text-sm font-medium text-gray-700'
            >
              Add your post
            </label>
            <div className='mt-1'>
              <textarea
                rows={4}
                value={post}
                onChange={(e) => setPost(e.target.value)}
                name='post'
                id='post'
                className='block w-full rounded-md border-gray-300 shadow-sm focus:border-greenPrimary-700 focus:ring-greenPrimary-700 sm:text-sm'
              />
            </div>
          </div>
          <Button
            loading={isLoading}
            type='submit'
            text={`${isLoading ? 'Adding...' : 'Add'}`}
            styles='mt-4 rounded-lg text-white font-bold text-sm w-36 bg-greenPrimary'
          />
        </form>
      </Modal>
    </Layout>
  );
}
