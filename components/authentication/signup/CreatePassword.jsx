import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BackButton from '@/components/BackButton';
import AuthProvider from '@/components/AuthProvider';

export default function CreatePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(
    false
  );
  const [isValid, setIsValid] = useState(true);

  const PASSWORD_VALID = password !== '' && password.length >= 6;
  const CONFIRM_PASSWORD_VALID =
    confirmPassword !== '' && confirmPassword === password;

  // useEffect(() => {
  //   if (PASSWORD_VALID && CONFIRM_PASSWORD_VALID) {
  //     setIsValid(true);
  //   } else {
  //     setIsValid(false);
  //   }
  // }, [password, confirmPassword])

  const router = useRouter();
  return (
    <AuthProvider>
      <div className='flex items-center space-x-4 xl:mt-0 mt-4'>
        <BackButton title='Step 3 of 5' />
      </div>
      <form className='space-y-8'>
        <h3 className='mt-8 font-bold text-2xl'>Create Password</h3>
        <p>Ahmed, create a password you can remember to secure your account.</p>
        <div className='relative rounded-md border border-gray-300 p-3 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green'>
          <label
            htmlFor='password'
            className='absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-sm font-medium text-gray-900'
          >
            Create Password
          </label>
          <input
            type={`${passwordVisibility ? 'text' : 'password'}`}
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            placeholder='Salisu'
          />
          <button
            type='button'
            onClick={() => setPasswordVisibility(!passwordVisibility)}
            className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'
          >
            {passwordVisibility ? (
              <img className='h-8 w-8' src='/eye-off.svg' alt='Eye' />
            ) : (
              <img className='h-8 w-8' src='/eye.svg' alt='Eye' />
            )}
          </button>
        </div>

        <div className='relative rounded-md border border-gray-300 p-3 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green'>
          <label
            htmlFor='confirm-password'
            className='absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-sm font-medium text-gray-900'
          >
            Re-enter password
          </label>
          <input
            type={`${confirmPasswordVisibility ? 'text' : 'password'}`}
            name='confirm-password'
            id='confirm-password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            placeholder=''
          />
          <button
            onClick={() =>
              setConfirmPasswordVisibility(!confirmPasswordVisibility)
            }
            type='button'
            className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'
          >
            {confirmPasswordVisibility ? (
              <img className='h-8 w-8' src='/eye-off.svg' alt='Eye' />
            ) : (
              <img className='h-8 w-8' src='/eye.svg' alt='Eye' />
            )}
          </button>
        </div>
      </form>
      <div className='flex items-end h-full'>
        <Link passHref href='/signup/create_username'>
          <button
            className={`${
              isValid ? 'bg-green-600' : 'cursor-pointer bg-coolblack-200'
            } inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 text-md font-bold text-white shadow-sm `}
          >
            next
          </button>
        </Link>
      </div>
    </AuthProvider>
  );
}
