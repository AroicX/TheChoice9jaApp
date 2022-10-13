import HomeHeader from '@/components/HomeHeader';
import ElectionCandidates from '@/components/ElectionCandidates';
import Poll from '@/components/Poll';
import Layout from '@/components/layout';

const people = [
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
];

export default function Home() {
  return (
    <>
    <HomeHeader />
      <div className='lg:px-0 px-10 space-y-3 my-5'>
        <h3 className='text-coolblack-primary text-heading-1-bold'>
          Know, share &amp; vote your choice.
        </h3>
        <p className='text-green-neutral-800 text-headline-regular'>
          Learn about your nigerian politician and discuss politics, raise
          issues and vote your choice.
        </p>
      </div>
      <ul className='lg:px-0 px-4 border-b space-y-4 py-3 overflow-y-scroll'>
        <ElectionCandidates people={people} />
      </ul>
      <div className='px-3 pt-6 border-b pb-4'>
        <h3 className='text-headline-semibold'>See what is happening</h3>
      </div>
    <Layout active='home'>
      <Poll />
    </Layout>
    </>
  );
}
