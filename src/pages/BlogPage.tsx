import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BLOGS_DATA } from '../data/blogs';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', 'PPF Dubai', 'Ceramic Coating', 'Apple CarPlay Dubai', 'Starlight Roof Dubai', 'Car Maintenance Dubai'];

  const filteredPosts = selectedTag === 'All'
    ? BLOGS_DATA
    : BLOGS_DATA.filter((p) => p.tags.includes(selectedTag));

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "DSUS VIP Automotive Journal",
    "description": "Expert automotive care, customization, PPF, electronics, and maintenance insights for Dubai and UAE vehicle owners.",
    "url": "https://dsusvip.ae/blog"
  };

  return (
    <>
      <SeoHead
        title="Automotive Journal & Dubai Car Care Guides | DSUS VIP"
        description="Authoritative automotive knowledge, technical guides, and car customization insights curated by the master technicians at DSUS Car Care Center, Al Quoz, Dubai."
        canonicalPath="/blog"
        schema={blogSchema}
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#07080A] border-b border-border-subtle overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-brand-gold/30">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-medium">
              Technical Insights & Guides
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-[0.06em] text-white">
            The Automotive <br />
            <span className="gold-gradient-text">Journal.</span>
          </h1>

          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            In-depth engineering perspectives, UAE climate protection strategies, and technical guides from our Al Quoz workshop.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-[#090A0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tag Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                  selectedTag === tag
                    ? 'bg-brand-gold text-black shadow-glow-gold'
                    : 'bg-background-surface text-text-secondary border border-border-subtle hover:border-brand-gold/40 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-background-surface border border-border-DEFAULT hover:border-brand-gold/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div className="relative h-64 overflow-hidden bg-background-elevated">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 text-[10px] font-bold uppercase tracking-wider text-brand-gold border border-white/10 backdrop-blur-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-text-muted mb-2 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-brand-gold transition-colors leading-snug">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-3 font-light">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-brand-gold/20 flex items-center justify-center text-[10px] font-bold text-brand-gold font-mono">
                        DS
                      </div>
                      <span className="text-xs text-text-muted font-medium">{post.author}</span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
