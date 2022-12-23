import Avatar from '@/components/Avatar';
import Layout from '@/components/layout';
import AuthProvider from '@/components/AuthProvider';
import { useSelector } from 'react-redux';
import Notification from '@/components/Notification';

export default function Notifications() {
  const { notifications } = useSelector((state) => state.notifications);

  return (
    <AuthProvider>
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
                  data: { senderId, commentId, postId, discussionsId },
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
                      discussionsId,
                    }}
                  />
                );
              })}
          </ul>
        </Layout>
      </div>
    </AuthProvider>
  );
}
