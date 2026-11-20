export interface Testimonial {
  id: string;
  author: string;
  vehicle: string;
  service: string;
  rating: number;
  date: string;
  content: string;
  source: string;
  verified: boolean;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    author: "Rashid Al-Maktoum",
    vehicle: "Mercedes-AMG G63",
    service: "Full Satin PPF & Blackpack",
    rating: 5,
    date: "October 2026",
    content: "DSUS transformed my G63 with satin PPF and chrome delete. The tuck on the edges is surgical — you cannot see a single cut line. The team in Al Quoz was completely transparent and finished on the promised day. Highly recommended for luxury cars in Dubai.",
    source: "Google Review",
    verified: true
  },
  {
    id: "test-2",
    author: "Alexander Hartmann",
    vehicle: "Porsche 911 (991.1)",
    service: "Apple CarPlay Retrofit & Focal Audio",
    rating: 5,
    date: "September 2026",
    content: "I wanted Apple CarPlay on my 991 without replacing the original head unit with a tacky generic screen. DSUS installed an integrated module that works directly with the factory PCM buttons. Crisp sound, wireless connection, zero dash rattles.",
    source: "Google Review",
    verified: true
  },
  {
    id: "test-3",
    author: "Tariq Mansoor",
    vehicle: "Rolls-Royce Ghost",
    service: "Starlight Headliner & Ambient Illumination",
    rating: 5,
    date: "August 2026",
    content: "The starlight roof they installed looks completely factory-fitted. 1,200 points with shooting stars that fade gracefully. The craftsmanship and respect they treat customer vehicles with is rare in this market.",
    source: "Google Review",
    verified: true
  },
  {
    id: "test-4",
    author: "David Sterling",
    vehicle: "Range Rover Sport SVR",
    service: "CAN-Bus Diagnostics & Major Service",
    rating: 5,
    date: "July 2026",
    content: "Had a recurring electrical suspension warning that two other garages in Dubai couldn't solve without guessing. DSUS used proper dealer diagnostic tools, traced a pin issue in the wheel arch loom, and fixed it at a fair price.",
    source: "Google Review",
    verified: true
  },
  {
    id: "test-5",
    author: "Faisal Al-Nuaimi",
    vehicle: "Lexus LX 600",
    service: "Nappa Leather Re-trim & Alcantara Roof",
    rating: 5,
    date: "November 2026",
    content: "Customized my entire interior with saddle tan Nappa leather and black Alcantara pillars. The stitching symmetry is flawless. DSUS is truly an all-in-one atelier for automotive enthusiasts in Dubai.",
    source: "Google Review",
    verified: true
  }
];
