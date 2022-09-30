import React from 'react';
import SVG from 'react-inlinesvg';

export default function SearchBar({ handleSubmit, dispatch = () => {} }) {
  return (
    <form
      className='relative flex justify-between items-center p-3 rounded mb-4'
      onSubmit={handleSubmit}
    >
      <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pl-3">
        <SVG src='/search.svg' className="h-7 w-7" />
      </div>
      <input
        type={'text'}
        className='block w-full rounded-lg border-gray-300 pl-10 p-4 sm:text-sm'
        placeholder='Search for Candidate'
        onChange={(event) => dispatch(event.target.value)}
      />
    </form>
  );
}
