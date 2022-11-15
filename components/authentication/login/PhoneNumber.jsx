import Input from '@/reusable/Input';
import AuthProvider from '@/components/AuthProvider';
import Button from '@/reusable/Button';

export default function PhoneNumber({ back, next, user, setUser }) {
  return (
    <AuthProvider>
      <div className='flex items-center space-x-4 xl:mt-0 mt-4'>
        <img
          onClick={back}
          className='w-4 h-4 cursor-pointer'
          alt='Close icon'
          src='/close.svg'
        />
      </div>
      <form className='space-y-8'>
        <h3 className='mt-8 text-heading-2-semibold'>Create a Password</h3>
        <Input
          id='phone-number'
          label='Phone Number'
          placeholder='Enter your phone Number'
          value={user.phoneNo}
          dispatch={(value) => setUser({ ...user, phoneNo: value })}
          required
        />

        <div className='flex md:mt-12 mt-10'>
          <Button
            text='Continue'
            type='submit'
            styles='bg-green-600 inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 text-base font-medium text-white shadow-sm'
          />
        </div>
      </form>
    </AuthProvider>
  );
}
