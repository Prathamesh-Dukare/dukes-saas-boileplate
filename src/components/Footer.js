import Link from 'next/link';

import { services } from '@/lib/utils';

/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <section className='py-10 bg-gray-900 sm:pt-16 lg:pt-24'>
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-12'>
          <div>
            <p className='text-base text-gray-100'>Company</p>

            <ul className='mt-8 space-y-4'>
              <li>
                <Link
                  href='/#solutions'
                  title='Solutions'
                  className='text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href='/#portfolio'
                  title='Portfolio'
                  className='text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  title='Contact NanoDevPro'
                  className='text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  target='_blank'
                  href='mailto:sandeep@nanodevpro.com'
                  title='Contact NanoDevPro'
                  className='text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className='text-base text-gray-100'>Product</p>
            <ul className='mt-8 space-y-4'>
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    title={service.title}
                    className='text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className='text-base text-gray-100'>Legal</p>

            <ul className='mt-8 space-y-4'>
              <li>
                <Link
                  href='/terms'
                  title='terms'
                  className='text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  title='privacy'
                  className='text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className='mt-16 mb-10 border-gray-800' />

        <div className='flex flex-wrap items-center justify-between'>
          <img
            className='h-12 rounded bg-white p-2 auto md:order-1'
            src='/logo.png'
            alt='Logo'
          />

          <ul className='flex items-center space-x-3 md:order-3'>
            <li>
              <a
                target='_blank'
                href='https://twitter.com/sandeep_indie'
                title='Sandeep Acharya Twitter'
                className='flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600'
              >
                <svg
                  className='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z'></path>
                </svg>
              </a>
            </li>
          </ul>

          <p className='w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2'>
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            Sandeep Acharya
          </p>
        </div>
      </div>
    </section>
  );
}
