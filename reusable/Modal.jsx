import React, { useEffect } from 'react';
import SVG from 'react-inlinesvg';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Modal({ title, toggle = false, dispatch, children }) {
  useEffect(() => {
    if (toggle) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [toggle]);

  const dispatchHandler = (e) => {
    e.stopPropagation();
    dispatch(false);
  };
  return (
    <div className={`modal ${toggle ? 'modal-active' : null}`}>
      <div className='modal-content'>
        <div className='modal-content-header border-b pb-2'>
          <div className='flex-1'>
            <span className='text-black text-lg text-center'>{title}</span>
          </div>
          <XMarkIcon
            className='bg-red-50 w-5 h-5 rounded-full cursor-pointer mr-2'
            onClick={(e) => dispatchHandler(e)}
          />
        </div>
        <div className='py-5'>{children}</div>
      </div>
    </div>
  );
}
