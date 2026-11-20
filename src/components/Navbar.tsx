import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/company';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  MessageSquare,
  Shield,
  Monitor,
  Cpu,
  Sparkles,
  Wrench,
  Zap,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceSlug?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const serviceIconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-4 h-4 text-brand-gold" />,
    Monitor: <Monitor className="w-4 h-4 text-brand-gold" />,
    Cpu: <Cpu className="w-4 h-4 text-brand-gold" />,
    Sparkles: <Sparkles className="w-4 h-4 text-brand-gold" />,
    Wrench: <Wrench className="w-4 h-4 text-brand-gold" />,
    Zap: <Zap className="w-4 h-4 text-brand-gold" />,
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services', hasDropdown: true },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090A0C]/95 backdrop-blur-md border-b border-border-subtle py-3 shadow-xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <BrandLogo size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        to="/services"
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors duration-200 rounded-md ${
                          isActive('/services')
                            ? 'text-brand-gold'
                            : 'text-text-secondary hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-2 z-50">
                          <div className="bg-background-surface border border-border-DEFAULT rounded-xl shadow-2xl p-2.5 backdrop-blur-xl">
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-text-muted px-3 py-1.5 border-b border-border-subtle mb-1 flex items-center justify-between">
                              <span>Six Specialist Categories</span>
                              <Link
                                to="/services"
                                className="text-brand-gold hover:underline flex items-center gap-1"
                              >
                                View All
                              </Link>
                            </div>
                            <div className="space-y-1">
                              {SERVICES_DATA.map((srv) => (
                                <Link
                                  key={srv.slug}
                                  to={`/services/${srv.slug}`}
                                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-background-elevated transition-colors group"
                                >
                                  <div className="p-1.5 rounded-md bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors mt-0.5">
                                    {serviceIconMap[srv.iconName]}
                                  </div>
                                  <div>
                                    <div className="text-xs font-medium text-white group-hover:text-brand-gold transition-colors">
                                      {srv.title}
                                    </div>
                                    <div className="text-[11px] text-text-muted line-clamp-1 mt-0.5">
                                      {srv.summary}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`px-3.5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors duration-200 rounded-md relative ${
                      isActive(link.path)
                        ? 'text-brand-gold'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive(link.path) && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Phone quick link */}
              <a
                href={`tel:${COMPANY_DATA.phone.raw}`}
                className="flex items-center gap-2 text-xs font-semibold tracking-wider text-text-secondary hover:text-brand-gold transition-colors py-2 px-3"
                title="Call DSUS Al Quoz"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>{COMPANY_DATA.phone.display}</span>
              </a>

              {/* Appointment CTA */}
              <button
                onClick={() => onOpenBooking()}
                className="px-4 py-2.5 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-glow-gold hover:shadow-lg flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Bay</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="p-2 rounded-lg bg-brand-gold text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
                aria-label="Book appointment"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Book</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Toggle mobile navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background-surface border-l border-border-DEFAULT shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
                <BrandLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-text-muted hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <div className="py-6 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-background-elevated hover:text-brand-gold"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-background-elevated hover:text-brand-gold"
                >
                  About DSUS
                </Link>

                {/* Mobile Services accordion */}
                <div className="pt-2">
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Services
                  </div>
                  <div className="pl-2 space-y-1 mt-1">
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.slug}
                        to={`/services/${srv.slug}`}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-text-secondary hover:text-white hover:bg-background-elevated"
                      >
                        {serviceIconMap[srv.iconName]}
                        <span>{srv.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/our-work"
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-background-elevated hover:text-brand-gold mt-2"
                >
                  Our Work & Gallery
                </Link>
                <Link
                  to="/blog"
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-background-elevated hover:text-brand-gold"
                >
                  Automotive Journal
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-background-elevated hover:text-brand-gold"
                >
                  Contact & Location
                </Link>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-border-subtle space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-lg bg-brand-gold text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-gold"
              >
                <Calendar className="w-4 h-4" />
                <span>Book An Appointment</span>
              </button>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="text-center text-[11px] text-text-muted pt-2">
                <div>Al Asayel St, Al Quoz Industrial 2, Dubai</div>
                <div>Mon – Sat, 9:00 AM – 9:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
