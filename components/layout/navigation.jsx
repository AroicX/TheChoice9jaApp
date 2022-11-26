import Link from 'next/link';
import SVG from 'react-inlinesvg';
import { getNotificationByUser } from 'actions/index';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [unReadNotifications, setUnReadNotifications] = useState(null);
  const { pathname } = useRouter();

  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notifications);

  const items = [
    {
      title: 'Home',
      link: '/home',
      icon: 'home',
    },
    {
      title: 'Discourse',
      link: '/discourse',
      icon: 'discourse',
    },
    {
      title: 'Voting',
      link: '/voting',
      icon: 'vote',
    },
    {
      title: 'Notifications',
      link: '/notifications',
      icon: 'notifications',
    },
    {
      title: 'Profile',
      link: '/profile',
      icon: 'profile',
    },
  ];

  useEffect(() => {
    dispatch(getNotificationByUser());
  }, []);

  useEffect(() => {
    if (!notifications) return;

    const unReadNotifications = notifications.filter(
      (notification) => !notification.isRead
    );

    setUnReadNotifications(unReadNotifications);
  }, [notifications]);

  return (
    <div className='fixed z-[999] bottom-0 bg-white w-full flex justify-between p-2 px-4 shadow-md border border-t-2 mt-auto'>
      {items.map((item) => {
        const isActive = pathname.includes(item.link);
        return (
          <div key={item.title} className='relativre'>
            {unReadNotifications && unReadNotifications.length > 0 && (
              <div className='absolute right-[6.5rem] text-sm bottom-10 z-[999] flex justify-center items-center text-white bg-redColor rounded-full w-4 h-4'>
                <span>{unReadNotifications.length}</span>
              </div>
            )}
            <Link
              prefetch={false}
              href={item.link}
              className='cursor-pointer relative'
            >
              <div
                className={`${
                  isActive ? 'text-green-600' : 'text-primaryColor-500'
                } flex flex-col justify-center items-center cursor-pointer`}
              >
                <SVG
                  className='w-9'
                  src={`/svgs/${item.icon}.svg`}
                  height='20px'
                />
                <p className='text-sm'>{item.title}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
