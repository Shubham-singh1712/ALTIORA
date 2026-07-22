import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import FeaturedWork from '@/components/sections/FeaturedWork';
import About from '@/components/sections/About';
import RoiCalculator from '@/components/sections/RoiCalculator';
import MenuShowcase from '@/components/sections/MenuShowcase';
import WhyAltiora from '@/components/sections/WhyAltiora';
import Process from '@/components/sections/Process';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import CustomCursor from '@/components/shared/CustomCursor';
import NoiseOverlay from '@/components/shared/NoiseOverlay';
import BackToTop from '@/components/shared/BackToTop';

export default function Home() {
  return (
    <main className="relative bg-[#050505] text-white overflow-hidden">
      <CustomCursor />
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <Services />
      <FeaturedWork />
      <RoiCalculator />
      <MenuShowcase />
      <About />
      <WhyAltiora />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}


