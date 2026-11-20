import React, { useState, useEffect } from 'react';
import { X, Calendar, Car, Wrench, Phone, Mail, User, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/company';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceSlug?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultServiceSlug = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: defaultServiceSlug || 'car-accessories-customization',
    preferredDate: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  useEffect(() => {
    if (defaultServiceSlug) {
      setFormData((prev) => ({ ...prev, service: defaultServiceSlug }));
    }
  }, [defaultServiceSlug]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errs.phone = 'Please provide a valid contact number';
    }
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.vehicle.trim()) {
      errs.vehicle = 'Vehicle make & model is required (e.g. Mercedes G63, Porsche 911)';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate server communication & persistent store
    setTimeout(() => {
      const code = `DSUS-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceCode(code);

      try {
        const existing = JSON.parse(localStorage.getItem('dsus_appointments') || '[]');
        existing.push({
          ...formData,
          code,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('dsus_appointments', JSON.stringify(existing));
      } catch (err) {
        console.warn('Storage save skipped', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const selectedServiceObj = SERVICES_DATA.find((s) => s.slug === formData.service);
  const serviceName = selectedServiceObj ? selectedServiceObj.title : 'General Automotive Service';

  const generateWhatsAppMessage = () => {
    return `Hello DSUS VIP,\n\nI would like to confirm my appointment request.\n\n*Reference Code:* ${referenceCode}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Vehicle:* ${formData.vehicle}\n*Service:* ${serviceName}\n*Preferred Date:* ${formData.preferredDate}\n*Notes:* ${formData.notes || 'None'}\n\nPlease confirm availability at your Al Quoz facility.`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-background-surface border border-border-DEFAULT rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden">
        {/* Top gold hairline accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-text-muted hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Close appointment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                VIP Concierge Booking
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                Schedule Your Appointment
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                Al Asayel St, Al Quoz Industrial 2 • Monday to Saturday, 9:00 AM – 9:00 PM
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1">
                  Full Name <span className="text-brand-gold">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rashid Al-Maktoum"
                    className={`w-full pl-10 pr-4 py-2.5 bg-background-elevated border ${
                      errors.name ? 'border-red-500' : 'border-border-DEFAULT'
                    } rounded-lg text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-gold transition-colors`}
                  />
                </div>
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1">
                    Phone Number <span className="text-brand-gold">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className={`w-full pl-10 pr-4 py-2.5 bg-background-elevated border ${
                        errors.phone ? 'border-red-500' : 'border-border-DEFAULT'
                      } rounded-lg text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-gold transition-colors`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1">
                    Email Address <span className="text-text-muted text-[10px]">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.ae"
                      className={`w-full pl-10 pr-4 py-2.5 bg-background-elevated border ${
                        errors.email ? 'border-red-500' : 'border-border-DEFAULT'
                      } rounded-lg text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-gold transition-colors`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Vehicle Make/Model */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1">
                  Vehicle Make, Model & Year <span className="text-brand-gold">*</span>
                </label>
                <div className="relative">
                  <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input
                    type="text"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    placeholder="e.g. 2024 Mercedes-AMG G63 or Porsche 911 GT3"
                    className={`w-full pl-10 pr-4 py-2.5 bg-background-elevated border ${
                      errors.vehicle ? 'border-red-500' : 'border-border-DEFAULT'
                    } rounded-lg text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-gold transition-colors`}
                  />
                </div>
                {errors.vehicle && <p className="text-xs text-red-400 mt-1">{errors.vehicle}</p>}
              </div>

              {/* Service & Preferred Date Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1">
                    Service Required <span className="text-brand-gold">*</span>
                  </label>
                  <div className="relative">
                    <Wrench className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-background-elevated border border-border-DEFAULT rounded-lg text-white text-sm focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.slug} value={srv.slug} className="bg-background-surface">
                          {srv.title}
                        </option>
                      ))}
                      <option value="other-custom" className="bg-background-surface">
                        Bespoke Custom Project
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1">
                    Preferred Date <span className="text-brand-gold">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 bg-background-elevated border ${
                        errors.preferredDate ? 'border-red-500' : 'border-border-DEFAULT'
                      } rounded-lg text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-gold transition-colors`}
                    />
                  </div>
                  {errors.preferredDate && <p className="text-xs text-red-400 mt-1">{errors.preferredDate}</p>}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1">
                  Project Notes or Symptoms <span className="text-text-muted text-[10px]">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your requirements (e.g. Satin PPF quote, Apple CarPlay retrofit, Alcantara roof, brake check)..."
                  className="w-full px-4 py-2.5 bg-background-elevated border border-border-DEFAULT rounded-lg text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-black font-semibold tracking-wider text-sm uppercase transition-all duration-300 shadow-glow-gold hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Securing Booking...
                    </span>
                  ) : (
                    <>
                      <span>Confirm Appointment Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-text-muted text-center">
                We respect your privacy. No spam. A technician will contact you to confirm bay availability.
              </p>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Request Registered
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">
                Thank You, {formData.name}
              </h3>
              <p className="text-sm text-text-secondary max-w-md mx-auto mt-2">
                Your appointment request for your <span className="text-white font-medium">{formData.vehicle}</span> has been received. Our team at Al Quoz will review bay allocation.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="bg-background-elevated border border-border-DEFAULT rounded-xl p-4 max-w-sm mx-auto">
              <span className="text-[10px] uppercase tracking-wider text-text-muted block">
                Booking Reference Code
              </span>
              <span className="font-mono text-xl font-bold text-brand-gold tracking-wider">
                {referenceCode}
              </span>
              <div className="text-xs text-text-secondary mt-2 pt-2 border-t border-border-subtle flex justify-between">
                <span>Date: {formData.preferredDate}</span>
                <span>Bay: Al Quoz #2</span>
              </div>
            </div>

            {/* WhatsApp Direct Action */}
            <div className="space-y-3 max-w-md mx-auto">
              <a
                href={createWhatsAppUrl(generateWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs uppercase tracking-wider text-text-muted hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
