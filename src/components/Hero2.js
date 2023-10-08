/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import CTA from './UI/CTA';
import Image from 'next/image';

/**
 * Hero2 Component
 *
 * A reusable hero component for displaying a service with a title, description,
 * details, and an optional image.
 *
 * @param {Object} props - Component props
 * @param {Object} props.service - The service object to display.
 * @param {string} props.service.title - The title of the service.
 * @param {string} props.service.description - A brief description of the service.
 * @param {string} props.service.details - Additional details or information about the service.
 * @param {string} props.service.image - URL of the image representing the service.
 * @returns {JSX.Element} - Rendered Hero2 component.
 */
export default function Hero2({ service }) {
  return (
    <section className='py-4 sm:py-10 lg:py-16 bg-white'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='grid items-center justify-center gap-6 grid-cols-1 sm:grid-cols-2'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, translateX: 0 },
              hidden: { opacity: 0, translateX: -100 },
            }}
            className='text-center sm:text-left flex flex-col items-center sm:items-start justify-center'
          >
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
              <CTA ctaText='Buy this template' />
            </div>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, translateX: 0 },
              hidden: { opacity: 0, translateX: 100 },
            }}
            className='flex items-center justify-center'
          >
            <Image
              className='w-full max-w-lg rounded-xl'
              src={service.image}
              alt={service.title}
              width={600}
              height={600}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
