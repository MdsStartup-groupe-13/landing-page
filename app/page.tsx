import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import PresentationSection from "./components/PresentationSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <PresentationSection />
      <Footer />
    </main>
  );
}
