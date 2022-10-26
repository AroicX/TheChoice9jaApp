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
    <div className='relative'>
      <input
        type={type}
        id={id}
        value={value}
        placeholder=' '
        onChange={(event) => dispatch(event.target.value)}
        {...rest}
        className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-1 border-greenPrimary appearance-none focus:outline-none focus:ring-0 focus:border-greenPrimary peer'
      />
      <label
        htmlFor={label}
        className='absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-greenPrimary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
      >
        {label}
      </label>

      {/* {type === 'password' && (
        <SVG
          src='/svgs/show-password.svg'
          className={`mr-3 absolute right-1 cursor-pointer`}
          onClick={() => passwordStateOnChangeHandler()}
          style={{
            marginRight: '0.75rem',
            position: 'absolute',
            right: '0.25rem',
            cursor: 'pointer',
            marginTop: '1.5rem',
          }}
        />
      )} */}

      {error && (
        <span className='text-red-500 text-sm bg-red-200 p-4 rounded my-1'>
          {error}
        </span>
      )}
    </div>
  );
}
