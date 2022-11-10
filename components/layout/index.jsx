import Navigation from '@/components/layout/navigation';
import React, { useState } from 'react';
import Head from './head';

export default function Layout({ children, style = 'px-3' }) {
  const [menu, setMenu] = useState(false);
  return (
    <div className='pb-20 overflow-scroll'>
      <Head />

      <div className={`${style}`}>{children}</div>
      <Navigation dispatch={(value) => setMenu(value)} />
    </div>
  );
}
