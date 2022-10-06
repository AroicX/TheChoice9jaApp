export default function Avatar({style, imgSrc, alt}) {
  return (
      <img
        className={`${style} inline-block h-12 w-12 rounded-full`}
        src={imgSrc}
        alt={alt}
      />
  )
}