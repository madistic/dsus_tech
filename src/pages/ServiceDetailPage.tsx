import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { getServiceBySlug, SERVICES_DATA } from '../data/services';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/company';
import { 
  ShieldCheck, 
  Monitor, 
  Cpu, 
  Sparkles, 
  Wrench, 
  Zap, 
  Check, 
  ChevronDown, 
  Calendar, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

interface ServiceDetailPageProps {
  onOpenBooking: (serviceSlug?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const serviceIcons: Record<string, React.ReactNode> = {
    Shield: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
    Monitor: <Monitor className="w-6 h-6 text-brand-gold" />,
    Cpu: <Cpu className="w-6 h-6 text-brand-gold" />,
    Sparkles: <Sparkles className="w-6 h-6 text-brand-gold" />,
    Wrench: <Wrench className="w-6 h-6 text-brand-gold" />,
    Zap: <Zap className="w-6 h-6 text-brand-gold" />
  };

  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 3);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.summary,
    "provider": {
      "@type": "AutoRepair",
      "name": "DSUS VIP Car Care Center",
      "telephone": "+971565694440",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Asayel St, Al Quoz Industrial 2",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    "areaServed": "Dubai",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.subServices.map((sub) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": sub.title,
          "description": sub.description
        }
      }))
    }
  };

  return (
    <>
      <SeoHead
        title={`${service.title} | DSUS VIP Dubai`}
        description={service.summary}
        canonicalPath={`/services/${service.slug}`}
        ogImage={`https://dsusvip.ae${service.heroImage}`}
        schema={serviceSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 bg-[#07080A] border-b border-border-subtle overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover filter brightness-75 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/70 border border-brand-gold/30">
            {serviceIcons[service.iconName]}
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-medium ml-1">
              DSUS Specialist Discipline
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-[0.06em] text-white leading-tight">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-brand-gold font-display max-w-3xl">
            {service.tagline}
          </p>

          <p className="text-sm sm:text-base text-text-secondary max-w-3xl leading-relaxed font-light">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking(service.slug)}
              className="px-8 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-glow-gold flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Bay Consultation</span>
            </button>

            <a
              href={createWhatsAppUrl(`Hello DSUS VIP, I would like to consult with an engineer about ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Technical Specifications Bar */}
      <section className="bg-background-surface border-b border-border-subtle py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.specs.map((spec, i) => (
              <div key={i} className="border-l-2 border-brand-gold/60 pl-4">
                <span className="text-[11px] uppercase tracking-wider text-text-muted block font-medium">
                  {spec.label}
                </span>
                <span className="text-sm sm:text-base font-bold text-white block mt-1">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Services Breakdown */}
      <section className="py-20 sm:py-28 bg-[#090A0C] border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
              Comprehensive Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider mt-2">
              Specific Solutions We Engineer.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.subServices.map((sub, idx) => (
              <div
                key={idx}
                className="bg-background-surface border border-border-DEFAULT rounded-2xl p-7 hover:border-brand-gold/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {sub.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-2.5 font-light">
                    {sub.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle space-y-2">
                  {sub.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-text-muted">
                      <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-28 bg-[#0B0D10] border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider mt-2">
              Our 4-Stage Atelier Process.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-background-surface border border-border-DEFAULT rounded-2xl p-6 relative"
              >
                <div className="font-mono text-3xl font-extrabold text-brand-gold/30 mb-2">
                  {step.step}
                </div>
                <h3 className="text-base font-display font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mt-2 font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-[#090A0C] border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
              Expert Clarifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider mt-2">
              Frequently Asked Questions.
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-background-surface border border-border-DEFAULT rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-white font-medium text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-gold transition-transform duration-300 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border-subtle/50 font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-[#0B0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
                Explore More
              </span>
              <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider mt-1">
                Related Disciplines.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
            >
              All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                to={`/services/${rel.slug}`}
                className="group p-6 rounded-2xl bg-background-surface border border-border-DEFAULT hover:border-brand-gold/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-gold transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-text-secondary line-clamp-2 mt-2">
                    {rel.summary}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-brand-gold group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
