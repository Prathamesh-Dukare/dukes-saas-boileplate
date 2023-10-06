/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { useState } from 'react';
import CTA from './UI/CTA';

export default function Nav({
  navHeaderClassName = 'bg-green-900 text-white',
  theme = 'light',
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={navHeaderClassName}>
      <div className='px-4 mx-auto sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-12 lg:h-16'>
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center justify-center gap-2'>
              <img className='w-auto h-8' src='/logo.png' alt='Logo' />
              <span className='font-bold underline-offset-4 underline'>
                SAAS Starter
              </span>
            </Link>
          </div>

          <button
            title='toggle menu'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type='button'
            className='inline-flex p-1 rounded-md transition-all duration-200 border border-gray-900 lg:hidden focus:bg-gray-100 hover:bg-gray-100'
          >
            {!isMenuOpen ? (
              <svg
                className='w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            )}
          </button>

          <div className='hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10'>
            <Link
              href='/company'
              title='company'
              className='text-base font-semibold transition-all duration-200 hover:text-opacity-80'
            >
              Company
            </Link>
            <Link
              href='/product'
              title='product'
              className='text-base font-semibold transition-all duration-200 hover:text-opacity-80'
            >
              Product
            </Link>
            <Link
              href='/pricing'
              title='pricing'
              className='text-base font-semibold transition-all duration-200 hover:text-opacity-80'
            >
              Pricing
            </Link>
            <Link
              href='/blog'
              title='login'
              className='text-base font-semibold transition-all duration-200 hover:text-opacity-80'
            >
              Blog
            </Link>
            {!isMenuOpen && <div className='w-px h-5 bg-gray-100/50'></div>}
            <a
              target='_blank'
              href='https://nanodevpro.com/contact'
              title='Book a Call'
              className='text-base font-semibold transition-all duration-200 hover:text-opacity-80'
            >
              Contact
            </a>
            <CTA blackTheme={theme === 'dark'} ctaText='Buy Template' />
          </div>
        </div>

        {isMenuOpen && (
          <div className='flex flex-col items-center justify-center space-y-4 pb-2'>
            <Link
              href='/company'
              title='company'
              className='text-base font-semibold transition-all duration-200 hover:text-opacity-80'
            >
              Company
            </Link>

            <Link
              href='/product'
              title='product'
              className='text-base font-semibold transition-all duration-200 hover:text-opacity-80'
            >
              Product
            </Link>

            <Link
              href='/pricing'
              title='pricing'
              className='text-base font-semibold transition-all duration-200 hover:text-opacity-80'
            >
              Pricing
            </Link>

            <Link
              href='/blog'
              title='login'
              className='text-base font-semibold transition-all duration-200 hover:text-opacity-80'
            >
              Blog
            </Link>

            {!isMenuOpen && <div className='w-px h-5 bg-gray-50/20'></div>}

            <a
              target='_blank'
              href='https://cal.com/sandeep-indie/30min'
              title='Book a Call'
              className='text-base font-semibold transition-all duration-200 hover:text-opacity-80'
            >
              Book a Call
            </a>

            <CTA blackTheme={theme === 'dark'} ctaText='Buy Template' />
          </div>
        )}
      </div>
    </header>
  );
}
