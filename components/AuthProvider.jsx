/* eslint-disable react-hooks/rules-of-hooks */
import useAuth from '@/hooks/useAuth';
import React from 'react';

const AuthProvider = ({ children }) => {
  return <div className='flex flex-col h-screen'>{children}</div>;
};

export default useAuth(AuthProvider);
