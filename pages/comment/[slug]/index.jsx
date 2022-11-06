import BackButton from '@/components/BackButton';
import Verified from '@/components/Verified';
import Avatar from '@/components/Avatar';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { GET_COMMENT_BY_ID } from '@/services/comments';
export default function SingleComment() {
  const [comment, setComment] = useState(null);
  const { query } = useRouter();

  const getCommentById = async (comment_id) => {
    const callback = (response) => {
      const { comment } = response;

      setComment(comment);
    };

    const onError = (error) => {
      console.log(error);
    };

    await GET_COMMENT_BY_ID(comment_id, callback, onError);
  };

  useEffect(() => {
    if (query.slug) {
      getCommentById(query.slug);
    }
  }, []);

  return (
    <>
      <header className='px-2 py-4 border-b'>
        <BackButton title='Comment' />
      </header>
      {comment && (
        <section className='flex space-x-4 mt-3 border-b px-2 cursor-pointer'>
          <div className=''>
            <Avatar
              alt=''
              style='border border-green-500 w-9 h-9'
              imgSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            />
          </div>
          <div className='flex-1'>
            <header className='flex items-center justify-between'>
              <div className='flex space-x-2'>
                <h3 className='text-dark font-12 font-inter--sm'>Username</h3>
                {/* {user.verifiedPhoneNo && <Verified />} */}
              </div>
            </header>
            <div className='mt-2 space-y-2'>
              <header>
                <p className='text-black-primary font-14 my-2'>
                  {comment.message}
                </p>
              </header>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
