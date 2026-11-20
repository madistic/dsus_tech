import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/company';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  ArrowUpRight, 
  CheckCircle2, 
  Send 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !/^\S+@\S+\.\S+$/.test(emailInput)) return;
    setSubscribed(true);
    setEmailInput('');
  };

  return (
    <footer className="bg-[#07080A] border-t border-border-subtle pt-16 pb-12 text-text-secondary relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-border-subtle">
          {/* Col 1 & 2: Brand & Statement */}
          <div className="lg:col-span-2 space-y-6">
            <BrandLogo size="lg" />
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              DSUS Car Care Center is Al Quoz's dedicated atelier for luxury automotive customization, multimedia architecture, auto electronics diagnosis, bespoke upholstery, lighting engineering and performance mechanical care.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COMPANY_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background-elevated border border-border-DEFAULT flex items-center justify-center text-text-secondary hover:text-brand-gold hover:border-brand-gold/50 transition-all"
                aria-label="DSUS VIP Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background-elevated border border-border-DEFAULT flex items-center justify-center text-text-secondary hover:text-brand-gold hover:border-brand-gold/50 transition-all"
                aria-label="DSUS VIP Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-medium text-[#25D366] hover:bg-[#25D366]/20 transition-all"
              >
                <span>WhatsApp Concierge</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 3: Six Dedicated Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Specialist Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.slug}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="hover:text-brand-gold transition-colors inline-block"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">
                  About DSUS Center
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-gold transition-colors">
                  All Services Matrix
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-brand-gold transition-colors">
                  Transformation Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-brand-gold transition-colors">
                  Automotive Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold transition-colors">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Al Quoz Facility
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`tel:${COMPANY_DATA.phone.raw}`}
                  className="hover:text-brand-gold transition-colors font-medium"
                >
                  {COMPANY_DATA.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="hover:text-brand-gold transition-colors"
                >
                  {COMPANY_DATA.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <div>{COMPANY_DATA.hours.days}</div>
                  <div className="text-white font-medium">{COMPANY_DATA.hours.time}</div>
                </div>
              </div>
            </div>

            {/* Directions button */}
            <div className="pt-2">
              <a
                href={COMPANY_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:text-white transition-colors"
              >
                <span>Get Driving Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter & Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-muted">
          <div>
            © {new Date().getFullYear()} DSUS VIP / DSUS Car Care Center. All Rights Reserved. Al Quoz, Dubai, UAE.
          </div>

          {/* Newsletter subscription form */}
          <div className="w-full md:w-auto">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Join DSUS VIP Journal..."
                  className="bg-background-elevated border border-border-DEFAULT rounded-lg px-3 py-1.5 text-xs text-white placeholder-text-muted focus:outline-none focus:border-brand-gold w-56"
                />
                <button
                  type="submit"
                  className="p-1.5 rounded-lg bg-brand-gold text-black hover:bg-brand-gold-light transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-1.5 text-brand-gold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed to DSUS Journal</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
