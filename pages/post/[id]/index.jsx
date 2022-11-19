import dynamic from 'next/dynamic';

const BackButton = dynamic(() => import('@/components/BackButton'));
const SinglePost = dynamic(() => import('@/components/discourse/singlePost'));

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GET_POST_BY_ID } from '@/services/posts/index';
import { useState } from 'react';

export default function Poll() {
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});

  const getPostById = async () => {
    setLoading(true);
    const callback = (response) => {
      const { data } = response;

      setPost(data);

      setLoading(false);
    };

    const onError = (error) => {
      setLoading(false);
    };

    await GET_POST_BY_ID(+query.id, callback, onError);
  };

  useEffect(() => {
    getPostById();
  }, []);

  return (
    <>
      <header className='border-b py-3 px-4 border-b-coolblack-200'>
        <BackButton title='Post' />
      </header>
      <main className='pb-4 mb-28'>
        {loading ? (
          <p className='text-center mt-2'>Loading...</p>
        ) : (
          <>
            <SinglePost user={post?.user} post={{ ...post }} />
          </>
        )}
      </main>
    </>
  );
}
