import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/company';
import { 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  Award, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  MessageSquare, 
  ArrowRight 
} from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About DSUS VIP Car Care Center",
    "description": "Discover DSUS Car Care Center in Al Quoz Industrial 2, Dubai. Founded with a vision to provide total automotive care under one roof.",
    "url": "https://dsusvip.ae/about"
  };

  return (
    <>
      <SeoHead
        title="About DSUS VIP | Master Automotive Atelier in Al Quoz, Dubai"
        description="Learn about DSUS Car Care Center: over four years in Al Quoz Industrial 2, a team of eight certified technicians, climate-controlled bays, and an uncompromising commitment to automotive craftsmanship."
        canonicalPath="/about"
        schema={aboutSchema}
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#07080A] border-b border-border-subtle overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/assets/workshop/workshop-main-bay.jpg"
            alt="DSUS VIP Workshop Bays"
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-brand-gold/30">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-medium">
              Our Heritage & Philosophy
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-[0.06em] text-white">
            Engineering Precision. <br />
            <span className="gold-gradient-text">Crafting Distinction.</span>
          </h1>

          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            For over four years, DSUS Car Care Center has served Dubai's automotive enthusiasts from our dedicated facility in Al Quoz Industrial 2.
          </p>
        </div>
      </section>

      {/* The DSUS Story Section */}
      <section className="py-20 sm:py-28 bg-[#090A0C] border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
                The Company Story
              </span>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider leading-tight">
                Built to Solve Dubai's <br />
                <span className="gold-gradient-text">Fragmented Workshop Problem.</span>
              </h2>

              <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed font-light">
                <p>
                  In a thriving automotive hub like Dubai, car owners take profound pride in their vehicles. However, the ownership experience was historically marred by fragmentation: one garage for engine diagnostics, an independent upholstery shop across town for leather repair, a separate detailer for window tinting, and an electronics installer elsewhere for CarPlay upgrades.
                </p>
                <p>
                  DSUS was founded with a singular conviction: to establish a cohesive, all-inclusive automotive destination where craftsmanship, cutting-edge technology, and mechanical engineering operate seamlessly under one roof.
                </p>
                <p>
                  Today, located on Al Asayel Street in Al Quoz Industrial 2, our workshop features six specialized bays and a dedicated team of eight certified technicians. We treat every vehicle — whether a bespoke supercar, a luxury German sedan, or a daily commuter — with the same meticulous standards of care.
                </p>
              </div>

              {/* Verified Facts Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-background-surface border border-border-subtle">
                  <div className="font-mono text-2xl font-bold text-brand-gold">{COMPANY_DATA.stats.experienceYears}</div>
                  <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">Years in Al Quoz</div>
                </div>
                <div className="p-4 rounded-xl bg-background-surface border border-border-subtle">
                  <div className="font-mono text-2xl font-bold text-white">{COMPANY_DATA.stats.techniciansCount}</div>
                  <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">Certified Technicians</div>
                </div>
                <div className="p-4 rounded-xl bg-background-surface border border-border-subtle">
                  <div className="font-mono text-2xl font-bold text-brand-gold">{COMPANY_DATA.stats.baysCount}</div>
                  <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">Specialized Bays</div>
                </div>
              </div>
            </div>

            {/* Facility Images Grid */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-border-DEFAULT shadow-2xl">
                <img
                  src="/assets/workshop/workshop-customization-bay.jpg"
                  alt="DSUS VIP Cleanroom Bay"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-border-DEFAULT shadow-lg">
                  <img
                    src="/assets/workshop/workshop-detailing-lift.jpg"
                    alt="Hydraulic Hoist Station"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-border-DEFAULT shadow-lg">
                  <img
                    src="/assets/workshop/workshop-tech-diagnostics.jpg"
                    alt="Electronics Diagnostics Bench"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our 4 Craftsmanship Pillars */}
      <section className="py-20 sm:py-28 bg-[#0B0D10] border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
              Foundational Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider mt-2">
              Our Service Philosophy.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-background-surface border border-border-DEFAULT space-y-3">
              <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold w-fit">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">Genuine Materials Only</h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                We never substitute inferior synthetics. From Avery Dennison TPU films to Italian Alcantara and OEM filters, provenance is verified.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background-surface border border-border-DEFAULT space-y-3">
              <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">Non-Invasive Architecture</h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Our multimedia and lighting installations use bespoke plug-and-play bypass harnesses. Zero cutting of factory wire looms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background-surface border border-border-DEFAULT space-y-3">
              <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold w-fit">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">Transparent Diagnostics</h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                We diagnose before we dismantle. Every recommended repair is accompanied by photographic proof and digital telemetry reports.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background-surface border border-border-DEFAULT space-y-3">
              <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold w-fit">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">Airbag & RTA Compliance</h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                All upholstery modifications comply with computerized side-airbag tear seam standards, and lighting retrofits adhere to RTA road-legal cutoffs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility & Location Callout */}
      <section className="py-20 bg-[#090A0C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-wider">
            Visit Our Al Quoz Atelier
          </h2>
          <p className="text-sm text-text-secondary max-w-xl mx-auto font-light">
            Located conveniently on Al Asayel Street in Al Quoz Industrial 2, Dubai. Experience our craftsmanship firsthand or meet with our senior engineers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-glow-gold"
            >
              Schedule Facility Consultation
            </button>
            <a
              href={COMPANY_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-background-surface hover:bg-background-elevated text-white border border-border-DEFAULT text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
