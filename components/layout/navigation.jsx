import Link from 'next/link';
import SVG from 'react-inlinesvg';
import { useRouter } from 'next/router';

export default function Navigation() {
  const { pathname } = useRouter();

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

  return (
    <div className='fixed z-[999] bottom-0 bg-white w-full flex justify-between p-2 px-4 shadow-md border border-t-2 mt-auto'>
      {items.map((item) => {
        const isActive = pathname.includes(item.link);
        return (
          <Link
            prefetch={false}
            href={item.link}
            className='cursor-pointer '
            key={item.title}
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
        );
      })}
    </div>
  );
}
