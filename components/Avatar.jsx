export default function Avatar({style, imgSrc, alt}) {
  return (
      <img
        className={`${style} inline-block rounded-full`}
        src={imgSrc}
        alt={alt}
      />
  )
}