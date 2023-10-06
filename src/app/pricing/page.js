import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';
import Logos from '@/components/Logos';
import Nav from '@/components/Nav';
import PricingTable from '@/components/PricingTable';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Nav theme={'dark'} navHeaderClassName={'bg-white text-gray-950'} />
      <PricingTable />
      <Testimonials />
      <Logos />
      <FAQs />
      <Footer />
    </>
  );
}
