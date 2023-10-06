import Background from '@/components/Background';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import Logos from '@/components/Logos';
import MultiFeature1 from '@/components/MultiFeature1';
import Nav from '@/components/Nav';
import PricingTable from '@/components/PricingTable';
import Testimonials from '@/components/Testimonials';
import GlowText from '@/components/UI/GlowText';

export default function Home() {
  return (
    <>
      <Nav theme={'dark'} navHeaderClassName='bg-gray-50 text-gray-950' />
      <div className='relative min-h-[20vh] py-4 sm:py-6 xl:py-12'>
        <Background className={'bg-gray-50'} videoSrc={'/landing.mp4'} />
        <Hero
          preText={
            <>
              <span className='font-bold'>1000+</span>{' '}
              <span className='text-gray-50'>Happy Customers</span>
            </>
          }
          theme='light'
          title={
            <>
              Focus on your <br />
              Product
            </>
          }
          subtitle={
            <>
              <span className='font-bold'>SAAS Starter Kit</span> will <br />{' '}
              take it to the <GlowText> next level</GlowText>
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
          ctaText='Buy this template'
          productImage={'/product.png'}
        />
      </div>

      <MultiFeature1 />

      <Integrations />

      <Logos />
      <Testimonials />

      <PricingTable />
      <FAQs />
      <Footer />
    </>
  );
}
