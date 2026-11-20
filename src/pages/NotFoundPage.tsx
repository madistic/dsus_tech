import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { ArrowLeft, Home, Wrench } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="404 Page Not Found | DSUS VIP Dubai"
        description="The requested page could not be located on the DSUS VIP website."
      />

      <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 bg-[#07080A]">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="font-mono text-7xl font-extrabold text-brand-gold tracking-widest">
            404
          </div>

          <h1 className="text-3xl font-display font-bold text-white uppercase tracking-wider">
            Page Not Located
          </h1>

          <p className="text-sm text-text-secondary leading-relaxed font-light">
            The road ends here. The page you are seeking may have moved or been retired. Return to our main atelier or explore our specialist services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-gold text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-gold hover:bg-brand-gold-light transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-background-surface border border-border-DEFAULT text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-background-elevated transition-all"
            >
              <Wrench className="w-4 h-4 text-brand-gold" />
              <span>Browse Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
