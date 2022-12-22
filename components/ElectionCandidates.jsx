import SVG from 'react-inlinesvg';
import { useRouter } from 'next/router';

export default function ElectionCandidates({ candidate }) {
  const router = useRouter();

  const { status, election } = candidate;

  return (
    <li
      className={`rounded-md ${
        status === 'Ongoing' ? 'bg-green-600' : 'bg-greenPrimary-100'
      } py-4 xl:px-10 xl:text-left shadow-lg`}
    >
      <header className='flex justify-between items-start pl-6'>
        <div
          className={`${
            status === 'Ongoing'
              ? 'bg-black/5 text-white'
              : 'bg-none text-darkColor-800'
          } w-16 h-16 rounded-full flex justify-center items-center`}
        >
          <SVG
            src='/users.svg'
            fill={`${
              status === 'Ongoing' ? 'text-white' : 'text-greenPrimary-100'
            }`}
          />
        </div>
        <div
          className={`${
            status === 'Ongoing'
              ? 'bg-white text-redColor-400'
              : 'bg-[#F9EA9B] text-black'
          } pl-8 pr-3 py-0.5 rounded-tl-full rounded-bl-full`}
        >
          <span>{status} Election</span>
        </div>
      </header>
      <div
        className={`px-6 ${
          status === 'Ongoing' ? 'text-white' : 'text-darkColor-800'
        }`}
      >
        <div className='space-y-2 mt-8'>
          <h3 className='text-2xl font-semibold'>{election} Election</h3>
        </div>
        <div className='flex justify-between mt-2 mb-2'>
          <p className='font-normal font-14'>
            Join 20,000+ others to vote your desired candidate.
          </p>
          <button onClick={() => router.push('/voting')}>
            <SVG
              src='/svgs/arrow-right.svg'
              className={`${
                status === 'Ongoing' ? 'text-white' : 'text-darkColor-800'
              } w-6 h-6`}
            />
          </button>
        </div>
      </div>
    </li>
  );
}
