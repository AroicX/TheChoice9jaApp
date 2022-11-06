import { randomColor } from '../helpers';

export default function AvatarName({ user, style = 'h-12 w-12' }) {
  const newName = user?.firstName.charAt(0) + user?.lastName.charAt(0);

  return (
    <span
      className={`inline-flex ${style} items-center justify-center rounded-full bg-[${randomColor()}] ring-2 ring-offset-2 ring-[${randomColor()}]`}
    >
      <span className='text-lg font-medium leading-none text-coolblack-primary'>
        {newName}
      </span>
    </span>
  );
}
