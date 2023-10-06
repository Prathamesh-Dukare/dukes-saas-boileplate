/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { getServiceBySlug, services } from '@/lib/utils';
import Logos from '@/components/Logos';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MultiFeature1 from '@/components/MultiFeature1';
import Testimonials from '@/components/Testimonials';
import Feature2 from '@/components/Feature2';
import PricingTable from '@/components/PricingTable';
import FAQs from '@/components/FAQs';
import ProsePreview from '@/components/prose-preview';
import Hero2 from '@/components/Hero2';

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
    metadataBase: new URL('https://saas-starter.nanodevpro.com'),
    title,
    description: 'Best Nextjs TailwindCSS SAAS Template',
    openGraph: {
      title,
      description: 'Best Nextjs TailwindCSS SAAS Template',
      url: `https://saas-starter.nanodevpro.com/services/${service.slug}`,
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
      description: 'Best Nextjs TailwindCSS SAAS Template',
      creator: '@sandeep_indie',
      images: ['https://saas-starter.nanodevpro.com/og.jpg'],
    },
  };
}

export default async function BuildServicePage({ params }) {
  const service = await getService(params.slug);
  return (
    <>
      <Nav theme={'dark'} navHeaderClassName='bg-white text-gray-950' />

      <Hero2 service={service} />
      <Logos />

      <ProsePreview content={service.content} className='bg-gray-50' />

      <MultiFeature1 />
      <Testimonials />
      <Feature2 />
      <PricingTable />
      <FAQs />

      <Footer />
    </>
  );
}
