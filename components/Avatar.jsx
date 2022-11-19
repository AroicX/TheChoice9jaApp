export default function Avatar({ style, imgSrc, alt }) {
  return (
    <img
      className={`${style} object-cover inline-block rounded-full`}
      src={imgSrc}
      alt={alt}
    />
  );
}
