import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/company';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Car, 
  User, 
  Wrench, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  ArrowUpRight 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: 'car-accessories-customization',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.vehicle.trim()) {
      errs.vehicle = 'Vehicle make and model is required';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred appointment date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const code = `DSUS-VIP-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(code);

      try {
        const stored = JSON.parse(localStorage.getItem('dsus_appointments') || '[]');
        stored.push({
          ...formData,
          code,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('dsus_appointments', JSON.stringify(stored));
      } catch (err) {
        console.warn('Local storage error', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const selectedService = SERVICES_DATA.find((s) => s.slug === formData.service);
  const serviceName = selectedService ? selectedService.title : 'General Automotive Service';

  const generateWhatsAppMessage = () => {
    return `Hello DSUS VIP,\n\nI have submitted an appointment enquiry through your website.\n\n*Reference:* ${bookingRef}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Vehicle:* ${formData.vehicle}\n*Service:* ${serviceName}\n*Preferred Date:* ${formData.preferredDate}\n*Message:* ${formData.message || 'None'}\n\nPlease confirm my bay appointment.`;
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact DSUS VIP Car Care Center",
    "description": "Book your appointment or consult with automotive specialists at DSUS Car Care Center in Al Quoz Industrial 2, Dubai.",
    "url": "https://dsusvip.ae/contact"
  };

  return (
    <>
      <SeoHead
        title="Contact & Book Appointment | DSUS VIP Al Quoz, Dubai"
        description="Book your automotive service or visit DSUS Car Care Center on Al Asayel St, Al Quoz Industrial 2, Dubai. Phone: 056-569-4440. Open Mon-Sat 9AM-9PM."
        canonicalPath="/contact"
        schema={contactSchema}
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#07080A] border-b border-border-subtle overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-brand-gold/30">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-medium">
              Al Quoz Industrial 2 • Dubai
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-[0.06em] text-white">
            Schedule Your Visit. <br />
            <span className="gold-gradient-text">Experience DSUS VIP.</span>
          </h1>

          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Reserve dedicated bay time for your vehicle or consult directly with our senior automotive engineers.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-20 sm:py-28 bg-[#090A0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info & Facility Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  Direct Coordination
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-wider mt-1">
                  Connect With Our Team.
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed font-light">
                  Our facility is equipped with dedicated bays for detailing, PPF, electronics, upholstery, and mechanical lifts.
                </p>
              </div>

              {/* Verified Contact Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-background-surface border border-border-DEFAULT flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Workshop Location</h4>
                    <p className="text-xs text-text-secondary mt-1">{COMPANY_DATA.address.full}</p>
                    <a
                      href={COMPANY_DATA.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-brand-gold hover:text-white mt-2 font-medium"
                    >
                      <span>Open Directions in Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-background-surface border border-border-DEFAULT flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Telephone & WhatsApp</h4>
                    <p className="text-xs text-text-secondary mt-1">Direct Call: {COMPANY_DATA.phone.display}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <a
                        href={`tel:${COMPANY_DATA.phone.raw}`}
                        className="text-[11px] text-brand-gold hover:text-white font-medium"
                      >
                        Call Workshop
                      </a>
                      <span className="text-border-DEFAULT">•</span>
                      <a
                        href={createWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#25D366] hover:underline font-medium"
                      >
                        WhatsApp Direct
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-background-surface border border-border-DEFAULT flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Official Enquiries</h4>
                    <p className="text-xs text-text-secondary mt-1">{COMPANY_DATA.email}</p>
                    <a
                      href={`mailto:${COMPANY_DATA.email}`}
                      className="text-[11px] text-brand-gold hover:text-white mt-1 inline-block font-medium"
                    >
                      Send Official Email
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-background-surface border border-border-DEFAULT flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Operating Hours</h4>
                    <p className="text-xs text-text-secondary mt-1">{COMPANY_DATA.hours.days}: {COMPANY_DATA.hours.time}</p>
                    <p className="text-[11px] text-text-muted mt-0.5">{COMPANY_DATA.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Appointment & Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-background-surface border border-border-DEFAULT rounded-3xl p-7 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

                {!isSuccess ? (
                  <div>
                    <div className="mb-6">
                      <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold">
                        Service Reservation
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white mt-1">
                        Book An Appointment
                      </h3>
                      <p className="text-xs text-text-secondary mt-1">
                        Submit your details to reserve dedicated technician bay time.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
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

                      {/* Phone & Email */}
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
                            Email <span className="text-[10px] text-text-muted">(Optional)</span>
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

                      {/* Vehicle */}
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
                            placeholder="e.g. 2024 Mercedes-AMG G63 or Range Rover Autobiography"
                            className={`w-full pl-10 pr-4 py-2.5 bg-background-elevated border ${
                              errors.vehicle ? 'border-red-500' : 'border-border-DEFAULT'
                            } rounded-lg text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-gold transition-colors`}
                          />
                        </div>
                        {errors.vehicle && <p className="text-xs text-red-400 mt-1">{errors.vehicle}</p>}
                      </div>

                      {/* Service & Preferred Date */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1">
                            Service Category <span className="text-brand-gold">*</span>
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
                              <option value="other-consult" className="bg-background-surface">
                                Other / Multi-Service Project
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

                      {/* Message */}
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1">
                          Project Details or Questions <span className="text-[10px] text-text-muted">(Optional)</span>
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about any specific upgrades, symptoms, or requirements..."
                          className="w-full px-4 py-2.5 bg-background-elevated border border-border-DEFAULT rounded-lg text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-glow-gold flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Processing Reservation...</span>
                        ) : (
                          <>
                            <span>Request Bay Reservation</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                ) : (
                  /* Success View */
                  <div className="py-8 text-center space-y-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-bold">
                        Enquiry Confirmed
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white mt-1">
                        Thank You, {formData.name}
                      </h3>
                      <p className="text-sm text-text-secondary max-w-md mx-auto mt-2 leading-relaxed">
                        We have recorded your booking request for your <span className="text-white font-semibold">{formData.vehicle}</span>.
                      </p>
                    </div>

                    <div className="bg-background-elevated border border-border-DEFAULT rounded-xl p-4 max-w-sm mx-auto">
                      <span className="text-[10px] uppercase tracking-wider text-text-muted block">
                        Confirmation Reference
                      </span>
                      <span className="font-mono text-xl font-bold text-brand-gold">
                        {bookingRef}
                      </span>
                      <div className="text-xs text-text-secondary mt-2 pt-2 border-t border-border-subtle flex justify-between">
                        <span>Target Date: {formData.preferredDate}</span>
                        <span>Facility: Al Quoz #2</span>
                      </div>
                    </div>

                    <div className="space-y-3 max-w-md mx-auto pt-2">
                      <a
                        href={createWhatsAppUrl(generateWhatsAppMessage())}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-6 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send Details to WhatsApp Now</span>
                      </a>

                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            vehicle: '',
                            service: 'car-accessories-customization',
                            preferredDate: '',
                            message: '',
                          });
                        }}
                        className="text-xs uppercase tracking-wider text-text-muted hover:text-white"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="py-16 bg-[#07080A] border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-border-DEFAULT relative bg-background-surface h-96 flex items-center justify-center">
            {/* Styled Map Placeholder / Directions Card */}
            <div className="text-center p-8 max-w-md z-10 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">DSUS Car Care Center</h3>
                <p className="text-xs text-text-secondary mt-1">
                  Al Asayel St, Al Quoz Industrial 2, Dubai, United Arab Emirates
                </p>
              </div>
              <a
                href={COMPANY_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-gold text-black font-semibold text-xs uppercase tracking-wider shadow-glow-gold hover:bg-brand-gold-light transition-all"
              >
                <span>Navigate via Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Subtle background satellite grid pattern */}
            <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
          </div>
        </div>
      </section>
    </>
  );
};
