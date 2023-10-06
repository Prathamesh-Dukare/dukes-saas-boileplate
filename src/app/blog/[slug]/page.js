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
      <Nav theme={'dark'} navHeaderClassName='bg-gray-50 text-gray-950' />
      <section className='sm:pt-10 lg:pt-16'>
        <div className='px-4 mx-auto max-w-4xl sm:px-6 lg:px-8'>
          <div className='grid items-center text-center justify-center gap-6 sm:gap-10 grid-cols-1'>
            <h1 className='text-3xl font-bold text-gray-950 sm:text-5xl lg:text-6xl'>
              {article.title}
            </h1>
            <div className='flex items-center justify-center'>
              <Image
                width={1200}
                height={800}
                className='w-full max-w-3xl rounded-xl'
                src={`https://picsum.photos/seed/${article.slug}/1200/800`}
                alt={article.title}
              />
            </div>

            <div className='flex justify-center items-center mt-4'>
              <div className='w-12 h-12 rounded-full object-cover mr-4'>
                <Image
                  src={`https://i.pravatar.cc/64?u=${article.author}`}
                  alt={article.author}
                  width={64}
                  height={64}
                  className='rounded-full object-cover'
                />
              </div>

              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  <h2 className='text-md sm:text-lg font-bold text-gray-800'>
                    {article.author}
                  </h2>
                  <p className='text-gray-500 text-xs sm:text-sm'>
                    {article.date}
                  </p>
                </div>
              </div>
            </div>
            <p className='text-base font-semibold text-gray-700 sm:text-xl max-w-prose'>
              {article.description}
            </p>
          </div>
        </div>
      </section>

      <ProsePreview content={article.content} />
      <Blogs />

      <Footer />
    </>
  );
}
