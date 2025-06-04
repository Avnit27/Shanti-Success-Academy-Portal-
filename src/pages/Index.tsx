
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyChooseSSA from '@/components/WhyChooseSSA';
import CoursesOffered from '@/components/CoursesOffered';
import Toppers from '@/components/Toppers';
import Faculty from '@/components/Faculty';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import SpecialOffer from '@/components/SpecialOffer';
import AdmissionForm from '@/components/AdmissionForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins bg-white">
      <Header />
      <HeroSection />
      <WhyChooseSSA />
      <CoursesOffered />
      <Toppers />
      <Faculty />
      <Testimonials />
      <Gallery />
      <SpecialOffer />
      <AdmissionForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
