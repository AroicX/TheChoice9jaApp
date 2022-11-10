import { memo } from 'react';
import SVG from 'react-inlinesvg';

function Verified() {
  return <SVG src='/verified.svg' className='w-5' />;
}

export default memo(Verified);
