import { useState } from 'react';
import LiquidTabBar from './components/LiquidTabBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import LocationMap from './components/LocationMap';
import ContactSection from './components/ContactSection';
import FloatingCallButton from './components/FloatingCallButton';
import Footer from './components/Footer';
import { SERVICES } from './data';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].name);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const offset = window.innerWidth >= 768 ? 90 : 30;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleBookFromHero = () => {
    handleSelectService(SERVICES[0].name);
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-[#e8dfd8] flex flex-col selection:bg-[#d4af37] selection:text-black">
      {/* Liquid Navigation Tab Bar */}
      <LiquidTabBar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onBookClick={handleBookFromHero} />

        {/* Subtle separator */}
        <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent my-4" />

        {/* 2. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Subtle separator */}
        <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent my-4" />

        {/* 3. Galerie Section */}
        <Gallery />

        {/* Subtle separator */}
        <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent my-4" />

        {/* 4. Avis Clients Section */}
        <Reviews />

        {/* Subtle separator */}
        <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent my-4" />

        {/* 5. Localisation & Google Maps Section */}
        <LocationMap />

        {/* Subtle separator */}
        <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent my-4" />

        {/* 6. Contact & Réservation Section */}
        <ContactSection
          selectedService={selectedService}
          onServiceChange={(service) => setSelectedService(service)}
        />
      </main>

      {/* Floating Call Action Button for Mobile */}
      <FloatingCallButton />

      {/* 7. Footer Section */}
      <Footer />
    </div>
  );
}
