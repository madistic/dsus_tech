import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { getBlogBySlug, BLOGS_DATA } from '../data/blogs';
import { getServiceBySlug } from '../data/services';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/company';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  MessageSquare, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  Share2 
} from 'lucide-react';

interface BlogPostPageProps {
  onOpenBooking: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOGS_DATA.filter((b) => b.slug !== post.slug).slice(0, 2);
  const relatedServices = post.relatedServices.map((s) => getServiceBySlug(s)).filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://dsusvip.ae${post.image}`,
    "datePublished": "2026-10-01T09:00:00+04:00",
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://dsusvip.ae"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DSUS VIP Car Care Center",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dsusvip.ae/assets/logo/dsus-badge.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://dsusvip.ae/blog/${post.slug}`
    }
  };

  return (
    <>
      <SeoHead
        title={`${post.title} | DSUS VIP Journal`}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        ogImage={`https://dsusvip.ae${post.image}`}
        schema={articleSchema}
      />

      {/* Article Header */}
      <article className="pt-36 pb-24 bg-[#090A0C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Back */}
          <div className="mb-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-brand-gold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Automotive Journal</span>
            </Link>
          </div>

          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-gold/15 border border-brand-gold/30 text-[11px] uppercase font-bold tracking-wider text-brand-gold mb-4">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-text-muted mt-6 pb-6 border-b border-border-subtle font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>{post.readTime}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-brand-gold" />
              <span>{post.author}</span>
            </span>
          </div>

          {/* Featured Image */}
          <div className="my-8 rounded-2xl overflow-hidden border border-border-DEFAULT shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-text-secondary text-base leading-relaxed font-light">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="first-of-type:text-lg first-of-type:text-white first-of-type:font-normal">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-border-subtle flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-text-muted mr-2">Tags:</span>
            {post.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded bg-background-surface border border-border-subtle text-xs text-text-secondary"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Callout */}
          <div className="mt-10 p-6 rounded-2xl bg-background-surface border border-border-DEFAULT flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center font-bold text-brand-gold font-mono shrink-0">
              DSUS
            </div>
            <div>
              <div className="text-sm font-bold text-white">{post.author}</div>
              <div className="text-xs text-brand-gold font-mono">{post.authorRole}</div>
              <p className="text-xs text-text-secondary mt-1">
                Authored by certified technicians at DSUS Car Care Center, Al Quoz Industrial 2, Dubai.
              </p>
            </div>
          </div>

          {/* Related Service Consultation Banner */}
          {relatedServices.length > 0 && (
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-background-surface via-background-elevated to-background-surface border border-brand-gold/30 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold block">
                Al Quoz Workshop Service
              </span>
              <h3 className="text-2xl font-display font-bold text-white">
                Interested in {relatedServices[0]?.title}?
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light">
                Consult directly with our engineering team or schedule a bay inspection for your vehicle in Al Quoz Industrial 2.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  Book Inspection
                </button>
                <a
                  href={createWhatsAppUrl(`Hello DSUS VIP, I read your article on ${post.title} and want to discuss this for my vehicle.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* More Articles */}
          <div className="mt-16 pt-12 border-t border-border-subtle">
            <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-wider">
              More From The Journal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/blog/${rel.slug}`}
                  className="group p-5 rounded-xl bg-background-surface border border-border-DEFAULT hover:border-brand-gold/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-gold">{rel.category}</span>
                    <h4 className="text-base font-display font-bold text-white group-hover:text-brand-gold transition-colors mt-1 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="pt-3 text-xs text-text-muted flex items-center gap-1 group-hover:text-white transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
