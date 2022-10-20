import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { LOGIN_ACCOUNT } from '@/services/authentication';
import { ResponseHandler } from '@/helpers/index';
import { useGlobalStore } from '@/hooks/useGlobalStore';
import Input from '@/reusable/Input';
import AuthProvider from '@/components/AuthProvider';
import Button from '@/reusable/Button';
import { setCookie } from '@/services/cookies';

export default function Login() {
  const { setToken } = useGlobalStore();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const callback = (response) => {
      if (response.status === 200) {
        setCookie(response.token);
        window.localStorage.setItem('user-data', JSON.stringify(response));
        setLoading(false);
        setToken(response.token);
        let _redirect = window.localStorage.getItem('be-authorized');
        _redirect ? router.push(_redirect) : router.push('/home');
      } else {
        ResponseHandler(response);
        setLoading(false);
      }
    };

    const onError = (error) => {
      ResponseHandler(error)
      setLoading(false);
    };

    await LOGIN_ACCOUNT(data, callback, onError);

    return false;
  }

  return (
    <AuthProvider>
      <h3 className='text-green-neutral-primary text-large-bold mt-8'>Choice9ja</h3>
      <form onSubmit={handleSubmit} className='space-y-8'>
        <h3 className='mt-8 text-heading-2-bold'>Login to your Account</h3>
        <Input
          id='email'
          type='email'
          label='Email Address'
          value={data.email}
          dispatch={(value) => setData({...data, email: value})}
          placeholder='Enter Email Address'
          required
        />

        <div className='relative shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green'>
          <label
            htmlFor='confirm-password'
            className='absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-sm font-medium text-gray-900'
          >
            Password
          </label>
          <Input
            type={`${passwordVisibility ? 'text' : 'password'}`}
            label='Password'
            id='password'
            value={data.password}
            dispatch={(value) => setData({...data, password: value})}
            placeholder='Salisu'
          />
          <button
            type='button'
            onClick={() => setPasswordVisibility(!passwordVisibility)}
            className='absolute inset-y-0 right-0 top-4 flex py-1.5 pr-1.5'
          >
            {passwordVisibility ? (
              <Image 
                width={30} 
                height={30} 
                src='/eye-off.svg' 
                alt='Eye' 
              />
            ) : (
              <Image 
                width={30} 
                height={30} 
                src='/eye.svg' 
                alt='Eye' 
              />
            )}
          </button>
        </div>

        <div className='flex mt-2'>
          <Link href='/forget_password' passHref>
            <a className='text-green-600 font-semibold'>Forget password</a>
          </Link>
        </div>
        <div className='flex mt-12 flex-col h-full'>
          <Button
            type='submit'
            text="Continue" 
            styles='inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 bg-green-600 text-button-bold text-white shadow-sm' 
            loading={loading}
          />
          <p className='text-center'>
            <span className='text-green-neutral-500 text-body-2-semibold'>Don&apos;t have an account?{' '}</span>
            <Link passHref href='/signup'>
              <a className='text-green-neutral-primary text-body-2-semibold'>Sign Up</a>
            </Link>
          </p>
        </div>
      </form>
    </AuthProvider>
  );
}
