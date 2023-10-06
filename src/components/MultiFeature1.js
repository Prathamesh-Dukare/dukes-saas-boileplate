'use client';

import { BoxIcon, BuildingIcon, PenIcon, CableCarIcon } from 'lucide-react';
import GlowText from './UI/GlowText';
import MultiFeatureSection from './UI/MultiFeatureSection';

import { services } from '@/lib/utils';

const icons = [BoxIcon, BuildingIcon, PenIcon, CableCarIcon];

const ctas = services.map((service, index) => ({
  href: `/services/${service.slug}`,
  text: service.title,
  icon: icons[service.id - 1],
}));

export default function MultiFeature1() {
  return (
    <MultiFeatureSection
      ctas={ctas}
      description={
        'World class development and built for performance, SAAS Starter will deliver to the highest standard, each and every time.'
      }
      heading={
        <>
          <GlowText theme='dark'>Game changing</GlowText> solutions for your
          business
        </>
      }
      preheader='Creative Freedom'
      reverseOrder={false}
      bg='bg-white'
      preheaderTextColor='text-gray-950'
    />
  );
}
