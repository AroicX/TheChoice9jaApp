import Input from '@/reusable/Input';
import AuthProvider from '@/components/AuthProvider';
import Button from '@/reusable/Button';
import { useRouter } from 'next/router';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { RESET_PASSWORD } from '@/services/authentication';
import { useState } from 'react';
import Link from '../Link';
import toast from 'react-hot-toast';
export default function SignUp({ back }) {
  const Router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirm_password: '',
  });

  const disabled =
    form.email === '' || form.password === '' || form.confirm_password === '';

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const callback = (response) => {
      setIsLoading(false);

      toast.success(response.message);

      Router.push('/login');
    };

    const onError = (error) => {
      setIsLoading(false);

      toast.error(error.data.message);
    };

    RESET_PASSWORD(form, callback, onError);
  };

  return (
    <AuthProvider>
      <form onSubmit={onSubmitHandler} className='space-y-8'>
        <XMarkIcon onClick={back} className='w-6 h-6 cursor-pointer' />
        <h3 className='mt-8 text-black font-inter--sm font-22'>
          Reset Password
        </h3>
        <Input
          id='email'
          label='Email'
          value={form.email}
          dispatch={(value) => setForm({ ...form, email: value })}
          placeholder='Enter Firstname'
          required
        />

        <Input
          id='password'
          label='Create Password'
          type='password'
          value={form.password}
          dispatch={(value) => setForm({ ...form, password: value })}
          placeholder='Enter Password'
          required
        />

        <Input
          id='retype-password'
          label='Retype Password'
          type='password'
          value={form.confirm_password}
          dispatch={(value) => setForm({ ...form, confirm_password: value })}
          placeholder='Retype Password'
          required
        />

        <div className='flex md:mt-12 mt-10'>
          <Button
            type='submit'
            loading={isLoading}
            disabled={disabled}
            text='continue'
            styles={`${
              disabled
                ? 'bg-darkColor-300 cursor-not-allowed'
                : 'bg-greenPrimary'
            } inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 font-inter--bold font-14 text-white shadow-sm`}
          />
        </div>
      </form>
      <div className='flex justify-center items-center'>
        <span className='w-full p-2 text-sm center justify-center text-center mt-20 font-medium'>
          Return Back to
          <Link className='mx-2 underline text-app-color' to='/login'>
            Login
          </Link>
        </span>
      </div>
    </AuthProvider>
  );
}
