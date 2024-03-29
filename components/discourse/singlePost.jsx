import dynamic from 'next/dynamic';

import Button from '@/reusable/Button';
const Comments = dynamic(() => import('../Comments'));
const Modal = dynamic(() => import('@/reusable/Modal'));
const ModalComments = dynamic(() => import('../Modal'));
import AvatarName from '../NameAvatar';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Verified from '../Verified';
import { useRouter } from 'next/router';
import SVG from 'react-inlinesvg';
import { useState, memo } from 'react';
import { DISLIKE_DISCOURSE, LIKE_DISCOURSE } from '@/services/discourse';
import { CREATE_COMMENT } from '@/services/comments';

import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import Avatar from '../Avatar';

function SinglePost({ post, user, discussion, dispatch }) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});
  const [modal, setModal] = useState(false);

  const Router = useRouter();

  const thumbsUpSVGColor = liked && 'text-blueSecondary';
  const thumbsDownSVGColor = disliked && 'text-redColor-500';

  const _like = async (post_id) => {
    const callback = (response) => {
      const { data } = response;

      setLikes(data);

      setLiked(true);
    };

    const onError = (error) => {
      const { data } = error;

      setLiked(false);
    };

    await LIKE_DISCOURSE(post_id, callback, onError);
  };

  const _dislike = async (post_id) => {
    const callback = (response) => {
      const { data } = response;

      setDislikes(data);

      setDisliked(true);
    };

    const onError = (error) => {
      const { data } = error;

      toast.error(data.message);

      setDisliked(false);
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

      dispatch(comment);

      toast.success('Your comment is added');

      setOpen(false);
    };

    const onError = (error) => {
      const { data } = error;

      console.log(error);

      //toast.error(data.message);

      setIsLoading(false);
    };

    await CREATE_COMMENT(data, post.id, callback, onError);
  };

  return (
    <>
      <div className='border-b p-4 relative z-[10]'>
        <Toaster position='top-center' reverseOrder={false} />
        <section className='relative flex space-x-3 mt-2 cursor-pointer '>
          {user?.username === 'TheChoice9ja' ? (
            <Avatar
              alt='Administrator profile'
              imgSrc='/parties/admin.png'
              style='w-10 h-10'
            />
          ) : (
            <AvatarName style='h-8 w-8' user={user} />
          )}

          <div className='flex-1'>
            <header className='flex items-center justify-between'>
              <div
                onClick={() => Router.push(`/profile/${user?.id}`)}
                className='flex items-center space-x-2'
              >
                <h3 className='text-dark font-12 font-inter--sm'>
                  {user?.username}
                </h3>
                {user?.verifiedPhoneNo && <Verified className='my-auto' />}
              </div>
              <EllipsisHorizontalIcon
                onClick={() => setModal(true)}
                className='h-7 w-7 text-darkColor-300'
              />
            </header>
            <div className='mt-2 space-y-2'>
              <header>
                {discussion && (
                  <h3
                    onClick={() => Router.push(`/discourse/${discussion.id}`)}
                    className='uppercase font-10 font-inter--md flex items-center space-x-2 text-primaryColor-700'
                  >
                    <span>discourse</span>
                    <span className='text-2xl -mt-2'>.</span>
                    <span>{discussion.topic}</span>
                  </h3>
                )}
                <p
                  onClick={() => Router.push(`/post/${post.id}`)}
                  className='text-black-primary font-14 my-2'
                >
                  {post.message}
                </p>
              </header>
              <footer className='flex items-center space-x-4'>
                <div className='flex items-center space-x-3 text-primaryColor-500'>
                  <div className='flex gap-5'>
                    <button
                      className={`flex items-center space-x-1 p-1 ${thumbsUpSVGColor}`}
                      onClick={() => _like(post.id)}
                    >
                      {liked ? (
                        <SVG className='m-auto' src='/svgs/thumbs-up.svg' />
                      ) : (
                        <SVG className='m-auto' src='/svgs/thumb_up.svg' />
                      )}

                      <span className='text-base mx-0.5 my-auto'>
                        {`${liked ? likes.likes : post.likes}`}
                      </span>
                    </button>
                    <button
                      className={`flex items-center space-x-1 p-1 ${thumbsDownSVGColor}`}
                      onClick={() => _dislike(post.id)}
                    >
                      {disliked ? (
                        <SVG
                          className='m-auto mt-1.5'
                          src='/svgs/thumbs-down.svg'
                        />
                      ) : (
                        <SVG
                          className='m-auto mt-1.5'
                          src='/svgs/thumb_down.svg'
                        />
                      )}
                      <span className='text-base mx-0.5 my-auto'>
                        {`${disliked ? dislikes.dislikes : post.dislikes}`}
                      </span>
                    </button>

                    <button className='flex space-x-1 p-1'>
                      <SVG
                        onClick={() => setOpen(true)}
                        width={20}
                        className='m-auto text-primaryColor-600'
                        src='/svgs/comment.svg'
                      />
                      <span className='text-base mx-0.5 my-auto'>
                        {post?._count?.comments}
                      </span>
                    </button>
                    {/* <button className='flex p-1'>
                      <SVG
                        className='m-auto'
                        height='1.2rem'
                        src='/svgs/reply.svg'
                      />
                      <span className='text-base mx-0.5 my-auto'></span>
                    </button> */}
                  </div>

                  {/* {item.count !== 0 && numberFormatter(item.count)} */}
                </div>
              </footer>
            </div>
          </div>
          {/* This modal appears when you click on comment icon */}
          <ModalComments open={open} setOpen={setOpen}>
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
          </ModalComments>
        </section>
        {post.comments &&
          post.comments.length > 1 &&
          Router.pathname === '/home' && (
            <section className='relative flex items-center space-x-4 mt-2 cursor-pointer'>
              <div className=''>
                <AvatarName style='h-8 w-8' user={user} />
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
      {/* This modal appears when you click on EllipsisHorizontalIcon: the 3 dots */}
      {/* <Modal title='Discourse' toggle={modal} dispatch={() => setModal(false)}>
        <div className='divide-y'>
          <div className='flex items-center py-2 px-3 space-x-2 cursor-pointer'>
            <SVG className='w-5 h-5' src='/svgs/edit.svg' />
            <span className='text-coolblack-primary font-normal'>
              Edit Discourse Post
            </span>
          </div>
          <div className='flex items-center py-2 px-3 space-x-2 cursor-pointer'>
            <SVG className='w-5 h-5' src='/svgs/edit.svg' />
            <span className='text-coolblack-primary font-normal'>
              Delete Discourse
            </span>
          </div>
          <div className='flex items-center py-2 px-3 space-x-2'>
            <SVG className='w-5 h-5' src='/svgs/report.svg' />
            <span className='text-red-400 font-normal'>Report</span>
          </div>
        </div>
      </Modal> */}
    </>
  );
}

export default memo(SinglePost);
