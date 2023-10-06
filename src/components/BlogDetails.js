'use client';
import Image from 'next/image';
import ProsePreview from './prose-preview';
import { motion } from 'framer-motion';

export default function BlogDetails({ article }) {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 100 },
      }}
      className='sm:pt-10 lg:pt-16'
    >
      <div className='px-4 mx-auto max-w-4xl sm:px-6 lg:px-8'>
        <div className='grid items-center text-center justify-center gap-6 sm:gap-10 grid-cols-1'>
          <h1 className='text-3xl font-bold text-gray-950 sm:text-5xl lg:text-6xl'>
            {article.title}
          </h1>
          <div className='flex items-center justify-center'>
            <Image
              width={1200}
              height={800}
              className='w-full max-w-3xl rounded-xl'
              src={`https://picsum.photos/seed/${article.slug}/1200/800`}
              alt={article.title}
            />
          </div>

          <div className='flex justify-center items-center mt-4'>
            <div className='w-12 h-12 rounded-full object-cover mr-4'>
              <Image
                src={`https://i.pravatar.cc/64?u=${article.author}`}
                alt={article.author}
                width={64}
                height={64}
                className='rounded-full object-cover'
              />
            </div>

            <div className='flex flex-col'>
              <div className='flex flex-col'>
                <h2 className='text-md sm:text-lg font-bold text-gray-800'>
                  {article.author}
                </h2>
                <p className='text-gray-500 text-xs sm:text-sm'>
                  {article.date}
                </p>
              </div>
            </div>
          </div>
          <p className='text-base font-semibold text-gray-700 sm:text-xl max-w-prose'>
            {article.description}
          </p>
        </div>
      </div>
      <ProsePreview content={article.content} />
    </motion.section>
  );
}
