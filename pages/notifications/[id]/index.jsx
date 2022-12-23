import { getNotificationById } from 'actions';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import AuthProvider from '@/components/AuthProvider';
import BackButton from '@/components/BackButton';
import Notification from '@/components/Notification';

export default function SingleNotification() {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { notification, loading } = useSelector((state) => state.notification);

  useEffect(() => {
    if (query.id) {
      dispatch(getNotificationById(query.id));
    }
  }, []);

  return (
    <AuthProvider>
      <header className='mb-2 border-b py-2 px-2'>
        <BackButton title='Notification' />
      </header>
      <main className='px-2'>
        {loading ? (
          <p className='text-center'>Loading...</p>
        ) : (
          <>
            <Notification
              data={{
                isRead: notification.isRead,
                message: notification.message,
                id: notification.id,
                userId: notification.userId,
                createdAt: notification.createdAt,
                postId: notification?.data?.postId,
                senderId: notification?.data?.senderId,
                commentId: notification?.data?.commentId,
                discussionsId: notification?.data?.discussionsId,
              }}
            />
          </>
        )}
      </main>
    </AuthProvider>
  );
}
