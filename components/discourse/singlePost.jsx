import { numberFormatter } from '@/helpers/index';
import { ICONS } from '@/reusable/Icons';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Avatar from '../Avatar';
import Verified from '../Verified';
import SVG from 'react-inlinesvg';
import { DISLIKE_DISCOURSE, LIKE_DISCOURSE } from '@/services/discourse';

export default function SinglePost({ post, user, discussion, dispatch }) {
  const _like = async (post_id) => {
    const callback = (response) => {
      const { data } = response;

      dispatch(data);
    };

    const onError = (error) => {
      console.log(error);
    };

    await LIKE_DISCOURSE(post_id, callback, onError);
  };
  const _dislike = async (post_id) => {
    const callback = (response) => {
      const { data } = response;
      dispatch(data);
    };

    const onError = (error) => {
      console.log(error);
    };

    await DISLIKE_DISCOURSE(post_id, callback, onError);
  };

  return (
    <section className='flex space-x-4 mt-2 cursor-pointer border-b p-4'>
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
            <h3 className='text-dark font-12 font-inter--sm'>
              {user.username}
            </h3>
            {user.verifiedPhoneNo && <Verified />}
          </div>
          <EllipsisHorizontalIcon
            // onClick={() => setModal(true)}
            className='h-7 w-7'
          />
        </header>
        <div className='mt-2 space-y-2'>
          <header>
            <h3 className='uppercase font-10 font-inter--md flex items-center space-x-2 text-primaryColor-700'>
              <span>discourse</span>
              <span className='text-2xl -mt-2'>.</span>
              <span>{discussion.topic}</span>
            </h3>
            <p className='text-black-primary font-14 my-2'>{post.message}</p>
          </header>
          <footer className='flex items-center space-x-4'>
            <div className='flex items-center space-x-3 text-primaryColor-500'>
              <div className='flex gap-5'>
                <button className='flex p-1' onClick={() => _like(post.id)}>
                  <SVG
                    className='m-auto'
                    height='1.2rem'
                    src='/svgs/thumbs-up.svg'
                  />
                  <span className='text-base mx-0.5 my-auto'>{post.likes}</span>
                </button>
                <button className='flex p-1' onClick={() => _dislike(post.id)}>
                  <SVG
                    className='m-auto'
                    height='1.2rem'
                    src='/svgs/thumbs-down.svg'
                  />
                  <span className='text-base mx-0.5 my-auto'>
                    {post.dislikes}
                  </span>
                </button>

                <button className='flex p-1'>
                  <SVG
                    className='m-auto'
                    height='1.2rem'
                    src='/svgs/comment.svg'
                  />
                  <span className='text-base mx-0.5 my-auto'></span>
                </button>
                <button className='flex p-1'>
                  <SVG
                    className='m-auto'
                    height='1.2rem'
                    src='/svgs/reply.svg'
                  />
                  <span className='text-base mx-0.5 my-auto'></span>
                </button>
              </div>

              {/* {item.count !== 0 && numberFormatter(item.count)} */}
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
