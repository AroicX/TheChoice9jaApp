import {
  UserGroupIcon,
  GlobeAltIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline';
import Verified from './Verified';

const FORUM_INFO = [
  {
    id: 0,
    content: 'Only member can post, comment, like or share',
    icon: UserGroupIcon,
  },
  { id: 1, content: 'All forums are publicly visible', icon: GlobeAltIcon },
  { id: 2, content: 'Created by', icon: ShieldExclamationIcon },
];

export default function About() {
  return (
    <div className='px-2 border-b'>
      <div className='forum__info'>
        <h2 className='text-black-primary font-inter--sm font-16'>
          Forum Info
        </h2>
        <p className='my-6 font-12 font-inter--regular'>
          This forum is used to discourse insecurity in nigeria, way forward,
          safety tips and major challenges concerning security in nigeria.
        </p>
        <ul className='space-y-2 mb-10'>
          {FORUM_INFO.map((info) => (
            <li key={info.id} className='flex space-x-3'>
              <info.icon className='w-6 h-6 text-green-neutral-300' />
              <span className='text-black-primary font-12 font-inter--regular flex space-x-3'>
                {info.content.includes('Created') ? (
                  <>
                    <span>{info.content}</span>
                    <span className='text-coolblack-900 font-bold'>
                      Choice9ja
                    </span>
                    <Verified />
                  </>
                ) : (
                  <>{info.content}</>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='rules__conducts'>
        <h2 className='text-black-primary font-16 font-inter--sm'>
          Rules & Conducts
        </h2>
        <p className='my-6 font-12'>
          These are rules set of by Choice9ja enforce by Choice9ja are in
          addition to Choice Rules.
        </p>
        <p></p>
      </div>
    </div>
  );
}
