import BackButton from '@/components/BackButton';
import Input from '@/reusable/Input';
import Button from '@/reusable/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  inputValidatorErrorState,
  inputValidatorChecker,
} from '@/helpers/index';
import { useGlobalStore } from '@/hooks/useGlobalStore';
import { CHANGE_PASSWORD } from '@/services/profile';

export default function EditProfile() {
  const [form, setForm] = useState({
    oldPassword: '',
    oldPasswordError: '',
    newPassword: '',
    newPasswordError: '',
    confirmPassword: '',
    confirmPasswordError: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useGlobalStore();
  const Router = useRouter();

  const onSubmitHandler = () => {
    if (
      inputValidatorChecker(form.oldPassword) &&
      inputValidatorChecker(form.newPassword) &&
      inputValidatorChecker(form.confirmPassword) &&
      form.newPassword === form.confirmPassword
    ) {
      setIsLoading(true);

      const data = {
        old_password: form.oldPassword,
        password: form.newPassword,
        c_password: form.confirmPassword,
      };

      const callback = (response) => {
        if (response) {
          setIsLoading(false);
          Router.push('/profile');
        }
      };

      const onError = (error) => {
        setIsLoading(false);
        console.log(error);
      };

      CHANGE_PASSWORD(data, callback, onError);
    } else {
      inputValidatorErrorState(
        form.oldPassword,
        setForm,
        'oldPasswordError',
        'Old Password is Required'
      );
      inputValidatorErrorState(
        form.newPassword,
        setForm,
        'newPasswordError',
        'New Password is Required'
      );
      inputValidatorErrorState(
        form.confirmPassword,
        setForm,
        'confirmPasswordError',
        'Confirm Password is Required'
      );
      if (form.newPassword !== form.confirmPassword) {
        setForm((prev) => {
          return {
            ...prev,
            confirmPasswordError:
              'Confirm Password must match with the New Password Field',
          };
        });
      }
    }
  };

  const onChangeHandler = (data, fieldState, fieldErrorState) => {
    setForm((prev) => {
      return { ...prev, [fieldState]: data, [fieldErrorState]: '' };
    });
  };

  return (
    <>
      <header className='border-b p-2'>
        <BackButton title='Edit Profile' />
      </header>

      <section className='space-y-6 px-2 pt-12'>
        <form>
          <div className='space-y-3'>
            <Input
              type='password'
              label='Current Password'
              placeholder='Current Password'
              value={form.oldPassword}
              dispatch={(data) =>
                onChangeHandler(data, 'oldPassword', 'oldPasswordError')
              }
              error={form.oldPasswordError}
            />
            <Input
              type='password'
              label={'New Password'}
              placeholder='New Password'
              value={form.newPassword}
              dispatch={(data) =>
                onChangeHandler(data, 'newPassword', 'newPasswordError')
              }
              error={form.newPasswordError}
            />
            <Input
              type='password'
              label={'Retype New Password'}
              placeholder={'Retype Password'}
              value={form.confirmPassword}
              dispatch={(data) =>
                onChangeHandler(data, 'confirmPassword', 'confirmPasswordError')
              }
              error={form.confirmPasswordError}
            />

            <Button
              text='Save Changes'
              click={onSubmitHandler}
              loading={isLoading}
              styles='bg-green-primary font-inter--sm mt-4 text-white rounded-md'
            />
          </div>
        </form>
      </section>
    </>
  );
}
