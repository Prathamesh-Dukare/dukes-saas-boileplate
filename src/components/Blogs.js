'use client';
import GlowText from '@/components/UI/GlowText';
import { motion } from 'framer-motion';
import { BookIcon } from 'lucide-react';

import { articles } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Blogs() {
  return (
    <div className='bg-neutral-50'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='flex flex-col space-y-4'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 py-4 sm:py-8'>
            <div className='flex flex-col gap-4 items-start'>
              <p className='flex flex-row items-center text-xl sm:text-2xl font-semibold text-gray-950 tracking-wide'>
                <BookIcon className='h-6 w-6 mr-2' /> Blog
              </p>
              <h2 className='text-4xl font-extrabold  text-gray-900 sm:text-5xl'>
                Our latest <GlowText>Stories</GlowText>
              </h2>
            </div>

            <p className='text-base text-gray-900 w-3/4'>
              Make informed decisions with confidence. SAAS Starter provides you
              with insights.
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
            className='grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 py-4 sm:py-8'
          >
            {articles.map((article, index) => {
              return (
                <Link
                  href={`/blog/${article.slug}`}
                  key={index}
                  className='max-w-prose mx-auto rounded-lg bg-white shadow-lg overflow-hidden p-2'
                >
                  <div className='flex w-full rounded-lg overflow-hidden hover:scale-105 transition-all duration-200'>
                    <Image
                      className='object-cover object-center w-full h-36 sm:h-64'
                      src={`https://picsum.photos/seed/${article.slug}/800/600`}
                      alt={article.title}
                      width={800}
                      height={600}
                    />
                  </div>

                  <div className='py-4 p-4'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                      {article.title}
                    </h3>
                    <p className='mt-4 text-base text-gray-500'>
                      {article.description}
                    </p>
                    <div className='flex items-center mt-4'>
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
                        <h2 className='text-md sm:text-lg font-bold text-gray-800'>
                          {article.author}
                        </h2>
                        <p className='text-gray-500 text-xs sm:text-sm'>
                          {article.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
