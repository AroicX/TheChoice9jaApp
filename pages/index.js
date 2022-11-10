import Button from '@/reusable/Button';
import { useRouter } from 'next/router';
import AuthProvider from '@/components/AuthProvider';
import Image from 'next/image';
import useGuest from '@/hooks/useGuest';
import SVG from 'react-inlinesvg';

function Home() {
  const router = useRouter();
  return (
    <AuthProvider>
      <div className='flex justify-end my-8 px-6'>
        <SVG className='w-6 h-6' src='/close.svg' />
      </div>
      <div className='px-4 pb-4'>
        <Image width={45} height={50} src='/icon.png' alt='' />
        <div className='mb-10 mt-6 space-y-4'>
          <h1 className='text-greenPrimary font-inter--sm font-32'>
            Choice9ja
          </h1>

          <p className='text-primaryColor-700 font-14 font-inter-regular'>
            Welcome to the Future of Democracy!
            <span className='block'>
              Your Voice Counts. Your Opinion Matters.
            </span>
          </p>
        </div>
        <form className='space-y-3'>
          <h2 className='text-primaryColor-900 font-inter--sm font-17'>
            Join Choice9ja today.
          </h2>
          <div className='space-y-4'>
            <Button
              type='button'
              styles='bg-greenPrimary font-14 font-inter--sm text-white rounded-full'
              text='Sign up with Phone Number'
            />
            <Button
              type='button'
              click={() => router.push('/signup')}
              styles='bg-greenPrimary font-14 font-inter--sm text-white rounded-full'
              text='Sign up with Email'
            />
          </div>
          <div className='space-y-1 font-inter--light font-11'>
            <p className='text-primaryColor-500 '>
              By signing up, you agree to our
            </p>
            <p>
              <span className='text-greenPrimary'>Terms of Service</span>{' '}
              <span className='text-green-neutral-500'>and</span>{' '}
              <span className='text-greenPrimary'>Privacy Policy</span>
            </p>
          </div>
        </form>
        <div className='mt-8 space-y-3'>
          <h3 className='text-primaryColor-900 font-inter--sm font-17'>
            Already have an account?
          </h3>
          <Button
            type='button'
            click={() => router.push('/login')}
            text='Log In'
            styles='rounded-full font-13 font-inter--sm border-2 border-green-700 text-green-700 focus:bg-green-800 focus:text-white'
          />
        </div>
      </div>
    </AuthProvider>
  );
}

export default Home;
