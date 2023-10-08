import Background from '@/components/Background';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import Nav from '@/components/Nav';
import PricingTable from '@/components/PricingTable';
import Testimonials from '@/components/Testimonials';
import GlowText from '@/components/UI/GlowText';

export default function Home() {
  return (
    <>
      <div className='relative min-h-[20vh] pb-4 sm:pb-6 xl:pb-12'>
        <Background className={'bg-black'} imgSrc={'/cool-background.png'} />
        <Nav theme={'dark'} navHeaderClassName='text-gray-950' />
        <Hero
          theme='dark'
          title={
            <>
              <span className='text-green-700'>Attention</span> drawer
            </>
          }
          preText='SAAS Starter'
          subtitle={
            <>
              Full featured SAAS template <br /> built with
              <GlowText className='bg-black'>Next.js</GlowText>
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
          productImage={'/spotify.png'}
          afterProductImage='UI image is courtesy of Spotify'
        />
      </div>

      <Integrations className={'bg-black'} />

      <PricingTable />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  );
}
