import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PresentationSection from "./components/PresentationSection";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <PresentationSection />
      <BenefitsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
