import Background from '@/components/Background';
import Feature1 from '@/components/Feature1';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <>
      <Nav theme={'light'} />
      <div className='relative min-h-[20vh] py-4 sm:py-6 xl:py-12'>
        <Background className={'bg-green-950'} />
        <Hero
          preText={
            <>
              <span className='font-bold'>1000+</span>{' '}
              <span className='text-green-50'>Happy Customers</span>
            </>
          }
          theme='light'
          title={'Deliver Excellence'}
          subtitle={
            <>
              for your Customers with{' '}
              <span className='bg-green-700 px-2 shadow-md rounded-md'>
                Next.js
              </span>
            </>
          }
          description={
            <>
              <span className='font-bold'>Next.js</span> and{' '}
              <span className='font-bold'>Tailwind CSS</span> are a match made
              in heaven. <br /> This starter template is a great way to get
              started with your next project.
            </>
          }
          ctaButtonClassName='px-8 py-4'
          ctaText='Sign up for free'
          productImage={'/product.png'}
        />
      </div>
      <Logos />

      <Feature1 />

      <Footer />
    </>
  );
}
