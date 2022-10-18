export default function AvatarName({name, style = "h-12 w-12"}) {
  return (
    <span className={`inline-flex ${style} items-center justify-center rounded-full bg-blue-500 ring-2 ring-offset-2 ring-blue-500`}>
      <span className="text-lg font-medium leading-none text-coolblack-primary">{name}</span>
    </span>
  )
}