import Navigation from '@/components/layout/navigation';
import React, { useState } from 'react';
import Head from './head';

export default function Layout({ children }) {
  const [menu, setMenu] = useState(false);
  return (
    <div className='pb-20 overflow-scroll'>
      <Head />

      <div className='p-2 '>
        {children}
      </div>
      <Navigation dispatch={(value) => setMenu(value)} />
    </div>
  );
}
