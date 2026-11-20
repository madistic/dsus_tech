export interface ProjectItem {
  id: string;
  title: string;
  vehicle: string;
  category: "Exterior Customization" | "Interior & Upholstery" | "Multimedia & Sound" | "Lighting Solutions" | "Electronics & Mechanical";
  description: string;
  image: string;
  tag: string;
  year: string;
  scope: string[];
  beforeImage?: string;
  afterImage?: string;
}

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: "g63-satin-blackpack",
    title: "Satin Stealth Protection & Blackpack",
    vehicle: "Mercedes-AMG G63",
    category: "Exterior Customization",
    description: "Complete full-body satin matte paint protection film (PPF) transformation with gloss black de-chroming package and 99% nano-ceramic window heat rejection tinting.",
    image: "/assets/projects/supercar-detailing-bay.jpg",
    tag: "PPF & Styling",
    year: "2026",
    scope: [
      "8.5 Mil Self-Healing Satin Matte PPF",
      "Full exterior chrome delete to high-gloss obsidian",
      "Front windshield & cabin nano-ceramic heat rejection tint",
      "Painted brake calipers in signature bronze gold"
    ],
    beforeImage: "/assets/projects/before-paint.jpg",
    afterImage: "/assets/projects/after-paint.jpg"
  },
  {
    id: "rr-cullinan-starlight",
    title: "Bespoke 1,400-Point Celestial Starlight Headliner",
    vehicle: "Rolls-Royce Cullinan",
    category: "Lighting Solutions",
    description: "Hand-crafted optical fiber starlight ceiling featuring 1,400 individual light points with programmable dual shooting stars and client's personalized zodiac constellation.",
    image: "/assets/projects/bespoke-starlight-craft.jpg",
    tag: "Starlight Roof",
    year: "2026",
    scope: [
      "1,400 high-purity optical PMMA fibers",
      "Integrated dual shooting star animated engines",
      "Smartphone Bluetooth & factory switch synchronization",
      "Italian black Alcantara headliner backing restoration"
    ]
  },
  {
    id: "range-rover-leather-cabin",
    title: "Hermès Orange Nappa Leather & Alcantara Atelier",
    vehicle: "Range Rover Autobiography",
    category: "Interior & Upholstery",
    description: "Full interior re-upholstery in imported Bavarian Nappa leather finished in rich Hermès orange with contrast black French stitching and matching Alcantara pillars.",
    image: "/assets/projects/custom-leather-craftsmanship.jpg",
    tag: "Bespoke Interior",
    year: "2025",
    scope: [
      "Full front & rear seat Nappa leather tailoring",
      "Perforated center panels with computerized seat cooling flow",
      "Alcantara wrapped A, B, and C pillars and sunvisors",
      "Re-sculpted ergonomic steering wheel with carbon top"
    ]
  },
  {
    id: "porsche-911-carplay-audio",
    title: "Modern Cockpit & Wireless Apple CarPlay Integration",
    vehicle: "Porsche 911 (997.2 Generation)",
    category: "Multimedia & Sound",
    description: "Seamless factory-style touchscreen retrofit providing wireless Apple CarPlay and Android Auto while retaining the classic Porsche dashboard architecture and BOSE amplification.",
    image: "/assets/projects/mercedes-interior-upgrade.jpg",
    tag: "Multimedia Retrofit",
    year: "2026",
    scope: [
      "High-resolution 8.8-inch capacitive IPS touchscreen",
      "Full optical MOST fiber-optic amplifier bridge",
      "Integrated discreet rear parking camera with dynamic lines",
      "Wireless charging cradle integrated into armrest"
    ]
  },
  {
    id: "bmw-m5-lighting-retrofit",
    title: "Bi-LED Laser Projector & 64-Color Ambient Architecture",
    vehicle: "BMW M5 Competition (F90)",
    category: "Lighting Solutions",
    description: "Headlight optic overhaul with high-intensity Bi-LED projectors, laser auxiliary high beams, blackout shrouds, and a full 64-color interactive interior ambient lighting suite.",
    image: "/assets/projects/range-rover-lighting-mod.jpg",
    tag: "Lighting Architecture",
    year: "2026",
    scope: [
      "Bi-LED laser projector conversion with razor cutoff",
      "UV-hardened polycarbonate lens restoration",
      "Turbine air vent 64-color ambient synchronization",
      "RTA road-legal photometric beam alignment"
    ]
  },
  {
    id: "amg-gt-harness-ecu",
    title: "Complex CAN-Bus Harness Remediation & TCU Coding",
    vehicle: "Mercedes-AMG GT S",
    category: "Electronics & Mechanical",
    description: "Deep electronic diagnostic scan isolating an intermittent communication failure across the drivetrain CAN-bus network, followed by pinout re-termination and transmission adaptation.",
    image: "/assets/projects/electronics-harness-repair.jpg",
    tag: "Diagnostic Engineering",
    year: "2025",
    scope: [
      "Oscilloscope signal trace isolating CAN-H short circuit",
      "Military-spec wiring harness pin replacement and insulation",
      "Dealer-level Mercedes XENTRY module coding",
      "Clutch bite-point recalibration and test run"
    ]
  },
  {
    id: "audi-rs6-body-custom",
    title: "Pre-Preg Carbon Aerodynamics & Graphene Coating",
    vehicle: "Audi RS6 Avant",
    category: "Exterior Customization",
    description: "Aerodynamic transformation including front carbon splitter, side sills, rear diffuser, and dual-layer 9H+ graphene ceramic coating for long-lasting gloss.",
    image: "/assets/services/bodykit-customization.jpg",
    tag: "Carbon & Coating",
    year: "2026",
    scope: [
      "Autoclave carbon fiber styling package fitment",
      "Three-stage machine paint defect removal",
      "9H+ Graphene molecular paint coating",
      "Hydrophobic wheel rim and brake caliper sealing"
    ]
  },
  {
    id: "ferrari-488-cooling-brakes",
    title: "Carbon Ceramic Brake Overhaul & Thermal Cooling",
    vehicle: "Ferrari 488 Spider",
    category: "Electronics & Mechanical",
    description: "High-performance mechanical service including carbon-ceramic disc inspection, specialized low-dust track pads, high-temp fluid flush, and auxiliary radiator flush.",
    image: "/assets/services/performance-brakes-suspension.jpg",
    tag: "Powertrain & Braking",
    year: "2026",
    scope: [
      "Brembo carbon-ceramic rotor thickness and runout check",
      "Motul RBF 660 factory high-temp fluid exchange",
      "Auxiliary radiator debris cleanout and coolant optimization",
      "Digital suspension damper telemetry test"
    ]
  }
];

export const BEFORE_AFTER_ITEMS = [
  {
    id: "ba-paint",
    title: "Paint Correction & Self-Healing PPF",
    subtitle: "Swirl-marked oxidized black clearcoat vs Showroom Mirror Gloss with 8.5 Mil TPU",
    beforeImage: "/assets/projects/before-paint.jpg",
    afterImage: "/assets/projects/after-paint.jpg",
    category: "Exterior Customization"
  }
];
