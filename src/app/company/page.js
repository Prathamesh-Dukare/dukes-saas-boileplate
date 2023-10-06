import Background from '@/components/Background';
import Blogs from '@/components/Blogs';
import FAQs from '@/components/FAQs';
import Feature1 from '@/components/Feature1';
import Feature2 from '@/components/Feature2';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import Logos from '@/components/Logos';
import MultiFeature1 from '@/components/MultiFeature1';
import Nav from '@/components/Nav';
import Testimonials from '@/components/Testimonials';
import GlowText from '@/components/UI/GlowText';

export default function Home() {
  return (
    <>
      <Nav theme={'dark'} navHeaderClassName='bg-white text-gray-950' />
      <div className='relative min-h-[20vh] py-4 sm:py-6 xl:py-12'>
        <Background className={'bg-white'} />
        <Hero
          preText={
            <>
              Our <span className='font-bold'>Great</span>{' '}
              <span className='text-gray-800'>Story</span>
            </>
          }
          theme='dark'
          title={<>Give your brand</>}
          subtitle={
            <>
              an online <GlowText>Presence</GlowText>
            </>
          }
          description={
            <>
              World class development and built for{' '}
              <span className='font-bold'>performance</span> <br /> SAAS Starter
              will deliver each and every time.
            </>
          }
          ctaButtonClassName='px-8 py-4'
          ctaText='Sign up for free'
          productImage={'/work.png'}
        />
      </div>
      <Testimonials />
      <MultiFeature1 />

      <Integrations />

      <Logos />
      <Feature1 />
      <Feature2 />
      <Blogs />
      <FAQs />
      <Footer />
    </>
  );
}
