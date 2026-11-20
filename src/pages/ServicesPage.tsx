import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/company';
import { 
  ShieldCheck, 
  Monitor, 
  Cpu, 
  Sparkles, 
  Wrench, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Calendar,
  MessageSquare 
} from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: (serviceSlug?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const serviceIcons: Record<string, React.ReactNode> = {
    Shield: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
    Monitor: <Monitor className="w-6 h-6 text-brand-gold" />,
    Cpu: <Cpu className="w-6 h-6 text-brand-gold" />,
    Sparkles: <Sparkles className="w-6 h-6 text-brand-gold" />,
    Wrench: <Wrench className="w-6 h-6 text-brand-gold" />,
    Zap: <Zap className="w-6 h-6 text-brand-gold" />
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "AutoRepair",
      "name": "DSUS VIP Car Care Center",
      "url": "https://dsusvip.ae/"
    },
    "serviceType": "Automotive Customization, Diagnostics & Mechanical Care",
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    }
  };

  return (
    <>
      <SeoHead
        title="Comprehensive Automotive Services | DSUS VIP Dubai"
        description="Explore the six core automotive service divisions of DSUS Car Care Center in Al Quoz, Dubai. From PPF & vinyl wraps to Apple CarPlay retrofits, ECU diagnostics, and custom upholstery."
        canonicalPath="/services"
        schema={servicesSchema}
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#07080A] border-b border-border-subtle overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-brand-gold/30">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-medium">
              Al Quoz Automotive Atelier
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-[0.06em] text-white">
            Six Specialized <br />
            <span className="gold-gradient-text">Automotive Disciplines.</span>
          </h1>

          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Everything your vehicle needs under one roof. Executed by dedicated certified technicians with zero third-party compromise.
          </p>
        </div>
      </section>

      {/* Services List in Alternating Full-Width Sections */}
      <section className="py-20 bg-[#090A0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES_DATA.map((srv, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={srv.slug}
                id={srv.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-border-subtle first:border-0 first:pt-0"
              >
                {/* Image Col */}
                <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-border-DEFAULT shadow-2xl group">
                    <img
                      src={srv.heroImage}
                      alt={srv.title}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md">
                      {serviceIcons[srv.iconName]}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-xs font-mono uppercase text-brand-gold block font-semibold">
                        0{idx + 1} • {srv.tagline}
                      </span>
                      <h2 className="text-2xl font-display font-bold text-white mt-1">
                        {srv.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Text Col */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
                      Discipline 0{idx + 1}
                    </span>
                    <h3 className="text-3xl font-display font-bold text-white mt-1">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-light mt-3">
                      {srv.fullDescription}
                    </p>
                  </div>

                  {/* Subservices Pill List */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white block">
                      Sub-Services Included:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.subServices.map((sub, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-text-muted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                          <span>{sub.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/services/${srv.slug}`}
                      className="px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-glow-gold flex items-center gap-2"
                    >
                      <span>Explore Dedicated Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => onOpenBooking(srv.slug)}
                      className="px-5 py-3 rounded-lg bg-background-elevated hover:bg-background-hover text-white border border-border-DEFAULT text-xs uppercase tracking-wider font-semibold transition-all"
                    >
                      Book This Bay
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
