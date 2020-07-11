import PrismicLib from 'prismic-javascript';

let frontClient;

export const Client = (req = null) => {
  if (!req && frontClient) return frontClient; // prevent generate new instance for client side since we don't need the refreshed request object.

  const options = { ...(req ? { req } : {}), ...(process.env.PRISMIC_ACCESS_TOKEN ? { accessToken: process.env.PRISMIC_ACCESS_TOKEN } : {}) };
  return PrismicLib.client(process.env.PRISMIC_API_END_POINT, options);
};
export const Prismic = PrismicLib;

export const linkResolver = (doc) => {
  if (doc.type === 'homepage') return '/';
  if (doc.type === 'products') return '/products';
  if (doc.type === 'product') return `/products/${doc.uid}`;
  if (doc.type === 'blog_home') return '/blog';
  if (doc.type === 'blog_post') return `/blog/${doc.uid}`;
  return '/';
};
