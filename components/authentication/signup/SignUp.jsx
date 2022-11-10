import Input from '@/reusable/Input';
import AuthProvider from '@/components/AuthProvider';
import Button from '@/reusable/Button';
import { useRouter } from 'next/router';
import { XMarkIcon } from '@heroicons/react/24/outline';
export default function SignUp({ next, setUser, user }) {
  const router = useRouter();

  const { firstName, lastName, username } = user;

  const disabled = firstName === '' || lastName === '' || username === '';

  return (
    <AuthProvider>
      <form className='space-y-8'>
        <XMarkIcon
          onClick={() => router.push('/')}
          className='w-6 h-6 cursor-pointer'
        />
        <h3 className='mt-8 text-black font-inter--sm font-22'>
          Create your account
        </h3>
        <Input
          id='name'
          label='First Name'
          type='text'
          value={user.firstName}
          dispatch={(value) => setUser({ ...user, firstName: value })}
          placeholder='Enter Firstname'
          required
        />

        <Input
          id='name'
          type='text'
          label='Surname'
          value={user.lastName}
          dispatch={(value) => setUser({ ...user, lastName: value })}
          placeholder='Enter Surname'
          required
        />

        <Input
          id='email'
          label='Email Address'
          type='email'
          value={user.email}
          dispatch={(value) => setUser({ ...user, email: value })}
          placeholder='Enter Email Address'
          required
        />
      </form>
      <div className='flex justify-end mt-2'>
        <p className='text-greenPrimary font-11 font-inter--md'>
          Use Phone Number Instead
        </p>
      </div>
      <div className='flex md:mt-12 mt-10'>
        <Button
          click={() => next()}
          text='continue'
          styles={`${
            disabled ? 'bg-darkColor-300' : 'bg-greenPrimary'
          } inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 font-inter--bold font-14 text-white shadow-sm`}
        />
      </div>
    </AuthProvider>
  );
}
