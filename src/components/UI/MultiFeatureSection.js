/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
/**
 * MultiFeatureSection Component
 *
 * A reusable multi-feature section component for displaying a preheader, heading,
 * description, and a list of call-to-action links with icons.
 *
 * @param {Object} props - Component props
 * @param {string} props.preheader - A brief preheader or sub-title for the section.
 * @param {string} props.heading - The main heading for the section.
 * @param {string} props.description - A description or content for the section.
 * @param {string} [props.bg='bg-gray-100'] - Background color of the section.
 * @param {string} [props.preheaderTextColor='text-gray-600'] - Color of the preheader text.
 * @param {boolean} [props.reverseOrder=false] - Whether to reverse the order of content (image and text).
 * @param {Array} [props.ctas=[]] - An array of call-to-action objects, each containing href, icon, and text.
 * @returns {JSX.Element} - Rendered MultiFeatureSection component.
 */
export default function MultiFeatureSection({
  preheader,
  heading,
  description,
  bg = 'bg-gray-100',
  preheaderTextColor = 'text-gray-600',
  reverseOrder = false,
  ctas = [],
}) {
  return (
    <div className={`relative py-16 sm:py-24 ${bg}`}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-x-16 sm:gap-y-20 lg:mx-0 lg:max-w-full lg:grid-cols-2'>
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
              hidden: { opacity: 0, translateX: reverseOrder ? 100 : -100 },
            }}
          >
            <Image
              className='rounded-lg shadow-lg object-cover object-center sm:object-top'
              src='/man-work.jpg'
              alt='Man working'
              width={600}
              height={600}
            />
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, translateX: 0 },
              hidden: { opacity: 0, translateX: reverseOrder ? -100 : 100 },
            }}
            className={`lg:pr-8 lg:pt-4 ${reverseOrder ? 'order-2' : ''}`}
          >
            <div className='lg:max-w-lg flex flex-col space-y-4'>
              <h2
                className={`text-base font-semibold leading-7 ${preheaderTextColor}`}
              >
                {preheader}
              </h2>
              <p className='mt-2 text-2xl font-semibold tracking-tight leading-8 text-gray-900 sm:text-5xl'>
                {heading}
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                {description}
              </p>
            </div>
            <div className='mt-10'>
              <div className='grid grid-cols-1 gap-6'>
                {ctas.map((cta, index) => (
                  <Link
                    href={cta.href}
                    key={index}
                    className='flex sm:w-3/4 flex-row items-center justify-between rounded-md border p-3'
                  >
                    <div className='flex flex-row gap-2 items-center'>
                      <div className='p-4 rounded-md bg-gray-50'>
                        <cta.icon className='w-4 h-4' />
                      </div>
                      <span className='text-gray-950 font-semibold text-sm'>
                        {cta.text}
                      </span>
                    </div>
                    <div className='p-2'>
                      <ArrowRight className='w-4 h-4' />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
