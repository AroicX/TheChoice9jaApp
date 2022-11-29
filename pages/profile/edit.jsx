import BackButton from '@/components/BackButton';
import Input from '@/reusable/Input';
import Button from '@/reusable/Button';
import { useState } from 'react';

export default function EditProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({ firstName, lastName });
  };

  return (
    <>
      <header className='border-b p-2'>
        <BackButton title='Edit Profile' />
      </header>

      <section className='space-y-6 px-2 pt-12'>
        <form onSubmit={onSubmit}>
          <div className='space-y-3 mb-10'>
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
