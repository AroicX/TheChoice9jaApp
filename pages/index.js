import Button from '@/reusable/Button';
import { useRouter } from 'next/router';
import AuthProvider from '@/components/AuthProvider';

export default function Home() {
  const router = useRouter();
  return (
    <AuthProvider>
      <div className='px-4'>
        <div className='my-10 space-y-4'>
          <h1 className='text-green-primary font-inter--sm font-32'>
            Choice9ja
          </h1>
          <p className='text-green-neutral-700 font-14 font-inter-regular'>
            A place for nigerians to learn about politicians & parties, raise
            issues and pseudo-vote candidates.
          </p>
        </div>
        <form className='space-y-3'>
          <h2 className='text-green-neutral-900 font-inter--sm font-17'>
            Join Choice9ja today.
          </h2>
          <div className='space-y-4'>
            <Button
              type='button'
              styles='bg-green-primary font-14 font-inter--sm text-white rounded-full'
              text='Sign up with Phone Number'
            />
            <Button
              type='button'
              click={() => router.push('/signup')}
              styles='bg-green-primary font-14 font-inter--sm text-white rounded-full'
              text='Sign up with Email'
            />
          </div>
          <div className='space-y-1 font-inter--light font-11'>
            <p className='text-green-neutral-500 '>
              By signing up, you agree to our
            </p>
            <p>
              <span className='text-green-primary'>Terms of Service</span>{' '}
              <span className='text-green-neutral-500'>and</span>{' '}
              <span className='text-green-primary'>Privacy Policy</span>
            </p>
          </div>
        </form>
        <div className='mt-12 space-y-3'>
          <h3 className='text-green-neutral-900 font-inter--sm font-17'>
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
