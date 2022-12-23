/* eslint-disable react-hooks/rules-of-hooks */
import dynamic from 'next/dynamic';
import HomeHeader from '@/components/HomeHeader';
import ElectionCandidates from '@/components/ElectionCandidates';
const Layout = dynamic(() => import('@/components/layout'));
const SinglePost = dynamic(() => import('@/components/discourse/singlePost'));
import useAuth from '@/hooks/useAuth';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';

import { useState, useEffect } from 'react';
import { LOAD_DISCOURSSIONS_FROM_TIMELINE } from '@/services/discourse';

const CANDIDATES = [
  {
    id: 0,
    election: 'Presidential',
    status: 'Ongoing',
  },
  {
    id: 1,
    election: 'Senatorial',
    status: 'Upcoming',
  },
  {
    id: 2,
    election: 'Gubernatorial',
    status: 'Upcoming',
  },
];

function Home() {
  const [discourse, setDiscourse] = useState([]);

  useEffect(() => {
    getDiscourse();
  }, []);

  const getDiscourse = async () => {
    const callback = (response) => {
      const { data } = response;

      setDiscourse(data);
    };

    const onError = (error) => {
      console.log(error.data);
    };

    await LOAD_DISCOURSSIONS_FROM_TIMELINE(callback, onError);
  };

  const _updateState = async (data) => {
    const postId = data.postsId;

    const oldState = discourse;

    const DISCOURSE = oldState.find((dic) => dic.id === postId);

    const newDiscussions = oldState.filter((dic) => dic.id !== postId);

    DISCOURSE.comments.push(data);

    setDiscourse(() => [...newDiscussions, DISCOURSE].reverse());
  };

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
      <div className='px-4 mb-4'>
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={true}
          autoplay={true}
          effect='slide'
          pagination={{
            el: '.swiper__pagination',
            bulletClass: 'swiper__pagination__bullet',
            bulletActiveClass: 'swiper__pagination__bullet--active',
            type: 'bullets',
            clickable: true,
            renderBullet: function (_index, _className) {
              return `<div class="swiper__pagination__bullet"></div>`;
            },
          }}
        >
          {CANDIDATES.map((candidate) => (
            <SwiperSlide key={candidate.id}>
              <ElectionCandidates candidate={candidate} />
            </SwiperSlide>
          ))}
          <div className='swiper__pagination'></div>
        </Swiper>
      </div>
      <div className='px-3 pt-6 border-b pb-4 text-black font-16 font-inter--sm'>
        <h3>See what is happening</h3>
      </div>
      <Layout style='px-0' active='home'>
        {/* <Poll /> */}

        <main>
          {discourse.map(
            (
              {
                id,
                user,
                discussions,
                message,
                comments,
                likes,
                dislikes,
              } = post,
              key
            ) => (
              <div key={key + 1} className='relative'>
                <SinglePost
                  key={key + 1}
                  user={user}
                  discussion={discussions}
                  post={{ comments, likes, dislikes, message, id }}
                  dispatch={(val) => _updateState(val)}
                />
              </div>
            )
          )}
        </main>
      </Layout>
    </>
  );
}

export default useAuth(Home);
