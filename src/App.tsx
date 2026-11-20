import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { WhatsAppLauncher } from './components/WhatsAppLauncher';
import { CarPreloader } from './components/CarPreloader';
import { AutomotiveCursor } from './components/AutomotiveCursor';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | undefined>(undefined);
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);

  const handleOpenBooking = (serviceSlug?: string) => {
    setSelectedServiceSlug(serviceSlug);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceSlug(undefined);
  };

  return (
    <BrowserRouter>
      {/* Precision Automotive Custom Cursor (Desktop only, pointer-events: none) */}
      <AutomotiveCursor />

      {/* Cinematic Automotive Preloader */}
      <CarPreloader onComplete={() => setIsPreloaderActive(false)} />

      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#090A0C] text-text-primary antialiased selection:bg-brand-gold selection:text-black">
        {/* Global Navbar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services/:slug" element={<ServiceDetailPage onOpenBooking={handleOpenBooking} />} />
            
            {/* Gallery Routes (including backwards compatibility for old site typo /galllery/) */}
            <Route path="/our-work" element={<GalleryPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/gallery" element={<GalleryPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/galllery" element={<GalleryPage onOpenBooking={() => handleOpenBooking()} />} />

            {/* Blog Routes (including /blogs/ compatibility) */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/blogs/:slug" element={<BlogPostPage onOpenBooking={() => handleOpenBooking()} />} />

            {/* Contact Route */}
            <Route path="/contact" element={<ContactPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Floating WhatsApp Launcher */}
        <WhatsAppLauncher />

        {/* Global Interactive Booking Modal */}
        <AppointmentModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          defaultServiceSlug={selectedServiceSlug}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
