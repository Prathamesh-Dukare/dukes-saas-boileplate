'use client';

import VideoPlayer from './VideoPlayer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CTA from './CTA';

export default function FeatureSection({
  preheader,
  heading,
  description,
  videoSrcURL,
  features,
  bg = 'bg-gray-100',
  preheaderTextColor = 'text-gray-600',
  reverseOrder = false,
  poster,
  ctaLink,
  ctaText = 'Start my free trial',
}) {
  return (
    <div className={`relative py-12 sm:py-16 ${bg}`}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-full lg:grid-cols-2'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, translateX: 0 },
              hidden: { opacity: 0, translateX: reverseOrder ? 100 : -100 },
            }}
            className={`lg:pr-8 lg:pt-4 ${reverseOrder ? 'order-2' : ''}`}
          >
            <div className='lg:max-w-lg'>
              <h2
                className={`text-base font-semibold leading-7 ${preheaderTextColor}`}
              >
                {preheader}
              </h2>
              <p className='mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl'>
                {heading}
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                {description}
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {features?.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-900'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-green-600'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className='mt-10'>
              <CTA
                href={ctaLink ? ctaLink : '/login'}
                ctaText={ctaText || 'Try for free'}
              />
            </div>
          </motion.div>

          <motion.div
            className={`flex self-center flex-col lg:pr-8 lg:pt-4 ${
              reverseOrder ? 'order-1' : ''
            }`}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, translateX: 0 },
              hidden: { opacity: 0, translateX: reverseOrder ? -100 : 100 },
            }}
          >
            {videoSrcURL ? (
              <VideoPlayer videoSrcURL={videoSrcURL} poster={poster} />
            ) : (
              <Image
                width={3840 / 2}
                height={2880 / 2}
                src={poster}
                alt='Demo'
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
