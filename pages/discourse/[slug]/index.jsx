import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getDiscussion } from 'actions';
import { JOIN_ROOM, GET_ROOMS_BY_USER } from '@/services/room';
import BackButton from '@/components/BackButton';
import Avatar from '@/components/Avatar';
import Button from '@/reusable/Button';
import Layout from '@/components/layout';
import CreatePost from '@/components/CreatePost';
import { randomColor, ResponseHandler } from '@/helpers/index';
import { GET_POST_BY_DISCOUSSION } from '@/services/discourse';
import DiscourssionTabs from '@/components/discourse/Tabs';
import { GET_DISCOUSSION_BY_ID } from '@/services/discussions';

export default function Slug() {
  const [room, setRoom] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [joined, setJoined] = useState(false);
  const dispatch = useDispatch();

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

  // console.log(randomColor);
  return (
    <Layout>
      <CreatePost />
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
    </Layout>
  );
}
