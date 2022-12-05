import Avatar from '@/components/Avatar';
import Layout from '@/components/layout';
import { useSelector } from 'react-redux';
import Notification from '@/components/Notification';
import { useEffect } from 'react';

export default function Notifications() {
  const { notifications } = useSelector((state) => state.notifications);

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  return (
    <div className='my-3'>
      <header className='mb-3 flex items-center px-3 py-2 border-b pb-3'>
        <Avatar style='w-9 h-9' imgSrc='/parties/admin.png' />
        <div className='w-full text-center'>
          <h2 className='text-greenPrimary font-14 font-inter--sm'>
            Choice9ja
          </h2>
        </div>
      </header>
      <h3 className='uppercase mb-2 px-2 text-black-light font-10 font-inter--md'>
        recents
      </h3>

      <Layout>
        <ul>
          {notifications &&
            notifications.map((notification, idx) => {
              const {
                isRead,
                message,
                id,
                createdAt,
                userId,
                data: { senderId, commentId, postId, discussionId },
              } = notification;
              return (
                <Notification
                  key={id}
                  data={{
                    isRead,
                    message,
                    id,
                    userId,
                    createdAt,
                    senderId,
                    commentId,
                    postId,
                    discussionId,
                  }}
                />
              );
            })}
        </ul>
      </Layout>
    </div>
  );
}
