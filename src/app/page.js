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
import PricingTable from '@/components/PricingTable';
import Testimonials from '@/components/Testimonials';
import GlowText from '@/components/UI/GlowText';

export default function Home() {
  return (
    <>
      <Nav theme={'light'} />
      <div className='relative min-h-[20vh] py-4 sm:py-6 xl:py-12'>
        <Background className={'bg-green-900'} />
        <Hero
          preText={
            <>
              <span className='font-bold'>1000+</span>{' '}
              <span className='text-green-50'>Happy Customers</span>
            </>
          }
          theme='light'
          title={
            <>
              Build your dream <br />
              SAAS today
            </>
          }
          subtitle={
            <>
              This can be your <GlowText>Brand</GlowText>
            </>
          }
          description={
            <>
              Crafted to Perfection. <br />
              <span className='font-bold'>Next.js</span> SAAS Template featuring{' '}
              <span className='font-bold'>TailwindCSS</span> and{' '}
              <span className='font-bold'>Framer Motion</span>
            </>
          }
          ctaButtonClassName='px-8 py-4'
          ctaText='Get this template'
          productImage={'/product.png'}
        />
      </div>
      <Logos />
      <Testimonials />
      <MultiFeature1 />
      <Feature1 />
      <Integrations />
      <Blogs />
      <Feature2 />
      <PricingTable />
      <FAQs />
      <Footer />
    </>
  );
}
