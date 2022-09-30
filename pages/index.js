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
          <h1 className='text-green-700 text-4xl font-bold'>Choice9ja</h1>
          <p className='text-lg mt-8 text-coolblack-500'>
            A place for nigerians to learn about politicians & parties, raise
            issues and pseudo-vote candidates.
          </p>
        </div>
        <form className='space-y-3'>
          <h2 className='font-bold text-lg text-coolblack-900'>
            Join Choice9ja today.
          </h2>
          <div className='space-y-4'>
            <Button
              type='button'
              styles='bg-green-600 text-white rounded-full font-bold text-md'
              text='Sign up with Phone Number'
            />
            <Button
              type='button'
              click={() => router.push('/signup')}
              styles='bg-green-600 text-white rounded-full font-bold text-md'
              text='Sign up with Email'
            />
          </div>
          <div>
            <p className='text-coolblack-500'>
              By signing up, you agree to our
            </p>
            <p className='text-green-500'>
              Terms of Service and Privacy Policy
            </p>
          </div>
        </form>
        <div className='mt-12 space-y-1'>
          <h3 className='text-xl font-bold'>Already have an account?</h3>
          <Button
            type='button'
            click={() => router.push('/login')}
            text='Log In'
            styles='rounded-full border border-green-700 text-green-600 focus:bg-green-600 focus:text-white'
          />
        </div>
      </div>
    </AuthProvider>
  );
}
