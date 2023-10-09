'use client';

import { ArrowDownIcon, SettingsIcon } from 'lucide-react';
import FeatureSection from './UI/FeatureSection';

const features = [
  {
    name: 'Easy to Use',
    description:
      'Best in class user experience. Docswrite.com is easy to use and intuitive.',
    icon: SettingsIcon,
  },
  {
    name: 'Quick Setup',
    description:
      'Get started in minutes. No credit card required. Cancel anytime.',
    icon: ArrowDownIcon,
  },
];

export default function Feature1() {
  return (
    <FeatureSection
      features={features}
      preheader={'Add value proposition here'}
      heading={
        'Explain how your product or service is different from the competition.'
      }
      description={
        <>
          Some more text here. Explain how your product or service is different
          from the competition.
        </>
      }
      videoSrcURL={'/landing.mp4'}
      bg={'bg-gray-50'}
      preheaderTextColor={'text-green-600'}
      ctaText='Start my free trial'
      poster='/people-work.jpg'
    />
  );
}
