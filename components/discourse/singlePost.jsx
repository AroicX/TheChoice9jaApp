import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Avatar from '../Avatar';
import Verified from '../Verified';
import { useRouter } from 'next/router';
import SVG from 'react-inlinesvg';
import { useState } from 'react';
import { DISLIKE_DISCOURSE, LIKE_DISCOURSE } from '@/services/discourse';
import { CREATE_COMMENT } from '@/services/comments';
import Button from '@/reusable/Button';
import Comments from '../Comments';
import Modal from '../Modal';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import AvatarName from '../NameAvatar';

export default function SinglePost({ post, user, discussion, dispatch }) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();

  const _like = async (post_id) => {
    const callback = (response) => {
      const { data } = response;

      dispatch(data);
    };

    const onError = (error) => {
      const { data } = error;

      toast.error(data.message);
    };

    await LIKE_DISCOURSE(post_id, callback, onError);
  };

  const _dislike = async (post_id) => {
    const callback = (response) => {
      const { data } = response;
      dispatch(data);
    };

    const onError = (error) => {
      const { data } = error;

      toast.error(data.message);
    };

    await DISLIKE_DISCOURSE(post_id, callback, onError);
  };

  const _comment = async (event) => {
    event.preventDefault();

    const data = {
      message: comment,
    };

    setIsLoading(true);

    const callback = (response) => {
      setIsLoading(false);
      const { comment } = response;

      toast.success('Your comment is added');

      setOpen(false);
    };

    const onError = (error) => {
      const { data } = error;

      toast.error(data.message);

      setIsLoading(false);
    };

    await CREATE_COMMENT(data, post.id, callback, onError);
  };

  return (
    <div className='border-b p-4 relative z-[10]'>
      <Toaster position='top-center' reverseOrder={false} />
      <section className='relative flex space-x-4 mt-2 cursor-pointer '>
        <AvatarName style='h-9 w-9' user={user} />

        <div className='flex-1'>
          <header className='flex items-center justify-between'>
            <div className='flex space-x-2'>
              <h3 className='text-dark font-12 font-inter--sm'>
                {user?.username}
              </h3>
              {user?.verifiedPhoneNo && <Verified className='my-auto' />}
            </div>
            <EllipsisHorizontalIcon
              // onClick={() => setModal(true)}
              className='h-7 w-7'
            />
          </header>
          <div className='mt-2 space-y-2'>
            <header onClick={() => Router.push(`/post/${post.id}`)}>
              {discussion && (
                <h3 className='uppercase font-10 font-inter--md flex items-center space-x-2 text-primaryColor-700'>
                  <span>discourse</span>
                  <span className='text-2xl -mt-2'>.</span>
                  <span>{discussion.topic}</span>
                </h3>
              )}
              <p className='text-black-primary font-14 my-2'>{post.message}</p>
            </header>
            <footer className='flex items-center space-x-4'>
              <div className='flex items-center space-x-3 text-primaryColor-500'>
                <div className='flex gap-5'>
                  <button
                    className='flex space-x-1 p-1'
                    onClick={() => _like(post.id)}
                  >
                    <SVG
                      className='m-auto'
                      height='1.2rem'
                      src='/svgs/thumbs-up.svg'
                    />
                    <span className='text-base mx-0.5 my-auto'>
                      {post.likes}
                    </span>
                  </button>
                  <button
                    className='flex space-x-1 p-1'
                    onClick={() => _dislike(post.id)}
                  >
                    <SVG
                      className='m-auto'
                      height='1.2rem'
                      src='/svgs/thumbs-down.svg'
                    />
                    <span className='text-base mx-0.5 my-auto'>
                      {post.dislikes}
                    </span>
                  </button>

                  <button className='flex space-x-1 p-1'>
                    <SVG
                      onClick={() => setOpen(true)}
                      className='m-auto'
                      height='1.2rem'
                      src='/svgs/comment.svg'
                    />
                    <span className='text-base mx-0.5 my-auto'>
                      {post?._count?.comments}
                    </span>
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
        <Modal open={open} setOpen={setOpen}>
          <form onSubmit={_comment}>
            <div>
              <label
                htmlFor='comment'
                className='block text-sm font-medium text-gray-700'
              >
                Add your comment
              </label>
              <div className='mt-1'>
                <textarea
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  name='comment'
                  id='comment'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-greenPrimary-700 focus:ring-greenPrimary-700 sm:text-sm'
                />
              </div>
            </div>
            <Button
              loading={isLoading}
              type='submit'
              text={`${isLoading ? 'Creating...' : 'Create'}`}
              styles='mt-4 rounded-lg text-white font-bold text-sm w-36 bg-greenPrimary'
            />
          </form>
        </Modal>
      </section>
      {post.comments &&
        post.comments.length > 1 &&
        Router.pathname === '/home' && (
          <section className='relative flex items-center space-x-4 mt-2 cursor-pointer'>
            <div className=''>
              <Avatar
                alt=''
                style='border border-green-500 w-9 h-9'
                imgSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
            </div>
            <Link href={`post/${post.id}`}>
              <a className='text-bluePrimary'>Show this thread</a>
            </Link>
          </section>
        )}
      {post.comments &&
        post.comments.length === 1 &&
        post.comments.map((comment, key) => (
          <Comments key={key + 1} comment={comment} />
        ))}

      {post.comments &&
        Router.pathname === '/post/[id]' &&
        post.comments.map((comment, key) => (
          <Comments key={key + 1} comment={comment} />
        ))}
    </div>
  );
}
