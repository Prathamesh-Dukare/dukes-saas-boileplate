/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { getBlogBySlug, articles } from '@/lib/utils';
import Logos from '@/components/Logos';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTA from '@/components/UI/CTA';

import ProsePreview from '@/components/prose-preview';
import Image from 'next/image';
import Blogs from '@/components/Blogs';
import MultiFeature1 from '@/components/MultiFeature1';
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
    metadataBase: new URL('https://saas-starter-pro.vercel.app'),
    title,
    description: 'Best Nextjs TailwindCSS SAAS Template',
    openGraph: {
      title,
      description: 'Best Nextjs TailwindCSS SAAS Template',
      url: `https://saas-starter-pro.vercel.app/blog/${article.slug}`,
      siteName: 'saas-starter-pro.vercel.app',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://saas-starter-pro.vercel.app/og.jpg',
          width: 2400,
          height: 1260,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: 'Best Nextjs TailwindCSS SAAS Template',
      creator: '@sandeep_indie',
      images: ['https://saas-starter-pro.vercel.app/og.jpg'],
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
