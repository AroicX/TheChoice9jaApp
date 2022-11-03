import { numberFormatter } from '@/helpers/index';
import { ICONS } from '@/reusable/Icons';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Avatar from '../Avatar';
import Verified from '../Verified';
import { Dialog, Transition } from '@headlessui/react'
import SVG from 'react-inlinesvg';
import { useState, Fragment } from 'react';
import { DISLIKE_DISCOURSE, LIKE_DISCOURSE } from '@/services/discourse';
import { CREATE_COMMENT, GET_COMMENTS_BY_POST } from '@/services/comments';
import Button from '@/reusable/Button';
import Comments from '../Comments';
import { useEffect } from 'react';

export default function SinglePost({ post, user, discussion, dispatch }) {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  
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

  const getComment = (comm) => {
    comments.find((comment) => {
      if (comment.postId === comm.postId) {
        setComments((prev) => [...prev, comm]);
      }
    });
  }

  const _getCommentsByPost = async () => {
    const callback = (response) => {
      const { comments } = response;
      setComments(comments);
    };

    const onError = (error) => {
      console.log(error);
    };

    await GET_COMMENTS_BY_POST(post.id, callback, onError);
  }

  useEffect(() => {
    _getCommentsByPost();
  }, []);

  return (
    <div className='border-b p-4 relative z-[10]'>
      <section className='relative flex space-x-4 mt-2 cursor-pointer'>
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
                      onClick={() => setOpen(true)}
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
        <CommentModal getComment={getComment} postId={post.id} open={open} setOpen={setOpen}/>
      </section>
      {comments && comments.map((comment, key) => <Comments key={key + 1} comment={comment}/>)}
    </div>
  );
}

function CommentModal({open, getComment, setOpen, postId}) {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const _comment = async (event) => {
    event.preventDefault();

    const data = {
      message: comment
    }
    
    setIsLoading(true);
    
    const callback = (response) => {
      setIsLoading(false);
      const { comment } = response;

      setOpen(false);
      
      getComment(comment);
    }

    const onError = (err) => {
      setIsLoading(false);
      console.log(err);
    }

    await CREATE_COMMENT(data, postId, callback, onError);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="z-[999] relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <form onSubmit={_comment}>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                      Add your comment
                    </label>
                    <div className="mt-1">
                      <textarea
                        rows={4}
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        name="comment"
                        id="comment"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-greenPrimary-700 focus:ring-greenPrimary-700 sm:text-sm"
                      />
                    </div>
                  </div>
                  <Button loading={isLoading} type='submit' text={`${isLoading ? 'Creating...' : 'Create'}`} styles="mt-4 rounded-lg text-white font-bold text-sm w-36 bg-greenPrimary"/>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}