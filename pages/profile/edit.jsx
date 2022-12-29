import BackButton from '@/components/BackButton';
import Input from '@/reusable/Input';
import Button from '@/reusable/Button';
import { UPDATE_PROFILE } from '@/services/profile';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

export default function EditProfile() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useSelector((state) => state.userDetails);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const DATA = {
      email,
      firstName,
      lastName,
    };

    setIsLoading(true);

    const callback = (response) => {
      setIsLoading(false);

      toast.success(response.message);
    };

    const onError = (error) => {
      setIsLoading(false);

      //toast.error(error.data.message);
    };

    UPDATE_PROFILE(DATA, callback, onError);
  };

  useEffect(() => {
    setEmail(user.email);
  }, []);

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <header className='border-b p-2'>
        <BackButton title='Edit Profile' />
      </header>

      <section className='space-y-6 px-2 pt-12'>
        <form onSubmit={onSubmitHandler}>
          <div className='space-y-3 mb-10'>
            <Input
              type='text'
              label='Email'
              value={email}
              dispatch={(value) => setEmail(value)}
              placeholder='First Name'
            />

            <Input
              type='text'
              label='First Name'
              value={firstName}
              dispatch={(value) => setFirstName(value)}
              placeholder='First Name'
            />

            <Input
              type='text'
              label='Last Name'
              value={lastName}
              dispatch={(value) => setLastName(value)}
              placeholder='Last Name'
            />
          </div>
          <Button
            type='submit'
            text='Save'
            loading={isLoading}
            disabled={isLoading}
            styles='bg-greenPrimary rounded-md text-white font-bold'
          />
        </form>
      </section>
    </>
  );
}
