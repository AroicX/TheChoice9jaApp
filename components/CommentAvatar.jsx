import { contrastColor, randomColor } from '../helpers';

export default function CommentAvatar({ user, style = 'h-12 w-12' }) {
  const color = randomColor();
  const newName = user?.firstName.charAt(0) + user?.lastName.charAt(0);

  return (
    <span
      className={`c_comments--avatar bg-white inline-flex ${style} items-center justify-center rounded-full`}
      style={{ backgroundColor: color, borderColor: color }}
    >
      <span
        className='text-base font-medium leading-none text-coolblack-primary'
        style={{ color: contrastColor(color) }}
      >
        {newName}
      </span>
    </span>
  );
}
