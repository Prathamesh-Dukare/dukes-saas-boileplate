'use client';

import VideoPlayer from './VideoPlayer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CTA from './CTA';

/**
 * FeatureSection Component
 *
 * A reusable feature section component for displaying a preheader, heading,
 * description, features list, and an optional video or image.
 *
 * @param {Object} props - Component props
 * @param {string} props.preheader - A brief preheader or sub-title for the section.
 * @param {string} props.heading - The main heading for the section.
 * @param {string} props.description - A description or content for the section.
 * @param {string} props.videoSrcURL - URL of a video to display (optional).
 * @param {Array} props.features - An array of feature objects, each containing a name and description.
 * @param {string} [props.bg='bg-gray-100'] - Background color of the section.
 * @param {string} [props.preheaderTextColor='text-gray-600'] - Color of the preheader text.
 * @param {boolean} [props.reverseOrder=false] - Whether to reverse the order of content (video/image and text).
 * @param {string} [props.poster] - URL of an image to use as the poster (if no video).
 * @param {string} [props.ctaLink='https://sandeep1995.gumroad.com/l/saas-starter-pro'] - URL for the call-to-action button.
 * @param {string} [props.ctaText='Start my free trial'] - Text for the call-to-action button.
 * @returns {JSX.Element} - Rendered FeatureSection component.
 */
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
  ctaLink = 'https://sandeep1995.gumroad.com/l/saas-starter-pro',
  ctaText = 'Start my free trial',
}) {
  return (
    <div className={`relative py-16 sm:py-24 ${bg}`}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 sm:gap-x-16 lg:mx-0 lg:max-w-full lg:grid-cols-2'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, translateX: 0 },
              hidden: { opacity: 0, translateX: reverseOrder ? 100 : -100 },
            }}
            className={`lg:pr-8 lg:pt-4 ${reverseOrder ? 'order-2' : ''}`}
          >
            <div className='lg:max-w-lg flex flex-col'>
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
                href={
                  ctaLink
                    ? ctaLink
                    : 'https://sandeep1995.gumroad.com/l/saas-starter-pro'
                }
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
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, translateX: 0 },
              hidden: { opacity: 0, translateX: reverseOrder ? -100 : 100 },
            }}
          >
            {videoSrcURL ? (
              <VideoPlayer videoSrcURL={videoSrcURL} poster={poster} />
            ) : (
              <div className='w-full rounded shadow-2xl object-cover object-center'>
                <Image fill src={poster} alt='Demo' className='w-full h-full' />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
