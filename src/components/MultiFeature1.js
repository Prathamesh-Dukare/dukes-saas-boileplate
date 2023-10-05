'use client';

import { BoxIcon, BuildingIcon, PenIcon } from 'lucide-react';
import GlowText from './UI/GlowText';
import MultiFeatureSection from './UI/MultiFeatureSection';

export default function MultiFeature1() {
  return (
    <MultiFeatureSection
      ctas={[
        {
          href: '/login',
          text: 'Brand Management',
          icon: PenIcon,
        },
        {
          href: '/login',
          text: 'Marketing SEO',
          icon: BoxIcon,
        },
        {
          href: '/login',
          text: 'Social Media',
          icon: BuildingIcon,
        },
      ]}
      description={
        'World class development and built for performance, Slate will deliver to the highest standard, each and every time.'
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
