import Input from '@/reusable/Input';
import AuthProvider from '@/components/AuthProvider';
import Button from '@/reusable/Button';
import { useState, useEffect } from 'react';
import {
  SEND_ONE_PASSWORD,
  VALIDATE_ONE_PASSWORD,
} from '@/services/authentication';

export default function VerifyAccount({ back, phoneNo }) {
  const [otp, setOpt] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [loading, setLoading] = useState(false);

  const sendOneTimePassword = async () => {
    const data = {
      phoneNo,
    };
    const callback = (response) => {
      const res = response.data[0];

      setReferenceId(res.reference_id);
    };

    const onError = (error) => {
      console.log(error);
    };

    await SEND_ONE_PASSWORD(data, callback, onError);
  };

  const validateOTP = async (event) => {
    event.preventDefault();

    setLoading(true);

    const data = {
      phoneNo,
      code: '534127',
      reference_id: referenceId,
    };

    const callback = (response) => {
      console.log(response);
    };

    const onError = (error) => {
      console.log(error);
    };

    await VALIDATE_ONE_PASSWORD(data, callback, onError);
  };

  useEffect(() => {
    sendOneTimePassword();
  }, []);

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
      <form onSubmit={validateOTP} className='space-y-8'>
        <h3 className='mt-8 text-heading-2-semibold'>Create a Password</h3>
        <Input
          id='ot'
          label='Enter OTP'
          placeholder='Enter OTP send to your phone Number'
          value={otp}
          dispatch={(value) => setOpt(value)}
          required
        />

        <div className='flex md:mt-12 mt-10'>
          <Button
            text='Verify Phone Number'
            type='submit'
            styles='inline-flex justify-center items-center lg:mb-10 mb-4 uppercase w-full rounded-lg border border-gray-300  px-6 py-4 bg-green-600 text-base font-medium text-white shadow-sm'
          />
        </div>
      </form>
    </AuthProvider>
  );
}
