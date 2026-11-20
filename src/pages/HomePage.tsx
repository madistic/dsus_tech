import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Lightbox } from '../components/Lightbox';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import { SERVICES_DATA } from '../data/services';
import { PORTFOLIO_DATA, BEFORE_AFTER_ITEMS, ProjectItem } from '../data/portfolio';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { BLOGS_DATA } from '../data/blogs';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/company';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  Wrench, 
  Zap, 
  Monitor, 
  Check, 
  Star, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  Maximize2,
  Clock,
  Award,
  ChevronDown
} from 'lucide-react';

interface HomePageProps {
  onOpenBooking: (serviceSlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('All');
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Exterior Customization', 'Interior & Upholstery', 'Lighting Solutions', 'Multimedia & Sound', 'Electronics & Mechanical'];

  const filteredProjects = selectedGalleryCategory === 'All'
    ? PORTFOLIO_DATA.slice(0, 6)
    : PORTFOLIO_DATA.filter(p => p.category === selectedGalleryCategory);

  const openProjectLightbox = (project: ProjectItem) => {
    setLightboxProject(project);
    setActiveLightboxImage(project.image);
  };

  const serviceIcons: Record<string, React.ReactNode> = {
    Shield: <ShieldCheck className="w-5 h-5 text-brand-gold" />,
    Monitor: <Monitor className="w-5 h-5 text-brand-gold" />,
    Cpu: <Cpu className="w-5 h-5 text-brand-gold" />,
    Sparkles: <Sparkles className="w-5 h-5 text-brand-gold" />,
    Wrench: <Wrench className="w-5 h-5 text-brand-gold" />,
    Zap: <Zap className="w-5 h-5 text-brand-gold" />
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "DSUS VIP Car Care Center",
    "description": "Dubai's premier automotive customization, multimedia, auto electronics diagnosis, bespoke interior upholstery, lighting, and mechanical care center in Al Quoz.",
    "url": "https://dsusvip.ae/",
    "telephone": "+971565694440",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Asayel St, Al Quoz Industrial 2",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "180"
    }
  };

  return (
    <>
      <SeoHead
        title="DSUS VIP | Premier Automotive Customization, Electronics & Care | Dubai"
        description="Al Quoz's premier automotive atelier: Self-healing PPF, wireless Apple CarPlay, ECU electronics diagnosis, bespoke Nappa leather & Alcantara upholstery, starlight headliners, and master mechanical care."
        canonicalPath="/"
        schema={homeSchema}
      />

      {/* =========================================================================
          SECTION 1: CINEMATIC HERO REVEAL
      ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07080A]">
        {/* Background Image with Cinematic Grading */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero/hero-supercar-cinematic.jpg"
            alt="DSUS VIP Automotive Atelier"
            className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/workshop/workshop-main-bay.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/40 to-black/70" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#090A0C]/50 to-[#090A0C]" />
          <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
          <ScrollReveal variant="fade-down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-brand-gold/30 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-medium">
                Al Quoz Industrial 2 • Dubai
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale-up" delay={0.2} duration={0.9}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-[0.08em] uppercase text-white leading-[1.05] drop-shadow-2xl">
              Engineered For <br />
              <span className="gold-gradient-text">Your Drive.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.35}>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed text-balance">
              Premium automotive customization, multimedia architecture and mechanical care. Everything your vehicle needs, under one roof in Dubai.
            </p>
          </ScrollReveal>

          {/* Action CTAs */}
          <ScrollReveal variant="fade-up" delay={0.45}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#services-section"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-black font-semibold tracking-wider text-xs uppercase transition-all duration-300 shadow-glow-gold hover:shadow-2xl flex items-center justify-center gap-2.5 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-background-elevated/80 hover:bg-background-elevated text-white border border-border-DEFAULT hover:border-brand-gold/50 font-semibold tracking-wider text-xs uppercase transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-4 h-4 text-brand-gold" />
                <span>Book An Appointment</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Key Metrics Strip */}
          <ScrollReveal variant="fade-up" delay={0.6}>
            <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-white">4+ Years</div>
                <div className="text-[11px] uppercase tracking-wider text-text-muted mt-0.5">Al Quoz Destination</div>
              </div>
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-brand-gold">8 Specialists</div>
                <div className="text-[11px] uppercase tracking-wider text-text-muted mt-0.5">Certified Technicians</div>
              </div>
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-white">6 Bays</div>
                <div className="text-[11px] uppercase tracking-wider text-text-muted mt-0.5">Dedicated Workstations</div>
              </div>
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-brand-gold">4.9 ★</div>
                <div className="text-[11px] uppercase tracking-wider text-text-muted mt-0.5">Verified Google Rating</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Minimal Scroll Down Indicator */}
        <a
          href="#brand-intro"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 rounded-full text-text-muted hover:text-white transition-colors duration-300 flex flex-col items-center gap-1 z-10"
          aria-label="Scroll to brand overview"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] font-light">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-brand-gold" />
        </a>
      </section>


      {/* =========================================================================
          SECTION 2: EDITORIAL BRAND INTRODUCTION
      ========================================================================= */}
      <section id="brand-intro" className="py-24 sm:py-32 bg-[#090A0C] border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Statement */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal variant="fade-up">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                  <span className="w-6 h-px bg-brand-gold" />
                  <span>The DSUS Difference</span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-[0.06em] text-white leading-tight">
                  More Than Car Care. <br />
                  <span className="gold-gradient-text">A Complete Automotive Experience.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.2}>
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-light">
                  Too often in Dubai, automotive care is fragmented. You visit one garage for mechanical repairs, another for paint protection, and a third for audio or interior trim. Each handoff introduces miscommunication, delayed timelines, and inconsistent standards.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.25}>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light">
                  DSUS Car Care Center was founded to eliminate this divide. Located on Al Asayel Street in Al Quoz Industrial 2, our facility unifies master craftsmanship across all six automotive disciplines under one climate-controlled roof. From dealer-level ECU electronic diagnostics to hand-stitched Alcantara headliners and self-healing PPF, every project is managed in-house by our specialized team of eight technicians.
                </p>
              </ScrollReveal>

              {/* Feature Badges */}
              <ScrollReveal variant="fade-up" delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-background-surface border border-border-subtle hover:border-brand-gold/30 transition-colors">
                    <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Uncompromised Standards</h3>
                      <p className="text-[12px] text-text-muted mt-0.5">Tier-1 German & Italian materials with verified warranties.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-background-surface border border-border-subtle hover:border-brand-gold/30 transition-colors">
                    <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Punctual Delivery</h3>
                      <p className="text-[12px] text-text-muted mt-0.5">Strict project timelines with regular photo & video progress updates.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.35}>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold hover:text-white transition-colors font-semibold group"
                  >
                    <span>Read Our Full Story & Facility Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Workshop Image with Subtle Parallax Zoom */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal variant="fade-left" delay={0.2} duration={0.85}>
                <div className="relative rounded-2xl overflow-hidden border border-border-DEFAULT shadow-2xl group" data-cursor="view">
                  <img
                    src="/assets/workshop/workshop-main-bay.jpg"
                    alt="DSUS VIP Al Quoz Workshop"
                    className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-gold block">
                      Al Quoz Industrial 2 Facility
                    </span>
                    <span className="text-white font-display text-lg font-bold block mt-1">
                      Precision Workshop & Cleanroom Bays
                    </span>
                    <span className="text-text-muted text-xs block mt-0.5">
                      Climate-controlled positive airflow bays for flawless film, interior, and diagnostics work.
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 3: SIX CORE SERVICES OVERVIEW (Staggered Animation)
      ========================================================================= */}
      <section id="services-section" className="py-24 sm:py-32 bg-[#0B0D10] border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3">
                  <span className="w-6 h-px bg-brand-gold" />
                  <span>Our Capabilities</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-[0.06em] text-white">
                  Six Disciplines. <br />
                  <span className="gold-gradient-text">One Exceptional Standard.</span>
                </h2>
              </div>
              <p className="text-text-secondary text-sm max-w-md">
                Each discipline is directed by specialized automotive technicians utilizing dealer-grade diagnostic equipment, cleanroom bays, and manufacturer-certified materials.
              </p>
            </div>
          </ScrollReveal>

          {/* Staggered 6-Card Grid */}
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {SERVICES_DATA.map((srv, idx) => (
                <StaggerItem key={srv.slug}>
                  <div
                    className="group relative bg-background-surface border border-border-DEFAULT hover:border-brand-gold/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between h-full"
                    data-cursor="view"
                  >
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden bg-background-elevated">
                      <img
                        src={srv.heroImage}
                        alt={srv.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-surface via-transparent to-black/30" />

                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-black/75 border border-white/10 backdrop-blur-md">
                        {serviceIcons[srv.iconName]}
                      </div>

                      <div className="absolute top-4 right-4 font-mono text-xs font-semibold text-text-muted px-2.5 py-1 rounded-md bg-black/60 border border-white/5">
                        0{idx + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-gold transition-colors">
                          {srv.title}
                        </h3>
                        <p className="text-xs text-text-secondary leading-relaxed mt-2.5 line-clamp-3">
                          {srv.summary}
                        </p>
                      </div>

                      {/* Feature highlights */}
                      <div className="space-y-1.5 pt-2 border-t border-border-subtle">
                        {srv.features.slice(0, 2).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-[12px] text-text-muted">
                            <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Link CTA */}
                      <div className="pt-2 flex items-center justify-between">
                        <Link
                          to={`/services/${srv.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-brand-gold transition-colors"
                        >
                          <span>Explore Service</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <button
                          onClick={() => onOpenBooking(srv.slug)}
                          className="text-[11px] uppercase tracking-wider text-text-muted hover:text-brand-gold transition-colors"
                        >
                          Book Bay
                        </button>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>


      {/* =========================================================================
          SECTION 4: SIGNATURE EDITORIAL SHOWCASE (Alternating Reveals)
      ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#090A0C] border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {/* Showcase Item 1: PPF & Exterior */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <ScrollReveal variant="fade-right">
                <div className="rounded-2xl overflow-hidden border border-border-DEFAULT shadow-2xl relative" data-cursor="view">
                  <img
                    src="/assets/services/ppf-detailing-wrap.jpg"
                    alt="PPF and Ceramic Coating"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 border border-brand-gold/40 text-[10px] uppercase font-bold tracking-widest text-brand-gold backdrop-blur-md">
                    Signature Specialty
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <ScrollReveal variant="fade-left">
                <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  Climate-Engineered Protection
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight mt-1">
                  Self-Healing Armor for Dubai Highways.
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light mt-3">
                  High-speed sand abrasion on the E11 and harsh UV sunlight will oxidize factory clear coats within months. Our 8.5-mil self-healing TPU films are plotted digitally with rolled edges for invisible, razor-sharp coverage.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="border-l-2 border-brand-gold pl-3">
                    <div className="font-mono text-lg font-bold text-white">8.5 Mil</div>
                    <div className="text-xs text-text-muted">Ballistic Stone Shield</div>
                  </div>
                  <div className="border-l-2 border-brand-gold pl-3">
                    <div className="font-mono text-lg font-bold text-white">100% Invisible</div>
                    <div className="text-xs text-text-muted">Precision Plotter Cut</div>
                  </div>
                </div>
                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to="/services/car-accessories-customization"
                    className="px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-glow-gold"
                  >
                    Explore PPF & Styling
                  </Link>
                  <a
                    href={createWhatsAppUrl("Hello DSUS VIP, I want to enquire about PPF & exterior protection.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-white flex items-center gap-1.5"
                  >
                    <span>Quick WhatsApp Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Showcase Item 2: Starlight & Bespoke Upholstery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <ScrollReveal variant="fade-right">
                <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  Bespoke Interior Atelier
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight mt-1">
                  Celestial Ceilings & German Nappa Leather.
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light mt-3">
                  Elevate your driving environment into a sanctuary. We hand-craft custom Starlight Headliners featuring over 1,200 twinkling PMMA fibers and dual shooting star animations, complemented by glove-soft Bavarian Nappa leather tailored to your exact color vision.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="border-l-2 border-brand-gold pl-3">
                    <div className="font-mono text-lg font-bold text-white">1,400+ Fibers</div>
                    <div className="text-xs text-text-muted">Twinkle & Meteor Modes</div>
                  </div>
                  <div className="border-l-2 border-brand-gold pl-3">
                    <div className="font-mono text-lg font-bold text-white">Airbag Certified</div>
                    <div className="text-xs text-text-muted">Computerized Seam Burst</div>
                  </div>
                </div>
                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to="/services/lighting-solutions"
                    className="px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-glow-gold"
                  >
                    View Lighting & Starlight
                  </Link>
                  <Link
                    to="/services/upholstery-interior"
                    className="text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-white flex items-center gap-1.5"
                  >
                    <span>Interior Upholstery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-6 relative">
              <ScrollReveal variant="fade-left">
                <div className="rounded-2xl overflow-hidden border border-border-DEFAULT shadow-2xl relative" data-cursor="view">
                  <img
                    src="/assets/services/starlight-ambient-roof.jpg"
                    alt="Starlight Headliner Rolls Royce Style"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded bg-black/80 border border-brand-gold/40 text-[10px] uppercase font-bold tracking-widest text-brand-gold backdrop-blur-md">
                    Hand-Crafted in Al Quoz
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 5: WHY CHOOSE DSUS (Staggered Advantages)
      ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#0B0D10] border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3">
                <span className="w-6 h-px bg-brand-gold" />
                <span>Built On Trust</span>
                <span className="w-6 h-px bg-brand-gold" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-[0.06em] text-white">
                Why Discerning Drivers <br />
                <span className="gold-gradient-text">Choose DSUS VIP.</span>
              </h2>
              <p className="text-text-secondary text-sm sm:text-base mt-4 font-light">
                We stand apart through radical honesty, master technicians, and a refusal to cut corners with cheap materials or rushed timelines.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="bg-background-surface border border-border-DEFAULT rounded-2xl p-8 hover:border-brand-gold/40 transition-all space-y-4 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Complete Automotive Solutions</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">
                    No third-party outsourcing. Your car stays within our secure Al Quoz facility, handled start-to-finish by dedicated specialists.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-background-surface border border-border-DEFAULT rounded-2xl p-8 hover:border-brand-gold/40 transition-all space-y-4 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Certified Materials & Warranties</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">
                    We only apply genuine films from Avery Dennison, 3M, and Inozetek, paired with German Gutermann threads and OEM fluids.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-background-surface border border-border-DEFAULT rounded-2xl p-8 hover:border-brand-gold/40 transition-all space-y-4 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">Dealer-Level Diagnostic Rig</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">
                    Mercedes XENTRY, BMW ISTA, and Audi ODIS interfaces allow us to isolate electrical issues with mathematical certainty.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>


      {/* =========================================================================
          SECTION 6: OUR WORK & TRANSFORMATION GALLERY
      ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#090A0C] border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3">
                  <span className="w-6 h-px bg-brand-gold" />
                  <span>Real Projects</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-[0.06em] text-white">
                  Transformations <br />
                  <span className="gold-gradient-text">Engineered in Al Quoz.</span>
                </h2>
              </div>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
              >
                <span>View Full 2026 Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Interactive Before & After Feature with Drag Cursor attribute */}
          <ScrollReveal variant="scale-up">
            <div className="mb-16">
              <div className="text-xs uppercase tracking-wider text-text-muted mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>Interactive Defect Removal Slider • Drag or Swipe</span>
              </div>
              <div data-cursor="drag">
                <BeforeAfterSlider
                  beforeImage={BEFORE_AFTER_ITEMS[0].beforeImage}
                  afterImage={BEFORE_AFTER_ITEMS[0].afterImage}
                  beforeLabel="Swirled Factory Paint"
                  afterLabel="Mirror Gloss 8.5 Mil PPF"
                  aspectRatio="aspect-[16/9] md:aspect-[21/9]"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedGalleryCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                  selectedGalleryCategory === cat
                    ? 'bg-brand-gold text-black shadow-glow-gold'
                    : 'bg-background-surface text-text-secondary border border-border-subtle hover:border-brand-gold/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <StaggerContainer staggerDelay={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proj) => (
                <StaggerItem key={proj.id}>
                  <div
                    onClick={() => openProjectLightbox(proj)}
                    className="group relative rounded-2xl overflow-hidden border border-border-DEFAULT bg-background-surface cursor-pointer shadow-lg hover:border-brand-gold/50 transition-all duration-300 h-full"
                    data-cursor="view"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                      <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/75 border border-white/10 text-[10px] uppercase font-bold tracking-wider text-brand-gold backdrop-blur-md">
                        {proj.tag}
                      </div>

                      <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-xs font-mono text-brand-gold block">{proj.vehicle}</span>
                        <h3 className="text-base font-display font-bold text-white mt-0.5 group-hover:text-brand-gold transition-colors">
                          {proj.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>


      {/* =========================================================================
          SECTION 7: VERIFIED CUSTOMER REVIEWS (Staggered Cards)
      ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#0B0D10] border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3">
                <span className="w-6 h-px bg-brand-gold" />
                <span>Client Voices</span>
                <span className="w-6 h-px bg-brand-gold" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-[0.06em] text-white">
                Endorsed By <br />
                <span className="gold-gradient-text">Dubai Enthusiasts.</span>
              </h2>
              <div className="flex items-center justify-center gap-1.5 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
                ))}
                <span className="text-white font-mono font-bold text-sm ml-2">4.9 / 5.0</span>
                <span className="text-text-muted text-xs ml-1">(Google Business Citations)</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial Cards */}
          <StaggerContainer staggerDelay={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {TESTIMONIALS_DATA.slice(0, 3).map((test) => (
                <StaggerItem key={test.id}>
                  <div className="bg-background-surface border border-border-DEFAULT rounded-2xl p-7 flex flex-col justify-between hover:border-brand-gold/40 transition-all space-y-6 h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-1 text-brand-gold">
                        {[...Array(test.rating)].map((_, r) => (
                          <Star key={r} className="w-4 h-4 fill-brand-gold" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed italic">
                        "{test.content}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">{test.author}</div>
                        <div className="text-[11px] text-brand-gold font-mono">{test.vehicle}</div>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted px-2 py-0.5 rounded bg-background-elevated">
                        {test.source}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>


      {/* =========================================================================
          SECTION 8: AUTOMOTIVE JOURNAL & INSIGHTS
      ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#090A0C] border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3">
                  <span className="w-6 h-px bg-brand-gold" />
                  <span>Knowledge & Insights</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-[0.06em] text-white">
                  Automotive Journal.
                </h2>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
              >
                <span>Explore All Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOGS_DATA.slice(0, 3).map((post) => (
                <StaggerItem key={post.slug}>
                  <article
                    className="group bg-background-surface border border-border-DEFAULT hover:border-brand-gold/40 rounded-2xl overflow-hidden transition-all flex flex-col justify-between h-full shadow-lg"
                    data-cursor="view"
                  >
                    <div className="relative h-48 overflow-hidden bg-background-elevated">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/80 text-[10px] font-bold uppercase tracking-wider text-brand-gold border border-white/10">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="text-[11px] text-text-muted">{post.date} • {post.readTime}</div>
                        <h3 className="text-base font-display font-bold text-white group-hover:text-brand-gold transition-colors mt-1.5 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mt-2">
                          {post.excerpt}
                        </p>
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-white transition-colors pt-2 border-t border-border-subtle"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>


      {/* =========================================================================
          SECTION 9: FINAL CLOSING CTA
      ========================================================================= */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-[#090A0C] via-[#0E1014] to-[#07080A] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal variant="fade-down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-brand-gold/30">
              <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-medium">
                Al Quoz Industrial 2 • Bookings Open
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale-up" delay={0.1}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-[0.06em] text-white leading-tight">
              Your Vehicle Deserves The <br />
              <span className="gold-gradient-text">DSUS Standard.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              From the smallest upgrade to a complete transformation, let our team of eight specialists help you create the driving experience you want.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-glow-gold hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book An Appointment</span>
              </button>

              <a
                href={createWhatsAppUrl("Hello DSUS VIP, I would like to consult with an engineer regarding my vehicle.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.4}>
            <div className="pt-6 text-xs text-text-muted flex flex-wrap items-center justify-center gap-6">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Al Asayel St, Al Quoz 2, Dubai</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span>Mon – Sat: 9:00 AM – 9:00 PM</span>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox for Gallery */}
      <Lightbox
        isOpen={!!activeLightboxImage}
        onClose={() => setActiveLightboxImage(null)}
        imageUrl={activeLightboxImage || ''}
        title={lightboxProject?.title}
        subtitle={lightboxProject?.vehicle}
      />
    </>
  );
};
