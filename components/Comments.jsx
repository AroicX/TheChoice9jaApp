import Verified from './Verified';
import { useRouter } from 'next/router';

import CommentAvatar from './CommentAvatar';

export default function Comments({ comment }) {
  const Router = useRouter();
  return (
    <section
      onClick={() => Router.push(`/comment/${comment.id}`)}
      className='c_comments flex space-x-3 cursor-pointer '
    >
      <div className=''>
        <CommentAvatar user={comment.user} style='h-6 w-6 ' />
      </div>
      <div className='flex-1'>
        <header className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <h3 className='text-dark font-12 font-inter--sm'>
              {comment.user.username}
            </h3>
            {comment.user.verifiedPhoneNo && <Verified />}
          </div>
        </header>
        <div className='mt-2 space-y-2'>
          <header>
            <p className='text-black-primary font-14 my-2'>{comment.message}</p>
          </header>
        </div>
      </div>
    </section>
  );
}
