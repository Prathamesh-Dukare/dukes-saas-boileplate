import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function Blog() {
  return (
    <>
      <Nav navHeaderClassName='bg-gray-50 text-gray-950' theme='dark' />
      <Blogs />
      <Footer />
    </>
  );
}
