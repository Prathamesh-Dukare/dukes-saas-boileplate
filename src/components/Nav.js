/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { useState } from 'react';
import CTA from './UI/CTA';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='border-b border-gray-50'>
      <div className='px-4 mx-auto sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-12 lg:h-16'>
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center justify-center gap-1'>
              <img className='w-auto h-8' src='/logo.png' alt='Logo' />
              <span className='font-bold'>SAAS Starter</span>
            </Link>
          </div>

          <button
            title='toggle menu'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type='button'
            className='inline-flex p-1 rounded-md text-gray-900 transition-all duration-200 border border-gray-900 lg:hidden focus:bg-gray-100 hover:bg-gray-100'
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
              href='/subscribe'
              title='Software Development Services Subscription'
              className='text-base font-semibold text-gray-900 transition-all duration-200 hover:text-opacity-80'
            >
              Company
            </Link>
            <Link
              href='https://nanodevpro.com/blog'
              title='Nanodevpro blog'
              className='text-base font-semibold text-gray-900 transition-all duration-200 hover:text-opacity-80'
            >
              Product
            </Link>
            <Link
              href='#portfolio'
              title='portfolio'
              className='text-base font-semibold text-gray-900 transition-all duration-200 hover:text-opacity-80'
            >
              Pricing
            </Link>
            <Link
              href='https://billing.stripe.com/p/login/9AQ9DLeZIftV17G6oo'
              title='login'
              className='text-base font-semibold text-gray-900 transition-all duration-200 hover:text-opacity-80'
            >
              Blog
            </Link>
            {!isMenuOpen && <div className='w-px h-5 bg-black/20'></div>}
            <a
              target='_blank'
              href='https://cal.com/sandeep-indie/30min'
              title='Book a Call'
              className='text-base font-semibold text-gray-900 transition-all duration-200 hover:text-opacity-80'
            >
              Contact
            </a>
            <CTA ctaText='Buy Template' />
          </div>
        </div>

        {isMenuOpen && (
          <div className='flex flex-col items-center justify-center space-y-4 mb-2'>
            <Link
              href='/subscribe'
              title='Software Development Services Subscription'
              className='text-base font-semibold text-gray-900 transition-all duration-200 hover:text-opacity-80'
            >
              Company
            </Link>

            <Link
              href='https://nanodevpro.com/blog'
              title='Nanovepro blog'
              className='text-base font-semibold text-gray-900 transition-all duration-200 hover:text-opacity-80'
            >
              Product
            </Link>

            <Link
              href='#portfolio'
              title='portfolio'
              className='text-base font-semibold text-gray-900 transition-all duration-200 hover:text-opacity-80'
            >
              Pricing
            </Link>

            <Link
              href='https://billing.stripe.com/p/login/9AQ9DLeZIftV17G6oo'
              title='login'
              className='text-base font-semibold text-gray-900 transition-all duration-200 hover:text-opacity-80'
            >
              Blog
            </Link>

            {!isMenuOpen && <div className='w-px h-5 bg-black/20'></div>}

            <a
              target='_blank'
              href='https://cal.com/sandeep-indie/30min'
              title='Book a Call'
              className='text-base font-semibold text-gray-900 transition-all duration-200 hover:text-opacity-80'
            >
              Book a Call
            </a>

            <CTA ctaText='Buy Template' />
          </div>
        )}
      </div>
    </header>
  );
}
