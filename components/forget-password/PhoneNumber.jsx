import Input from '@/reusable/Input';
import AuthProvider from '@/components/AuthProvider';
import Button from '@/reusable/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FORGET_PASSWORD } from '@/services/authentication';
import toast, { Toaster } from 'react-hot-toast';

export default function PhoneNumber({ user, setUser, next }) {
  const [loading, setLoading] = useState(false);
  const Router = useRouter();

  const onSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    const data = {
      phoneNo: user.phoneNo,
    };

    const callback = (response) => {
      toast.success(response.message);

      setLoading(false);

      next();
    };

    const onError = (error) => {
      const { data } = error;

      toast.error(data.message);

      setLoading(false);
    };

    FORGET_PASSWORD(data, callback, onError);
  };

  return (
    <AuthProvider>
      <Toaster position='top-center' reverseOrder={false} />
      <div
        onClick={() => Router.back()}
        className='flex items-center space-x-4 xl:mt-0 mt-4'
      >
        <img
          className='w-4 h-4 cursor-pointer'
          alt='Close icon'
          src='/close.svg'
        />
      </div>
      <form onSubmit={onSubmit} className='space-y-8'>
        <div>
          <h3 className='my-8 text-black text-2xl font-bold'>
            Find your account
          </h3>
          <p className='text-darkColor-600'>
            Please enter the email, username or phone number on your account.
          </p>
        </div>
        <Input
          id='phone'
          label='Phone Number'
          placeholder='Enter your phone Number'
          value={user.phoneNo}
          dispatch={(value) => setUser({ ...user, phoneNo: value })}
          required
        />

        <div className='flex md:mt-12 mt-10'>
          <Button
            text='Continue'
            type='button'
            click={next}
            loading={loading}
            styles='inline-flex justify-center items-center bg-greenPrimary lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 text-base font-medium text-white shadow-sm'
          />
        </div>
      </form>
    </AuthProvider>
  );
}
