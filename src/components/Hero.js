'use client';
import Image from 'next/image';
/* eslint-disable @next/next/no-img-element */
import CTA from './UI/CTA';
import { motion } from 'framer-motion';

/**
 * Hero Component
 *
 * A reusable hero component for displaying a title, subtitle, description,
 * call-to-action button, and an optional product image.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - The main title for the hero section.
 * @param {string} props.subtitle - The subtitle for the hero section.
 * @param {string} props.description - The description or content for the hero section.
 * @param {string} [props.ctaText='Find out more'] - The text for the call-to-action button.
 * @param {string} [props.ctaHref='https://sandeep1995.gumroad.com/l/saas-starter-pro'] - The URL the call-to-action button should link to.
 * @param {string} [props.theme='light'] - The theme for the hero section ('light' or 'dark').
 * @param {string} [props.ctaButtonClassName=''] - Additional CSS class for the call-to-action button.
 * @param {string} [props.preText=''] - Optional text to display above the title.
 * @param {string} [props.productImage] - URL of the product image to display.
 * @param {string} [props.afterProductImage=''] - Optional text to display below the product image.
 * @returns {JSX.Element} - Rendered Hero component.
 */
export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Find out more',
  ctaHref = 'https://sandeep1995.gumroad.com/l/saas-starter-pro',
  theme = 'light',
  ctaButtonClassName = '',
  preText = '',
  productImage,
  afterProductImage = '',
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
          {preText ? (
            <p
              className={`bg-transparent border rounded p-2 font-thin text-sm my-2 ${
                theme === 'light'
                  ? 'text-white text-shadow shadow-gray-900'
                  : 'text-gray-900'
              }`}
            >
              {preText}
            </p>
          ) : null}
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
          className='flex flex-col items-center justify-center p-4 sm:p-8 lg:p-10 max-w-7xl mx-auto'
        >
          <Image
            quality={75}
            width={1200}
            height={800}
            className='w-[80vw] mx-auto rounded-md'
            src={productImage}
            alt='UI image courtesy of ChartMogul'
            loading='eager'
          />

          {afterProductImage && (
            <span
              className={`text-xs text-center mx-auto ${
                theme === 'light'
                  ? 'text-shadow shadow-gray-900 text-white'
                  : 'text-gray-950'
              }`}
            >
              {afterProductImage}
            </span>
          )}
        </motion.div>
      ) : null}
    </div>
  );
}
