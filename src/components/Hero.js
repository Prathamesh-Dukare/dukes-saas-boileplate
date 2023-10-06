'use client';
import Image from 'next/image';
/* eslint-disable @next/next/no-img-element */
import CTA from './UI/CTA';
import { motion } from 'framer-motion';

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Find out more',
  ctaHref = 'https://sandeep1995.gumroad.com/l/saas-starter-pro',
  theme = 'light',
  ctaButtonClassName = '',
  preText = 'Happy to see you here!',
  productImage,
}) {
  return (
    <div className='relative'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
        className='px-4 py-4 mx-auto sm:px-8 lg:px-10 max-w-7xl'
      >
        <div className='w-full text-center flex flex-col items-center justify-center'>
          <p
            className={`bg-transparent border rounded p-2 font-thin text-sm my-2 ${
              theme === 'light'
                ? 'text-white text-shadow shadow-gray-900'
                : 'text-gray-900'
            }`}
          >
            {preText}
          </p>
          <h1
            className={`text-4xl font-bold sm:text-7xl lg:text-8xl  ${
              theme === 'light'
                ? 'text-white text-shadow shadow-gray-900'
                : 'text-gray-900'
            }`}
          >
            {title}
          </h1>
          <h2
            className={`relative mt-6 text-3xl font-bold sm:text-5xl lg:text-6xl ${
              theme === 'light'
                ? 'text-white text-shadow shadow-gray-900'
                : 'text-gray-900'
            }`}
          >
            {subtitle}
          </h2>
          <p
            className={`mt-8 max-w-4xl text-center text-base md:text-lg ${
              theme === 'light' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {description}
          </p>
          {ctaText && (
            <div className='mt-10'>
              <CTA
                href={ctaHref}
                ctaText={ctaText}
                className={ctaButtonClassName}
                blackTheme={theme === 'dark'}
              />
            </div>
          )}
        </div>
      </motion.div>
      {productImage ? (
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 },
          }}
          className='flex flex-col items-center justify-center'
        >
          <Image
            width={1200}
            height={800}
            className='w-[80vw] mx-auto rounded'
            src={productImage}
            alt='UI image courtesy of ChartMogul'
          />

          <span className='text-xs text-center mx-auto text-white'>
            UI image courtesy of ChartMogul
          </span>
        </motion.div>
      ) : null}
    </div>
  );
}
