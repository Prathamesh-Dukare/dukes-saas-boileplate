'use client';
import { useEffect } from 'react';
import CTA from './UI/CTA';
import Image from 'next/image';
import GlowText from './UI/GlowText';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import useInView

export default function Integrations({ className }) {
  const controls = useAnimation();
  const [ref, inView] = useInView(); // Use useInView to track if the section is in the viewport

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
      },
    }),
  };

  const integrationDomains = [
    'zapier.com',
    'spotify.com',
    'mailchimp.com',
    'slack.com',
    'github.com',
    'google.com',
    'stripe.com',
    'quickbooks.com',
  ];

  useEffect(() => {
    if (inView) {
      // Start animation when in viewport
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section
      className={`py-8 bg-green-600 sm:py-12 lg:py-36 ${className}`}
      ref={ref}
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-center sm:items-start space-y-6 sm:space-y-8'>
          <h3 className='text-3xl sm:text-5xl text-white font-semibold'>
            Make <GlowText theme='light'>productivity</GlowText> easier <br />{' '}
            with 50+ Integrations
          </h3>
          <p className='text-gray-100'>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quos
            blanditiis tenetur.
          </p>
          <div className='flex flex-row justify-start'>
            <CTA
              ctaText='View all integrations'
              ctaLink='https://sandeep1995.gumroad.com/l/saas-starter-pro'
              blackTheme={false}
            />
          </div>
        </div>
        <motion.div
          className='flex flex-wrap items-center justify-center gap-8'
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.4 }}
        >
          {integrationDomains.map((domain, index) => (
            <motion.div
              key={index}
              className='w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center'
              variants={variants}
              custom={index}
            >
              <Image
                className='rounded-full'
                width={36}
                height={36}
                src={`https://logo.clearbit.com/${domain}`}
                alt={domain}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
