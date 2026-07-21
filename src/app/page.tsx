import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import FeaturedWork from '@/components/sections/FeaturedWork';
import WhyAltiora from '@/components/sections/WhyAltiora';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedWork />
      <WhyAltiora />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
