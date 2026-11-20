export interface BusinessInfo {
  name: string;
  brandName: string;
  tagline: string;
  subheadline: string;
  address: {
    street: string;
    area: string;
    city: string;
    country: string;
    full: string;
  };
  phone: {
    display: string;
    raw: string;
    whatsapp: string;
    whatsappUrl: string;
  };
  email: string;
  hours: {
    days: string;
    time: string;
    sunday: string;
  };
  stats: {
    experienceYears: string;
    techniciansCount: string;
    baysCount: string;
    vehiclesTransformed: string;
    googleRating: string;
    reviewsCount: string;
  };
  socials: {
    instagram: string;
    facebook: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
}

export const COMPANY_DATA: BusinessInfo = {
  name: "DSUS Car Care Center",
  brandName: "DSUS VIP",
  tagline: "ENGINEERED FOR YOUR DRIVE.",
  subheadline: "Premium automotive customization, technology and care. Everything your vehicle needs, under one roof in Al Quoz, Dubai.",
  address: {
    street: "Al Asayel St",
    area: "Al Quoz Industrial 2",
    city: "Dubai",
    country: "UAE",
    full: "Al Asayel St, Al Quoz Industrial 2, Al Quoz, Dubai, United Arab Emirates"
  },
  phone: {
    display: "056-569-4440",
    raw: "+971565694440",
    whatsapp: "+971 56 569 4440",
    whatsappUrl: "https://wa.me/971565694440"
  },
  email: "info@dsusvip.ae",
  hours: {
    days: "Monday – Saturday",
    time: "9:00 AM – 9:00 PM",
    sunday: "Closed (VIP Appointments on Request)"
  },
  stats: {
    experienceYears: "4+",
    techniciansCount: "8 Specialists",
    baysCount: "6 Dedicated Bays",
    vehiclesTransformed: "2,400+",
    googleRating: "4.9",
    reviewsCount: "180+"
  },
  socials: {
    instagram: "https://www.instagram.com/dsusvip/",
    facebook: "https://www.facebook.com/share/1EFvDZmQN6/"
  },
  coordinates: {
    lat: 25.1328,
    lng: 55.2345
  },
  googleMapsUrl: "https://maps.google.com/?q=DSUS+Car+Care+Center+Al+Asayel+St+Al+Quoz+Industrial+2+Dubai"
};

export const createWhatsAppUrl = (message?: string): string => {
  const text = message ? encodeURIComponent(message) : encodeURIComponent("Hello DSUS VIP, I would like to enquire about your automotive services.");
  return `https://wa.me/971565694440?text=${text}`;
};
