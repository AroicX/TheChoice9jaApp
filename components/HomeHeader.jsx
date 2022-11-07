import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomeHeader() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('user-data');

      if (accessToken) {
        setIsLoggedIn(true);
      }
    }
  }, []);
  return (
    <>
      <div className='flex items-center justify-between bg-gradient-to-r from-green-600 to-green-300 py-3 px-2'>
        <div className='w-[10rem]'>
          <h3 className='text-white font-bold text-lg'>Choice9ja</h3>
        </div>
        <div className='flex-1 space-x-3 flex'>
          {!setIsLoggedIn && (
            <>
              <Link passHref href='/login'>
                <a className='flex-1 border-2 py-2 text-center border-green-white text-white rounded-full font-bold'>
                  Log In
                </a>
              </Link>
              <Link href='/signup'>
                <a className='flex-1 bg-white py-2 text-center text-green-600 rounded-full font-bold'>
                  Signup
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
