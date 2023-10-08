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
      <div className='relative min-h-[20vh] pb-4 sm:pb-6 xl:pb-12'>
        <Background className={'bg-black'} videoSrc={'/working.mp4'} />
        <Nav
          theme={'light'}
          navHeaderClassName='bg-transparent text-white'
          buttonClassName='bg-black text-white hover:bg-black/90'
        />
        <Hero
          theme='light'
          title={<>Next Unicorn</>}
          subtitle={
            <>
              Full featured SAAS template <br /> built with
              <GlowText className='bg-green-600'>Next.js</GlowText>
            </>
          }
          description={
            <>
              World class development and built for{' '}
              <span className='font-bold'>performance</span> <br /> SAAS Starter
              will deliver each and every time.
            </>
          }
          ctaButtonClassName='px-8 py-4 bg-black text-white hover:bg-black/90'
          ctaText='Buy this template'
          productImage={'/spotify.png'}
          afterProductImage='UI image is courtesy of Spotify'
        />
      </div>

      <Integrations className={'bg-black'} />

      <PricingTable />
      <FAQs />
      <Footer />
    </>
  );
}
