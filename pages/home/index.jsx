import HomeHeader from '@/components/HomeHeader';
import ElectionCandidates from '@/components/ElectionCandidates';
import Layout from '@/components/layout';
import { useState, useEffect } from 'react';
import { LOAD_DISCOURSSIONS_FROM_TIMELINE } from '@/services/discourse';
import SinglePost from '@/components/discourse/singlePost';

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
    const { id } = data;
    const oldState = discourse;

    const filter = oldState.filter((x) => x.id === id)[0];
    const removeItem = oldState.filter((x) => x.id !== id);
    filter.likes = data.likes;
    filter.dislikes = data.dislikes;

    // removeItem.sort((a, b) => a - b);

    // removeItem = [...removeItem, filter];

    // setDiscourse(removeItem);
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
      <ul className='px-4 border-b space-y-4 py-3 overflow-y-scroll'>
        <ElectionCandidates people={people} />
      </ul>
      <div className='px-3 pt-6 border-b pb-4 text-black font-16 font-inter--sm'>
        <h3>See what is happening</h3>
      </div>
      <Layout active='home'>
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
