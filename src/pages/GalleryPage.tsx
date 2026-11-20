import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Lightbox } from '../components/Lightbox';
import { PORTFOLIO_DATA, BEFORE_AFTER_ITEMS, ProjectItem } from '../data/portfolio';
import { Sparkles, Maximize2, Calendar, MessageSquare, Check, X } from 'lucide-react';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/company';

interface GalleryPageProps {
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Exterior Customization',
    'Interior & Upholstery',
    'Lighting Solutions',
    'Multimedia & Sound',
    'Electronics & Mechanical',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  const openModal = (proj: ProjectItem) => {
    setSelectedProject(proj);
  };

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Automotive Transformations Portfolio | DSUS VIP Dubai",
    "description": "Browse real project transformations completed at DSUS Car Care Center in Al Quoz, Dubai. PPF, custom upholstery, multimedia retrofits, and lighting.",
    "url": "https://dsusvip.ae/our-work"
  };

  return (
    <>
      <SeoHead
        title="Our Work & Transformations Gallery | DSUS VIP Dubai"
        description="Explore the official portfolio of DSUS Car Care Center in Al Quoz, Dubai. Featuring real transformations on Mercedes G63, Porsche 911, Rolls-Royce, Range Rover, and BMW."
        canonicalPath="/our-work"
        schema={gallerySchema}
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#07080A] border-b border-border-subtle overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-brand-gold/30">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-medium">
              Al Quoz Atelier Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-[0.06em] text-white">
            Automotive <br />
            <span className="gold-gradient-text">Transformations.</span>
          </h1>

          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Every project completed in our workshop reflects meticulous preparation, OEM standards, and an obsession with detail.
          </p>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-16 sm:py-24 bg-[#090A0C] border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Comparison</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-wider mt-1">
              Before & After Precision.
            </h2>
          </div>

          <BeforeAfterSlider
            beforeImage={BEFORE_AFTER_ITEMS[0].beforeImage}
            afterImage={BEFORE_AFTER_ITEMS[0].afterImage}
            beforeLabel="Oxidized Swirled Clearcoat"
            afterLabel="Mirror Gloss 8.5 Mil PPF"
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
          />
        </div>
      </section>

      {/* Gallery Grid & Filters */}
      <section className="py-20 bg-[#0B0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-gold text-black shadow-glow-gold'
                    : 'bg-background-surface text-text-secondary border border-border-subtle hover:border-brand-gold/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-Style Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => openModal(proj)}
                className="group bg-background-surface border border-border-DEFAULT hover:border-brand-gold/50 rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-background-elevated">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/80 border border-white/10 text-[10px] uppercase font-bold tracking-wider text-brand-gold backdrop-blur-md">
                    {proj.tag}
                  </div>

                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono text-brand-gold block font-semibold">
                      {proj.vehicle}
                    </span>
                    <h3 className="text-base font-display font-bold text-white mt-0.5 group-hover:text-brand-gold transition-colors leading-snug">
                      {proj.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px]">
                    <span className="text-text-muted">{proj.category}</span>
                    <span className="text-brand-gold font-semibold uppercase tracking-wider group-hover:underline">
                      View Project Scope →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-2xl bg-background-surface border border-border-DEFAULT rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-text-muted hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="relative h-72 rounded-xl overflow-hidden border border-border-subtle">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setLightboxImage(selectedProject.image)}
                  className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 text-white text-xs flex items-center gap-1.5 backdrop-blur-md hover:bg-black"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Fullscreen</span>
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-brand-gold block uppercase font-bold tracking-wider">
                  {selectedProject.vehicle} • {selectedProject.year}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-text-secondary mt-3 leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-border-subtle">
                <span className="text-xs font-semibold uppercase tracking-wider text-white block">
                  Project Scope Delivered:
                </span>
                <div className="space-y-1.5">
                  {selectedProject.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                      <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenBooking();
                  }}
                  className="w-full sm:w-auto flex-1 py-3 px-6 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Inquire for Similar Project</span>
                </button>

                <a
                  href={createWhatsAppUrl(`Hello DSUS VIP, I saw the ${selectedProject.title} project on your website and would like a quote for my car.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-6 rounded-lg bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for full screen view */}
      <Lightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        imageUrl={lightboxImage || ''}
      />
    </>
  );
};
