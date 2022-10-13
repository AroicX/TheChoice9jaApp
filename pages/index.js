import { LOGIN_ACCOUNT } from '@/services/authentication';
import Button from '@/reusable/Button';
import { useRouter } from 'next/router';
import AuthProvider from '@/components/AuthProvider';

export default function Home() {
  const router = useRouter();

  const login = async () => {
    const data = {};

    const callback = (respose) => {
      console.log(respose);
    };
    const onError = (respose) => {
      console.log(respose);
    };

    await LOGIN_ACCOUNT(data, callback, onError);
  };
  return (
    <AuthProvider>
      <div className='px-4'>
        <div className='my-10'>
          <h1 className='text-green-neutral-primary text-large-bold'>
            Choice9ja
          </h1>
          <p className='mt-8 text-body-2-regular text-green-neutral-700'>
            A place for nigerians to learn about politicians & parties, raise
            issues and pseudo-vote candidates.
          </p>
        </div>
        <form className='space-y-3'>
          <h2 className='text-coolblack-900 text-headline-semibold'>
            Join Choice9ja today.
          </h2>
          <div className='space-y-4'>
            <Button
              type='button'
              styles='bg-green-neutral-primary text-white rounded-full text-body-2-bold'
              text='Sign up with Phone Number'
            />
            <Button
              type='button'
              click={() => router.push('/signup')}
              styles='bg-green-neutral-primary text-white rounded-full text-body-2-bold'
              text='Sign up with Email'
            />
          </div>
          <div className='space-y-3'>
            <p className='text-green-neutral-500 text-paragraph-2-light'>
              By signing up, you agree to our
            </p>
            <p className='text-green-neutral-primary text-paragraph-2-light'>
              Terms of Service and Privacy Policy
            </p>
          </div>
        </form>
        <div className='mt-12 space-y-1'>
          <h3 className='text-green-neutral-900 text-headline-semibold'>
            Already have an account?
          </h3>
          <Button
            type='button'
            click={() => router.push('/login')}
            text='Log In'
            styles='rounded-full text-body-2-bold border-2 border-green-700 text-green-700 focus:bg-green-800 focus:text-white'
          />
        </div>
      </div>
    </AuthProvider>
  );
}
