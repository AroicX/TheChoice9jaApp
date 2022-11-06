import BackButton from '@/components/BackButton';
import Avatar from '@/components/Avatar';
import Verified from '@/components/Verified';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import SVG from 'react-inlinesvg';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GET_POST_BY_ID } from '@/services/posts/index';
import { useState } from 'react';
import SinglePost from '@/components/discourse/singlePost';

export default function Poll() {
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});

  const getPostById = async () => {
    setLoading(true);
    const callback = (response) => {
      const { data } = response;

      setPost(data);

      console.log(data);

      setLoading(false);
    };

    const onError = (error) => {
      setLoading(false);
      console.log(error.data);
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
      <main className='border-b pb-4 mb-28'>
        {loading ? (
          <p className='text-center mt-2'>Loading...</p>
        ) : (
          <SinglePost user={post?.user} post={{ ...post }} />
        )}
      </main>
    </>
  );
}
