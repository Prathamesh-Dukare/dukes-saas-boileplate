/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { getServiceBySlug, services } from '@/lib/utils';
import Logos from '@/components/Logos';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTA from '@/components/UI/CTA';
import MultiFeature1 from '@/components/MultiFeature1';
import Testimonials from '@/components/Testimonials';
import Feature2 from '@/components/Feature2';
import PricingTable from '@/components/PricingTable';
import FAQs from '@/components/FAQs';
import ProsePreview from '@/components/prose-preview';

export const runtime = 'edge';

export async function generateStaticParams() {
  const slugs = services.map((d) => d.slug);
  return slugs;
}

async function getService(slug) {
  return getServiceBySlug(slug);
}

export async function generateMetadata({ params }) {
  const service = await getService(params.slug);

  const title = `SAAS Starter Pro - ${service.title}`;
  return {
    metadataBase: new URL('https://saas-starter-pro.vercel.app'),
    title,
    description: 'Best Nextjs TailwindCSS SAAS Template',
    openGraph: {
      title,
      description: 'Best Nextjs TailwindCSS SAAS Template',
      url: `https://saas-starter-pro.vercel.app/services/${service.slug}`,
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
  const service = await getService(params.slug);
  return (
    <>
      <Nav theme={'dark'} navHeaderClassName='bg-white text-gray-950' />
      <section className='py-4 sm:py-10 lg:py-16'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='grid items-center justify-center gap-6 grid-cols-1 sm:grid-cols-2'>
            <div className='text-left flex flex-col items-start justify-center'>
              <h1 className='text-4xl font-bold text-gray-950 sm:text-6xl lg:text-7xl'>
                {service.title}
              </h1>

              <p className='mt-6 text-base font-semibold text-gray-700 sm:text-xl'>
                {service.description}
              </p>

              <p className='my-4 max-w-prose text-sm text-gray-600 sm:text-base'>
                {service.details}
              </p>

              <div className='mt-10 flex items-center space-x-8'>
                <CTA
                  href='/subscribe'
                  title='subscribe'
                  ctaText='Buy this template'
                />
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <img
                className='w-full max-w-lg rounded-xl'
                src={service.image}
                alt={service.title}
              />
            </div>
          </div>
        </div>
      </section>
      <Logos />

      <ProsePreview content={service.content} />

      <MultiFeature1 />
      <Testimonials />
      <Feature2 />
      <PricingTable />
      <FAQs />

      <Footer />
    </>
  );
}
