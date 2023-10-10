'use client';

import GlowText from './UI/GlowText';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is NanoDevPro?',
    answer:
      'NanoDevPro is a cutting-edge tech company that provides a wide range of innovative solutions, including software development, cloud computing, and AI services to businesses and individuals.',
  },
  {
    question: 'Can I change my subscription plan?',
    answer:
      'Absolutely! You have the flexibility to upgrade or downgrade your subscription plan at any time. We want to ensure that our services meet your evolving needs.',
  },
  {
    question: 'What can I access on NanoDevPro?',
    answer:
      'NanoDevPro offers an extensive collection of resources, including tutorials, coding challenges, tech articles, and exclusive tech content created by our expert team. Explore and learn at your own pace.',
  },
  {
    question: 'Is NanoDevPro suitable for beginners?',
    answer:
      'Certainly! NanoDevPro provides a beginner-friendly learning environment, with step-by-step guides and courses tailored to those just starting their tech journey.',
  },
  {
    question: 'How many devices can I use with my account?',
    answer:
      'NanoDevPro offers various subscription plans with different device limits. You can choose the plan that suits your needs, allowing you to access our services on multiple devices simultaneously.',
  },
  {
    question: 'How can I cancel my subscription?',
    answer:
      'We make it easy for you to manage your subscription. You can cancel your NanoDevPro subscription with a few clicks in your account settings. No long-term commitments or cancellation fees!',
  },
];

export default function FAQs() {
  return (
    <div className='bg-zinc-50'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='flex flex-col space-y-4'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 py-4 sm:py-8'>
            <div className='flex flex-col gap-2'>
              <p className='text-base font-semibold text-green-600 tracking-wide'>
                Frequently Asked
              </p>
              <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                <GlowText>Questions</GlowText>
              </h2>
            </div>

            <p className='text-base text-gray-900 w-3/4'>
              Your success is our top priority. Our dedicated support team is
              here to assist you every step of the way
            </p>
          </div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 100 },
            }}
            transition={{ duration: 0.2 }}
            className='grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 py-4 sm:py-8'
          >
            {faqs.map((faq, index) => {
              return (
                <div
                  key={index}
                  className='max-w-prose mx-auto rounded-md divide-y-2 bg-white p-4 sm:p-8 divide-gray-200'
                >
                  <div className='py-4'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                      {faq.question}
                    </h3>
                    <p className='mt-4 text-base text-gray-500'>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
