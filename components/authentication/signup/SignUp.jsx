import Input from '@/reusable/Input';
import AuthProvider from '@/components/AuthProvider';
import Button from '@/reusable/Button';

export default function SignUp({ next, setUser, user }) {
  return (
    <AuthProvider>
      <form className='space-y-8'>
        <h3 className='mt-8 text-heading-2-semibold'>Create Account</h3>
        <Input
          id='name'
          label='First Name'
          value={user.firstName}
          dispatch={(value) => setUser({...user, firstName: value})}
          placeholder='Enter Firstname'
          required
        />

        <Input
          id='name'
          label='Last Name'
          value={user.lastName}
          dispatch={(value) => setUser({...user, lastName: value})}
          placeholder='Enter Surname'
          required
        />

        <Input
          id='username'
          label='User Name'
          type='text'
          value={user.username}
          dispatch={(value) => setUser({...user, username: value})}
          placeholder='Enter Username'
          required
        />
      </form>
      <div className='flex justify-end mt-2'>
        <p className='text-green-600 text-caption-3-medium'>Use Phone Number Instead</p>
      </div>
      <div className='flex md:mt-12 mt-10'>
        <Button 
          click={() => next()}
          text="continue" 
          styles='inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 bg-green-600 text-base font-medium text-white shadow-sm' 
        />
      </div>
    </AuthProvider>
  );
}
