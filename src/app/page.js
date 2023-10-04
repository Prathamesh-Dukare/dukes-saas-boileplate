import Background from '@/components/Background';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Background className={'bg-neutral-50'} />
      <Hero
        preText={
          <>
            <span className='font-bold'>1000+</span>{' '}
            <span className='text-green-700'>Happy Customers</span>
          </>
        }
        theme='dark'
        title={'Deliver Excellence'}
        subtitle={
          <>
            for your Customers with{' '}
            <span className='bg-green-400 px-2 rounded'>Next.js</span>
          </>
        }
        description={
          <>
            <span className='font-bold'>Next.js</span> and{' '}
            <span className='font-bold'>Tailwind CSS</span> are a match made in
            heaven. <br /> This starter template is a great way to get started
            with your next project.
          </>
        }
        ctaButtonClassName='px-8 py-4'
        ctaText='Sign up for free'
        productImage={'/product.png'}
      />
    </>
  );
}
