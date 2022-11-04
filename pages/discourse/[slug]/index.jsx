import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getDiscussion } from 'actions';
import { JOIN_ROOM, GET_ROOMS_BY_USER } from '@/services/room';
import BackButton from '@/components/BackButton';
import Avatar from '@/components/Avatar';
import Button from '@/reusable/Button';
import Layout from '@/components/layout';
import Modal from '@/components/Modal';
import { PlusIcon } from '@heroicons/react/24/outline';
import { randomColor, ResponseHandler } from '@/helpers/index';
import { CREATE_POST, GET_POST_BY_DISCOUSSION } from '@/services/discourse';
import DiscourssionTabs from '@/components/discourse/Tabs';
import { GET_DISCOUSSION_BY_ID } from '@/services/discussions';

export default function Slug() {
  const [room, setRoom] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [joined, setJoined] = useState(false);
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState('');

  const { discussion } = useSelector((state) => state.discussion);
  const {
    query: { slug },
  } = useRouter();

  useEffect(() => {
    if (slug) {
      getDiscussionById(slug);
    }
  }, [slug]);

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

  const createPost = async (event) => {
    event.preventDefault();

    const data = {
      discussionsId: slug,
      message: post,
    };

    setIsLoading(true);

    const callback = (response) => {
      const { data } = response;

      // Push into discussion
      //setDiscussions((prev) => [...prev, data].reverse())

      setIsLoading(false);
    };

    const onError = (err) => {
      console.log(err);
      setIsLoading(false);
    };

    await CREATE_POST(data, callback, onError);
  };

  // console.log(randomColor);
  return (
    <Layout>
      <button
        onClick={() => setOpen(true)}
        className='m_create--post'
        type='button'
      >
        <PlusIcon className='h-8 w-8' aria-hidden='true' />
      </button>
      <header className='py-2 px-3 mb-1'>
        <BackButton title='In Nigeria' />
      </header>
      <section className={`bg-red-400 pt-2`}>
        <div className='px-2'>
          <div className='flex justify-between items-center'>
            <Avatar style='bg-white' />
            <Button
              // click={onSubmitHandler}
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
          <div className='text-white space-y-2 my-2'>
            <h3 className='font-20 font-inter--sm'>{room.topic}</h3>
            <p className='font-12 font-inter--regular'>
              {room.question}
              {discussion ? discussion.discussion.description : ''}
            </p>
          </div>
        </div>
        <div className='bg-red-500 text-white p-2'>
          <p>{Math.floor(Math.random(1, 1000))} People Joined</p>
        </div>
      </section>

      <DiscourssionTabs discussions={discussions} />

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
