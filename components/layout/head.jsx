import NextHead from 'next/head';

const siteDescription = 'TheChoice 9ja';

const Head = ({ title }) => {
  const newTitle = title ? `${title} | ` : '';
  return (
    <NextHead>
      <title>{newTitle} - TheChoice 9ja</title>
      <meta name='keywords' content='politics' />
      <meta name='description' content={siteDescription} />
      <meta property='og:title' content='TheChoice 9ja' />
      <meta property='og:type' content='website' />
      {/* <meta property="og:url" content={process.env.BASE_URL} /> */}
      <meta property='og:description' content={siteDescription} />
      {/* <meta property="og:image" content="https://printivo.s3.amazonaws.com/img/image-seo-share-large.png" /> */}
      /favicon/logo.ico
      <link rel='shortcut icon' href='/svg/logo.svg' type='image/x-icon' />
      <meta property='twitter:card' content='summary_large_image' />
    </NextHead>
  );
};

export default Head;
