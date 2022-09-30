import Link from 'next/link';
import SVG from 'react-inlinesvg';

export default function Navigation() {
  const items = [
    {
      title: 'Home',
      link: '/home',
      icon: 'home',
    },
    {
      title: 'Discourse',
      link: '/discourse',
      icon: 'comment',
    },
    {
      title: 'Voting',
      link: '/voting ',
      icon: 'vote',
    },
    {
      title: 'Results',
      link: '/results ',
      icon: 'results',
    },
    {
      title: 'Notifications',
      link: '/notifications ',
      icon: 'notifications',
    },
  ];
  return (
    <div className='fixed bottom-0 bg-white w-full flex justify-between p-3 shadow-md border border-t-2'>
      {items.map((item) => (
        <Link href={item.link} className='cursor-pointer ' key={item.title}>
          <div className='text-green-neutral-500 flex flex-col justify-center items-center'>
            <SVG className='w-9' src={`/${item.icon}.svg`} height='20px' />
            <p className='text-sm'>{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
