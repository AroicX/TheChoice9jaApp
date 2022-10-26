import { useState } from 'react';
import { useRouter } from 'next/router';
import { LOGIN_ACCOUNT } from '@/services/authentication';
import { ResponseHandler } from '@/helpers/index';
import { useGlobalStore } from '@/hooks/useGlobalStore';
import { setCookie } from '@/services/cookies';
import { XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Input from '@/reusable/Input';
import AuthProvider from '@/components/AuthProvider';
import Button from '@/reusable/Button';


export default function Login() {
  const { setToken } = useGlobalStore();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [passwordVisibility, setPasswordVisibility] = useState(true);
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
      <XMarkIcon onClick={() => router.push("/")} className='w-6 h-6 cursor-pointer'/>
      <h3 className='text-green-primary font-inter--sm font-22 mt-8'>Choice9ja</h3>
      <form onSubmit={handleSubmit} className=''>
        <h3 className='mt-8 mb-6 font-inter--sm font-22'>Login to your Account</h3>
        <Input
          id='email'
          type='email'
          label='Email Address'
          value={data.email}
          dispatch={(value) => setData({...data, email: value})}
          placeholder='Enter Email Address'
          required
        />

        <div className='relative my-8 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green'>
          <Input
            type={`${passwordVisibility ? 'password' : 'text'}`}
            label='Password'
            id='password'
            value={data.password}
            dispatch={(value) => setData({...data, password: value})}
          />
          <button
            type='button'
            onClick={() => setPasswordVisibility(!passwordVisibility)}
            className='absolute inset-y-0 right-0 top-1 flex py-1.5 pr-1.5'
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

        <div class="relative hidden">
          <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-primary peer" placeholder=" " />
          <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Floating outlined</label>
        </div>

        <div className='flex'>
          <Link href='/forget_password' passHref>
            <a className='text-primaryColor-500 font-14 font-inter--regular'>Forget password</a>
          </Link>
        </div>

        <div className='flex mt-12 flex-col h-full'>
          <Button
            type='submit'
            text="Continue" 
            styles='inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 bg-greenPrimary font-13 font-inter--bold text-white shadow-sm' 
            loading={loading}
          />
          <p className='text-center font-14 font-inter--regular'>
            <span className='text-primaryColor-500'>Don&apos;t have an account?{' '}</span>
            <Link passHref href='/signup'>
              <a className='text-greenPrimary'>Sign Up</a>
            </Link>
          </p>
        </div>
      </form>
    </AuthProvider>
  );
}
