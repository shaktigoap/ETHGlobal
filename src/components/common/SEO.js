import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Onboarding thousands of developers into the Ethereum ecosystem.',
  title: 'ETHGlobal',
  url: 'http://ethglobal.co',
  author: 'Devfolio',
  keywords: ['ethereum', 'global'],
  twitter: {
    id: '@ethglobal',
    img: 'https://ethglobal.co/og.png',
  },
  facebook: {
    id: '',
    img: 'https://ethglobal.co/og.png',
  },
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebook.id} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.facebook.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitter.id} />
      <meta name="twitter:site" content={SEO_DATA.twitter.id} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
