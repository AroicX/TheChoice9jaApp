import Avatar from './Avatar';
import Button from '@/reusable/Button';
import SVG from 'react-inlinesvg';
import Modal from '@/reusable/Modal';
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';

import {
  EllipsisVerticalIcon,
  TrashIcon,
  BellSlashIcon,
} from '@heroicons/react/24/outline';
import { deleteNotificationById, updateNotificationById } from 'actions/index';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export default function Notification(data) {
  const [modal, setModal] = useState(false);
  const [notificationId, setNotifcationId] = useState(0);
  const { isDeleting } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const {
    data: { isRead, commentId, message, id, postId, createdAt },
  } = data;
  const Router = useRouter();
  return (
    <>
      <li
        className={`${
          isRead ? 'bg-white' : 'bg-greenPrimary-50'
        } flex space-x-3 p-2`}
      >
        <div className='relative'>
          <Avatar
            alt=''
            style='w-12 h-12'
            imgSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          />
          <span className='absolute top-0 left-8 flex justify-center items-center bg-greenPrimary rounded-full w-6 h-6'>
            {commentId && (
              <SVG
                className='m-auto text-white'
                width={15}
                fill='white'
                src='/svgs/comment.svg'
              />
            )}
          </span>
        </div>
        <div
          onClick={() => dispatch(updateNotificationById(id))}
          className='space-y-4 pl-2 flex-1'
        >
          <p
            onClick={() => Router.push(`/notifications/${id}`)}
            className='font-12 font-inter--md cursor-pointer'
          >
            {message}
          </p>
          <Button
            click={() => {
              Router.push(`/post/${postId}`);
            }}
            text='View Post'
            styles='text-greenPrimary border-2 border-greenPrimary w-48 rounded-full font-12 font-inter--md'
          />
        </div>
        <div className='text-darkColor-300'>
          <EllipsisVerticalIcon
            onClick={() => {
              setModal(true);
              setNotifcationId(id);
            }}
            className='h-5 w-5 mb-3 cursor-pointer ml-auto'
          />
          <span className='text-coolblack-400 font-12'>
            <TimeAgo datetime={createdAt} locale='be' />
          </span>
        </div>
      </li>
      <Modal
        title='Notifications'
        toggle={modal}
        dispatch={() => setModal(false)}
      >
        <div className='divide-y'>
          <div
            onClick={() => dispatch(deleteNotificationById(notificationId))}
            className='flex items-center py-2 px-3 space-x-2 cursor-pointer'
          >
            {isDeleting ? (
              <p>...</p>
            ) : (
              <TrashIcon className='w-5 h-5 text-green-neutral-500' />
            )}
            <span className='text-coolblack-primary font-normal'>
              Delete Notification
            </span>
          </div>
          <div className='flex items-center py-2 px-3 space-x-2 cursor-pointer'>
            <BellSlashIcon className='w-5 h-5 text-green-neutral-500' />
            <span className='text-coolblack-primary font-normal'>
              Turn Off Notification
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
}
