import HomeHeader from '@/components/HomeHeader';
import ElectionCandidates from '@/components/ElectionCandidates';
import Poll from '@/components/Poll';
import Layout from '@/components/layout';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'actions';
import Skeleton from '@/reusable/Skeleton';
import Post from '@/components/Post';

const people = [
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
];

export default function Home() {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
    <HomeHeader />
      <div className='px-5 space-y-3 my-5'>
        <h3 className='text-black-primary font-inter--sm font-24'>
          Know, share &amp; vote your choice.
        </h3>
        <p className='text-secondaryColor-800 font-14 font-inter--regular'>
          Learn about your nigerian politician and discuss politics, raise
          issues and vote your choice.
        </p>
      </div>
      <ul className='px-4 border-b space-y-4 py-3 overflow-y-scroll'>
        <ElectionCandidates people={people} />
      </ul>
      <div className='px-3 pt-6 border-b pb-4 text-black font-16 font-inter--sm'>
        <h3>See what is happening</h3>
      </div>
    <Layout active='home'>
      {loading ? <Skeleton /> : (
        <Poll posts={posts?.posts}/>
      )}
    </Layout>
    </>
  );
}
