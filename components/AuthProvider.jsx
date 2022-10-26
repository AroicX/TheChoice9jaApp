import useAuth from '@/hooks/useAuth';
import React from 'react';

const AuthProvider = ({ children }) => {
  return <div className='flex flex-col h-screen p-4 '>{children}</div>;
};

export default AuthProvider;
