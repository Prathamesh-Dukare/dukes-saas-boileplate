'use client';

import GlowText from './UI/GlowText';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is Netflix?',
    answer:
      'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer:
      'Of course! You can cancel your plan at any time. There are no cancellation fees, though no refunds are provided for prorated periods.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.',
  },
  {
    question: 'Is Netflix good for kids?',
    answer:
      'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
  },
  {
    question: 'May I share my account?',
    answer:
      'Netflix offers a variety of plans to meet your needs. The plan you choose will determine the number of devices that you can watch Netflix on at the same time.',
  },
  {
    question: 'How do I cancel?',
    answer:
      'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees, though no refunds are provided for prorated periods.',
  },
];

export default function FAQs() {
  return (
    <div className='bg-gray-50'>
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

            <p className='font-medium text-gray-950'>
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
