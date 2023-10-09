'use client';

import { ArrowBigDown, BusIcon } from 'lucide-react';
import FeatureSection from './UI/FeatureSection';

const features = [
  {
    name: 'User Friendly',
    description:
      'Experience a seamless and intuitive interface that makes navigation a breeze.',
    icon: ArrowBigDown,
  },
  {
    name: 'Rapid Onboarding',
    description:
      'Get up and running in no time. No credit card needed, and you can cancel anytime.',
    icon: BusIcon,
  },
];

export default function Feature2() {
  return (
    <FeatureSection
      reverseOrder={true}
      features={features}
      preheader={'Your Unique Selling Proposition Here'}
      heading={'Why Choose Our Solution Over Others'}
      description={
        <>
          Additional details here. Highlight what sets your product or service
          apart from the competition.
        </>
      }
      videoSrcURL={'/working.mp4'}
      bg={'bg-white'}
      preheaderTextColor={'text-gray-600'}
      ctaText='Start my free trial'
      poster='/product.png'
    />
  );
}
