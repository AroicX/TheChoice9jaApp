import React, { useState } from 'react';
import SVG from 'react-inlinesvg';

export default function Input({
  id,
  label,
  type = 'text',
  placeholder,
  styles,
  inputStyle = '',
  dispatch = () => {},
  value,
  rest,
  error,
  price,
}) {
  const [passwordState, setPasswordState] = useState('password');
  const passwordStateOnChangeHandler = () => {
    if (passwordState === 'password') {
      setPasswordState('text');
    } else {
      setPasswordState('password');
    }
  };
  return (
    <div className={`relative border border-coolblack-500 px-3 py-2 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 ${inputStyle}`}>
      <label className='absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900' htmlFor={id}>{label}</label>

      <input
        className={`block w-full border-0 py-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm ${styles} ${
          type === 'password' ? 'password' : ''
        }`}
        id={id}
        value={value}
        type={type === 'password' ? passwordState : type}
        placeholder={placeholder}
        onChange={(event) => dispatch(event.target.value)}
        // required
        {...rest}
      />
      {type === 'password' && (
        <SVG
          src='/svg/show-password.svg'
          // className={`mt-6 mr-3 absolute right-1 cursor-pointer`}
          onClick={() => passwordStateOnChangeHandler()}
          style={{
            marginRight: '0.75rem',
            position: 'absolute',
            right: '0.25rem',
            cursor: 'pointer',
            marginTop: '1.5rem',
          }}
        />
      )}

      {error && (
        <span className='text-red-500 text-sm bg-red-200 p-4 rounded my-1'>
          {error}
        </span>
      )}
    </div>
  );
}
