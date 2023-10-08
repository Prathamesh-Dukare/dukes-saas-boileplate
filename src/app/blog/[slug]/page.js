/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { getBlogBySlug, articles } from '@/lib/utils';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Blogs from '@/components/Blogs';
import BlogDetails from '@/components/BlogDetails';

export const runtime = 'edge';

export async function generateStaticParams() {
  const slugs = articles.map((d) => d.slug);
  return slugs;
}

async function getBlog(slug) {
  return getBlogBySlug(slug);
}

export async function generateMetadata({ params }) {
  const article = await getBlog(params.slug);

  const title = `SAAS Starter Pro - ${article.title}`;

  return {
    metadataBase: new URL('https://saas-starter.nanodevpro.com'),
    title,
    description: article.description,
    openGraph: {
      title,
      description: article.description,
      url: `https://saas-starter.nanodevpro.com/blog/${article.slug}`,
      siteName: 'saas-starter.nanodevpro.com',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://saas-starter.nanodevpro.com/og.jpg',
          width: 2400,
          height: 1260,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: article.description,
      creator: '@sandeep_indie',
      images: ['https://saas-starter.nanodevpro.com/og.jpg'],
    },
  };
}

export default async function BuildServicePage({ params }) {
  const article = await getBlog(params.slug);
  return (
    <>
      <Nav theme={'dark'} navHeaderClassName='bg-white text-gray-950' />
      <BlogDetails article={article} />
      <Blogs />
      <Footer />
    </>
  );
}
