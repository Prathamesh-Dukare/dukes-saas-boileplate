'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BoxIcon,
  StarIcon,
  CalculatorIcon,
  CalendarClockIcon,
} from 'lucide-react';
import { useState } from 'react';

const icons = [BoxIcon, StarIcon, CalculatorIcon, CalendarClockIcon];

const plans = {
  Basic: {
    name: 'Basic',
    description: 'Perfect for individuals and small projects',
    priceMonthly: '$9',
    priceAnnual: '$99',
    features: [
      '10GB Storage',
      'Unlimited Bandwidth',
      'Free Domain Included',
      'Email Support',
    ],
  },
  Pro: {
    name: 'Pro',
    description: 'Ideal for businesses and growing websites',
    priceMonthly: '$19',
    priceAnnual: '$199',
    features: [
      '30GB Storage',
      'Unlimited Bandwidth',
      'Custom Domain Support',
      '24/7 Customer Support',
    ],
  },
  Enterprise: {
    name: 'Enterprise',
    description: 'For large enterprises and high-traffic sites',
    priceMonthly: '$49',
    priceAnnual: '$499',
    features: [
      '100GB Storage',
      'Unlimited Bandwidth',
      'Dedicated Account Manager',
      '99.9% Uptime Guarantee',
    ],
  },
};

const PricingTable = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <div className='bg-gray-50 flex flex-col justify-center items-center px-4 pt-4 sm:pt-8'>
      <h1 className='text-xl pt-10 font-bold leading-tight text-gray-900 sm:text-2xl sm:leading-tight lg:text-5xl lg:leading-tight px-4 text-center'>
        Pricing
      </h1>

      <p className='text-gray-500 text-center mt-4 px-4'>
        Choose the plan that works best for you.
      </p>

      <div className='flex flex-row justify-center items-center gap-4 mt-8'>
        <button
          className={`px-4 py-2 rounded-md font-semibold ${
            !annual ? 'bg-gray-950 text-white' : 'bg-white text-gray-950'
          }`}
          onClick={() => setAnnual(false)}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-md font-semibold ${
            annual ? 'bg-gray-950 text-white' : 'bg-white text-gray-950'
          }`}
          onClick={() => setAnnual(true)}
        >
          Annually
        </button>
      </div>

      <span className='text-gray-500 text-center text-xs mt-4 px-4'>
        {annual
          ? 'Save 20% when you pay annually'
          : 'No commitments, cancel anytime'}
      </span>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: 100 },
        }}
        className='w-full max-w-6xl grid grid-cols-1 xl:grid-cols-3 items-start gap-8 py-12 px-4 sm:px-6 lg:px-8'
      >
        {Object.keys(plans).map((planName, id) => {
          const plan = plans[planName];
          return (
            <div
              key={id}
              className={`bg-white flex flex-col rounded-2xl p-10 w-full col-span-1 md:max-w-sm`}
            >
              <h3 className='text-xl font-semibold mb-2'>{plan.name}</h3>
              <p className='text-gray-400 mb-6'>{plan.description}</p>
              <div className='flex flex-row gap-1 mb-2 items-center'>
                <div className='text-2xl sm:text-5xl text-slate-700'>
                  {annual ? plan.priceAnnual : plan.priceMonthly}
                </div>
                <span className='text-sm text-gray-500'>
                  {annual ? '/year' : '/month'}
                </span>
              </div>
              <div className='mt-6 flex flex-col items-center'>
                <Link
                  href='https://sandeep1995.gumroad.com/l/saas-starter-pro'
                  className={`rounded-full border w-full flex items-center justify-center px-4 py-2 font-semibold ${
                    planName === 'Pro'
                      ? ' bg-gray-950 text-white'
                      : 'bg-white text-gray-950'
                  }`}
                >
                  Start free trial &nbsp; &rarr;
                </Link>
              </div>

              <ul className='mt-8 text-gray-700 flex flex-col space-y-4'>
                {plan.features.map((feature, index) => {
                  const Icon = icons[index];
                  return (
                    <li
                      key={index}
                      className='text-slate-900 flex flex-row items-center gap-3'
                    >
                      <Icon size={16} />
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default PricingTable;
