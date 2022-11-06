import Verified from './Verified';
import Avatar from './Avatar';

import { useRouter } from 'next/router';

export default function Comments({ comment }) {
  const Router = useRouter();
  return (
    <section
      onClick={() => Router.push(`/comment/${comment.id}`)}
      className='flex space-x-4 mt-2 cursor-pointer'
    >
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
            <p className='text-black-primary font-14 my-2'>{comment.message}</p>
          </header>
        </div>
      </div>
    </section>
  );
}
