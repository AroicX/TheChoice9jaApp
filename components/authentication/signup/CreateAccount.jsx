import Input from '@/reusable/Input';
import AuthProvider from '@/components/AuthProvider';
import Button from '@/reusable/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useGlobalStore } from '@/hooks/useGlobalStore';
import { QUICK_REGISTER } from '@/services/authentication';
import { setCookie } from '@/services/cookies';

export default function CreateAccount({ back, user, setUser }) {
  const { setToken } = useGlobalStore();
  const [isLoading, setIsLoading] =useState(false);
  const Router = useRouter();

  const onSubmitHandler = () => {
    setIsLoading(true);

    const callback = (response) => {
      console.log(response);
      setCookie(response.token);
      window.localStorage.setItem('user-data', JSON.stringify(response));
      setIsLoading(false);
      setToken(response.token);
      let _redirect = window.localStorage.getItem('be-authorized');
      _redirect ? Router.push(_redirect) : Router.push('/home');
    };

    const onError = (err) => {
      setIsLoading(false);
      console.log(err);
    };

    QUICK_REGISTER(user, callback, onError);
  }

  return (
    <AuthProvider>
      <div className='flex items-center space-x-4 xl:mt-0 mt-4'>
        <img
          onClick={() => back()}
          className='w-4 h-4 cursor-pointer'
          alt='Close icon'
          src='/close.svg'
        />
      </div>
      <form className='space-y-8'>
        <h3 className='mt-8 text-heading-2-semibold'>Create a Password</h3>
        <Input
          id='phone'
          label='Phone Number'
          placeholder='Enter Phone Number'
          value={user.phoneNo}
          dispatch={(value) => setUser({ ...user, phoneNo: value })}
          required
        />

        <Input
          id='email'
          label='email'
          placeholder='Enter Email Addres'
          value={user.email}
          dispatch={(value) => setUser({ ...user, email: value })}
          required
        />

        <Input
          id='password'
          label='password'
          type='password'
          placeholder='Enter Password'
          value={user.password}
          dispatch={(value) => setUser({ ...user, password: value })}
          required
        />
      </form>
      <div className='flex justify-end mt-2'>
        <p className='text-green-600 text-caption-3-medium'>Use Phone Number Instead</p>
      </div>
      <div className='flex md:mt-12 mt-10'>
        <Button
          text="Create Account"
          click={onSubmitHandler} 
          loading={isLoading}
          styles='inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 bg-green-600 text-base font-medium text-white shadow-sm' />
      </div>
    </AuthProvider>
  );
}
