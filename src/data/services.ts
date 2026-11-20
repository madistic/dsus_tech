export interface SubService {
  title: string;
  description: string;
  features: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  fullDescription: string;
  heroImage: string;
  secondaryImage: string;
  detailImage: string;
  iconName: string;
  features: string[];
  specs: { label: string; value: string }[];
  subServices: SubService[];
  faqs: ServiceFAQ[];
  process: { step: string; title: string; description: string }[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "car-accessories-customization",
    slug: "car-accessories-customization",
    title: "Car Accessories & Customization",
    shortTitle: "Customization & PPF",
    tagline: "Exterior Armoring, Bespoke Styling & Paint Protection",
    summary: "PPF, vinyl wrap, window tinting, ceramic coating, body kits, and full exterior customization under one roof.",
    fullDescription: "In the harsh desert climate of Dubai, vehicle paint and trim face intense UV radiation, sand abrasion, and extreme temperatures exceeding 50°C. DSUS Car Care Center engineers full-spectrum exterior protection and bespoke styling. From ultra-durable self-healing paint protection films to aerodynamic carbon-fiber body styling, our climate-controlled dust-free bays guarantee flawless execution.",
    heroImage: "/assets/services/ppf-detailing-wrap.jpg",
    secondaryImage: "/assets/workshop/workshop-main-bay.jpg",
    detailImage: "/assets/services/bodykit-customization.jpg",
    iconName: "Shield",
    features: [
      "Ultra-clear self-healing TPU Paint Protection Film (8.5 mil)",
      "Premium cast vinyl color transformations (Avery, 3M, Inozetek)",
      "High-rejection nano-ceramic window tinting (up to 99% infrared block)",
      "Multi-stage machine paint correction and 9H+ graphene coatings",
      "OEM & bespoke aerodynamic body kit styling and fitment",
      "De-chroming & high-gloss blackpack conversions"
    ],
    specs: [
      { label: "Film Thickness", value: "8.5 Mil TPU Self-Healing" },
      { label: "IR Heat Rejection", value: "Up to 99% Rejection" },
      { label: "Application Facility", value: "Dust-Free Positive Airflow Bay" },
      { label: "Warranty", value: "5 to 10 Year Warranty" }
    ],
    subServices: [
      {
        title: "Paint Protection Film (PPF)",
        description: "Optically clear, high-gloss or satin matte polyurethane film engineered to defend high-impact areas or entire vehicles against rock chips, sand abrasion, and road debris.",
        features: ["Self-healing top coat with heat activation", "Hydrophobic and stain-resistant surface", "Computer-cut precision templates for zero blade-on-paint risk"]
      },
      {
        title: "Bespoke Vinyl Color Change Wraps",
        description: "Transform your vehicle's presence without altering factory paint. Choose from satin metallic, ultra-gloss, frozen matte, and color-shifting films.",
        features: ["Full disassembly of handles and lights for rolled edges", "Paint preservation and 100% reversible", "Edge sealing for longevity under Dubai sun"]
      },
      {
        title: "Nano-Ceramic Window Tinting",
        description: "Advanced multi-layer ceramic films engineered specifically for the UAE heat, blocking damaging UV rays and harsh infrared thermal radiation while maintaining crystal-clear optical visibility.",
        features: ["Up to 99% UV radiation blocking", "Zero interference with mobile, GPS, or Salik tags", "Compliant with Dubai RTA tint percentages"]
      },
      {
        title: "Ceramic & Graphene Coatings",
        description: "Semi-permanent molecular bonding providing an impenetrable glass shield with extreme hydrophobic water beading, chemical resistance, and rich gloss depth.",
        features: ["Multi-stage paint correction to remove swirl marks", "Resistance against bird droppings, acid rain, and road grime", "Simplified maintenance washing"]
      },
      {
        title: "Aerodynamic Body Kits & Styling",
        description: "Expert installation of front splitters, rear diffusers, side skirts, ducktail spoilers, and widebody conversions crafted from pre-preg carbon fiber and high-grade ABS.",
        features: ["Precision fitment and structural mounting", "Color matching with OEM paint codes", "Brabus, Mansory, and custom OEM-plus conversions"]
      }
    ],
    faqs: [
      {
        question: "How does Paint Protection Film handle Dubai's summer climate?",
        answer: "Our films are manufactured with high-grade aliphatic TPU and UV-stabilizers engineered specifically for extreme climates. The self-healing layer actually activates faster in Dubai's natural heat, allowing minor swirl marks and micro-scratches to disappear automatically when parked in the sun."
      },
      {
        question: "What is the difference between Ceramic Coating and PPF?",
        answer: "PPF is a physical 8.5-mil polyurethane barrier that physically stops flying stones, rock chips, and key scratches. Ceramic coating is a liquid polymer that chemically bonds to paint, providing extreme gloss, chemical resistance, and hydrophobic ease-of-cleaning, but cannot stop rock chips. For total defense, we often apply ceramic coating over PPF."
      },
      {
        question: "How long does a complete vehicle wrap or full PPF install take?",
        answer: "A meticulous full vehicle wrap or full PPF takes between 3 to 5 business days. We never rush: vehicles undergo deep decontamination, paint inspection, precision plotter cutting, panel disassembly for wrapped edges, and a 24-hour curing check before customer handover."
      }
    ],
    process: [
      { step: "01", title: "Inspection & Decontamination", description: "Comprehensive paint depth measurement, iron fallout removal, and clay bar treatment." },
      { step: "02", title: "Multi-Stage Paint Correction", description: "Precision dual-action machine polishing to eliminate swirls and restore showroom gloss." },
      { step: "03", title: "Precision Cleanroom Application", description: "Application in our pressurized, dust-filtered bay using digital template cuts." },
      { step: "04", title: "Post-Heat & Quality Inspection", description: "Thermal edge post-heating, infrared curing, and multi-point 50-lumen inspection." }
    ]
  },
  {
    id: "multimedia-infotainment",
    slug: "multimedia-infotainment",
    title: "Multimedia & Infotainment",
    shortTitle: "Multimedia & Tech",
    tagline: "Next-Generation Digital Cockpits & Audiophile Sound",
    summary: "Apple CarPlay, Android Auto upgrades, touchscreens, premium audio, cameras and GPS navigation.",
    fullDescription: "Bring contemporary connectivity and acoustics into any vehicle without sacrificing factory refinement. DSUS VIP specializes in non-invasive, OEM-level multimedia retrofits for Mercedes-Benz, BMW, Porsche, Audi, Range Rover, Lexus, and American muscle. Whether upgrading a legacy infotainment system to wireless Apple CarPlay or engineering a bespoke digital soundstage, our electrical technicians ensure flawless integration with your original controls.",
    heroImage: "/assets/services/multimedia-carplay-screen.jpg",
    secondaryImage: "/assets/projects/mercedes-interior-upgrade.jpg",
    detailImage: "/assets/workshop/workshop-tech-diagnostics.jpg",
    iconName: "Monitor",
    features: [
      "Wireless Apple CarPlay & Android Auto integration",
      "Factory-style high-resolution touchscreen upgrade displays",
      "Audiophile DSP digital sound processors and custom subwoofers",
      "360-degree birds-eye view surround camera systems",
      "Integrated front and rear parking dashcams with 24/7 G-sensor mode",
      "Steering wheel controls & OEM rotary iDrive / MMI retention"
    ],
    specs: [
      { label: "Connectivity", value: "Wireless Apple CarPlay & Android Auto" },
      { label: "Display Resolution", value: "Full HD 1920x720 / 4K QLED" },
      { label: "Audio Architecture", value: "DSP Multi-Channel Active Tuning" },
      { label: "Installation Method", value: "100% Plug-and-Play OEM Harness" }
    ],
    subServices: [
      {
        title: "Apple CarPlay & Android Auto Retrofit",
        description: "Seamless wireless smartphone mirroring for navigation, Spotify, phone calls, and messaging directly on your vehicle dashboard display.",
        features: ["Zero cutting of factory wiring harness", "Full support for Siri and Google Voice Assistant", "Works with factory steering wheel dials and console joysticks"]
      },
      {
        title: "Upgraded High-Resolution Touchscreens",
        description: "Replace dated, low-resolution factory monitors with expansive, anti-glare capacitive touchscreens featuring modern Android OS and dual system switching.",
        features: ["Instant toggle between original vehicle OS and upgraded system", "Split-screen multitasking for Waze and media", "Integrated SIM card 4G/5G connectivity"]
      },
      {
        title: "Audiophile Sound Systems & Custom Enclosures",
        description: "Custom acoustic tuning, premium component speakers, micro-amplifiers, and space-saving trunk subwoofers crafted for true staging depth and distortion-free bass.",
        features: ["Focal, Audison, and Match sound architecture", "Custom laser-cut fiberglass subwoofer enclosures", "High-density acoustic sound deadening (doors & floor)"]
      },
      {
        title: "360-Degree Surround Camera Systems",
        description: "Eliminate blind spots when navigating tight Dubai underground parkades with 4 ultra-wide fisheye cameras stitched into a seamless aerial 3D simulation.",
        features: ["Dynamic steering trajectory guidelines", "Automatic activation on reverse gear or indicator signal", "Night-vision low-light sensor optimization"]
      }
    ],
    faqs: [
      {
        question: "Will installing Apple CarPlay affect my original vehicle systems or warranty?",
        answer: "No. We utilize plug-and-play T-harnesses that integrate directly behind your head unit without cutting, stripping, or splicing a single factory wire. Your original vehicle settings, service menus, climate controls, and camera views remain 100% intact and functional."
      },
      {
        question: "Can I switch between the new infotainment screen and original car menu?",
        answer: "Yes! A simple long-press of the factory 'MENU', 'BACK', or 'NAV' button toggles instantly between your original factory interface and the new CarPlay/Android interface."
      },
      {
        question: "Can you install multimedia systems in older classic and luxury vehicles?",
        answer: "Absolutely. We specialize in retrofitting modern connectivity into 1990s to 2010s Mercedes, Porsche, Bentley, and BMW models while preserving their period-correct cockpit aesthetics."
      }
    ],
    process: [
      { step: "01", title: "System Compatibility Check", description: "Inspect head unit model, optical fiber loop (MOST/D2B), and audio gateway specifications." },
      { step: "02", title: "Clean Cockpit Disassembly", description: "Use specialized non-marring tools and felt protection to prevent dashboard marks." },
      { step: "03", title: "OEM Harness Connection", description: "Install precision bypass harnesses and run shielded antenna and camera wiring." },
      { step: "04", title: "DSP Calibration & Testing", description: "Calibrate touchscreen touch latency, steering wheel buttons, microphone, and acoustic DSP." }
    ]
  },
  {
    id: "auto-electronics-repair",
    slug: "auto-electronics-repair",
    title: "Auto Electronics Repair",
    shortTitle: "Auto Electronics",
    tagline: "Diagnostic Engineering, Module Coding & Electrical Architecture",
    summary: "ECU diagnosis, wiring repairs, keyless entry and electrical fault diagnostics.",
    fullDescription: "Modern European and luxury vehicles are complex networks of distributed computing modules operating over high-speed CAN-bus, FlexRay, and LIN-bus networks. DSUS VIP houses advanced dealer-level diagnostic computers, oscilloscopes, and circuit tracing equipment. We isolate the root electrical cause — eliminating costly guesswork, unnecessary parts swapping, and frustrating warning lights.",
    heroImage: "/assets/services/auto-electric-wiring.jpg",
    secondaryImage: "/assets/workshop/workshop-tech-diagnostics.jpg",
    detailImage: "/assets/projects/electronics-harness-repair.jpg",
    iconName: "Cpu",
    features: [
      "Dealer-level diagnostic computers (Mercedes XENTRY, BMW ISTA, VAG ODIS)",
      "High-speed CAN-Bus, LIN-Bus, and MOST optical network troubleshooting",
      "ECU, BCM, and TCU programming, cloning, and software reflashing",
      "Complex wiring harness tracing, pinout repair, and solder splices",
      "Keyless entry, smart key fobs, and immobilizer coding",
      "Parasitic battery drain detection with micro-amp current clamps"
    ],
    specs: [
      { label: "Diagnostic Protocols", value: "CAN 2.0B, CAN-FD, FlexRay, DoIP" },
      { label: "Software Systems", value: "Dealer-grade OEM Diagnostics" },
      { label: "Fault Isolation", value: "Oscilloscope Waveform Telemetry" },
      { label: "Repair Standard", value: "Military-grade Heat-Shrink & Solder" }
    ],
    subServices: [
      {
        title: "Full-Spectrum ECU Diagnostics",
        description: "Deep scanner interrogation going beyond basic generic OBD-II codes into module-level live sensor telemetry, fuel trim data, and transient electrical spikes.",
        features: ["Live freeze-frame sensor data analysis", "Actuator bidirectional testing", "Clearance of stored DTCs with verified resolution"]
      },
      {
        title: "Wiring Harness Repair & Loom Rebuilds",
        description: "Expert restoration of damaged, rodent-chewed, water-damaged, or heat-embrittled wiring harnesses using OEM color-matched wiring and weather-pack connectors.",
        features: ["Resistance and continuity micro-testing", "Waterproof heat-shrink sealing and harness loom wrapping", "Restoration of critical engine and ABS signal feeds"]
      },
      {
        title: "Control Module Coding & Initialization",
        description: "Replacement and synchronization of electronic control units (BCM, Gateway, Door Modules, ABS Modules) with your vehicle's VIN and immobilizer network.",
        features: ["Online module adaptation and variant coding", "Firmware updates to eliminate software glitch bugs", "Feature coding and adaptation adjustments"]
      },
      {
        title: "Smart Key & Keyless Entry Programming",
        description: "Supply, laser cutting, and electronic transponder pairing for factory replacement keys, proximity fobs, and push-to-start antennas.",
        features: ["All-keys-lost recovery solutions", "Deactivation of lost or stolen key fobs from memory", "Anti-theft CAS/EWS/FBS security synchronization"]
      }
    ],
    faqs: [
      {
        question: "Why do check engine or airbag lights keep coming back after being cleared?",
        answer: "Generic scan tools simply clear the symptom code without fixing the physical malfunction. At DSUS, we test the actual sensor, reference voltages, ground integrity, and harness impedance to ensure the actual fault is cured before handing your car back."
      },
      {
        question: "My car battery dies overnight or after two days. Can you find why?",
        answer: "Yes. Parasitic draw diagnosis is one of our master specialties. We utilize thermal imaging cameras and micro-amp current clamps to isolate modules that fail to enter sleep mode, tracing the drain without disrupting sleep cycles."
      },
      {
        question: "Do you have official diagnostic tools for Mercedes, BMW, Audi, and Porsche?",
        answer: "Yes. Our electronics lab is outfitted with dealer-level software and multiplexers including Mercedes XENTRY, BMW ISTA/P, Audi/VW ODIS, and Porsche PIWIS III interfaces."
      }
    ],
    process: [
      { step: "01", title: "Vehicle Network Scan", description: "Complete optical and digital loop scan of all modules to log active and shadow fault codes." },
      { step: "02", title: "Signal Analysis & Pin Testing", description: "Oscilloscope inspection of waveforms, reference voltages, and ground potentials." },
      { step: "03", title: "Component Repair / Harness Remediation", description: "Precision pin re-termination, wiring reconstruction, or module reprogramming." },
      { step: "04", title: "Adaptation & Road Validation", description: "Module initialization, drive-cycle completion, and post-repair telemetry verification." }
    ]
  },
  {
    id: "upholstery-interior",
    slug: "upholstery-interior",
    title: "Upholstery & Interior",
    shortTitle: "Interior & Upholstery",
    tagline: "Bespoke Leather Craftsmanship, Alcantara & Cabin Restoration",
    summary: "Leather reupholstery, Alcantara interiors, custom stitching, restoration and interior customization.",
    fullDescription: "Step inside a sanctuary crafted to your personal specification. DSUS VIP's interior upholstery atelier combines traditional European saddlery techniques with modern CNC stitching precision. Whether replacing sun-damaged leather, wrapping roof pillars in genuine Italian Alcantara, or re-trimming an entire cabin in bespoke diamond-quilted Nappa, we elevate your driving environment to high luxury standards.",
    heroImage: "/assets/services/luxury-interior-leather.jpg",
    secondaryImage: "/assets/projects/custom-leather-craftsmanship.jpg",
    detailImage: "/assets/services/alcantara-steering-trim.jpg",
    iconName: "Sparkles",
    features: [
      "Imported automotive Nappa, semi-aniline, and perforated leathers",
      "Authentic Italian Alcantara headliners, pillars, and sun visors",
      "Bespoke steering wheel reshaping (carbon fiber inserts & thumb grips)",
      "Precision diamond, honeycomb, and contrast stitch embroidery",
      "Full dashboard, center console, and door card leather re-trimming",
      "Seat foam reconstruction and ventilation/heating element integration"
    ],
    specs: [
      { label: "Leather Origin", value: "German & Italian Automotive Nappa" },
      { label: "Synthetic Microfiber", value: "Genuine Italian Alcantara" },
      { label: "Thread Quality", value: "UV-Resistant Bonded Nylon Gutermann" },
      { label: "Safety Standard", value: "OEM Certified Airbag Seam Burst Stitching" }
    ],
    subServices: [
      {
        title: "Full Cabin Leather Re-Upholstery",
        description: "Transform worn or generic factory fabric into sumptuous, glove-soft leather. Tailored patterning for front seats, rear benches, headrests, and armrests.",
        features: ["Hand-selected hide inspection for flawless grain uniformity", "Contrast piping and bespoke colored leather accents", "Choice of smooth, perforated, or semi-aniline textures"]
      },
      {
        title: "Alcantara Headliner & Pillar Wrapping",
        description: "The ultimate tactile upgrade for luxury cabins. Replace sagging or plain fabric with charcoal, black, or bespoke colored Alcantara.",
        features: ["Complete wrap of A, B, and C pillars and sunvisors", "High-temperature marine contact adhesive rated for 120°C heat", "Flawless integration with sunroof panels and grab handles"]
      },
      {
        title: "Custom Steering Wheel Re-Trimming",
        description: "Your primary point of contact with your vehicle. Re-sculpt your wheel with ergonomic flat-bottom contours, perforated leather grips, Alcantara sides, and carbon fiber.",
        features: ["12 o'clock motorsport center alignment stripe", "Color-matched cross-stitching or tri-color M/AMG style", "Paddle shifter and control button integration"]
      },
      {
        title: "Interior Restoration & Seat Foam Sculpting",
        description: "Rebuild collapsed seat bolsters, repair cracked leather, eliminate interior creaks, and restore deep factory comfort to classic and modern performance vehicles.",
        features: ["High-density orthopedic foam rebuilds", "Leather dye restoration and protective matte top coats", "Door panel and console armrest structural rebuilding"]
      }
    ],
    faqs: [
      {
        question: "Is aftermarket leather reupholstery safe with modern seat airbags?",
        answer: "Yes, absolutely. We utilize specialized computerized break-stitch sewing threads and dedicated tear-seam techniques on all seat bolster regions where side-curtain or seat airbags deploy, fully preserving OEM safety deployment specifications."
      },
      {
        question: "How does genuine Alcantara survive in Dubai's heat and dust?",
        answer: "Genuine automotive-grade Alcantara is remarkably durable, breathable, and does not conduct scorching surface heat like low-grade synthetics. With routine vacuuming and gentle microfiber brushing, it will maintain its rich texture for many years."
      },
      {
        question: "Can I customize color combinations, embossing, and stitching patterns?",
        answer: "Yes! You can choose from over 60 leather shades, customized perforated designs, bespoke crest embossing, and any contrast thread color. We provide physical leather and swatch samples in our Al Quoz design studio."
      }
    ],
    process: [
      { step: "01", title: "Design Consultation & Swatches", description: "Select leather grains, Alcantara shades, thread colors, and quilting patterns in our studio." },
      { step: "02", title: "Pattern Digitization & CNC Cut", description: "Deconstruct original upholstery and laser/hand-cut new hides for exact contour fitment." },
      { step: "03", title: "Master Saddler Stitching", description: "Hand-crafted assembly using heavy-duty German twin-needle upholstery machines." },
      { step: "04", title: "Steam Sculpting & Refit", description: "Heat-steam stretching over rebuilt foam cores for wrinkle-free, taut showroom finish." }
    ]
  },
  {
    id: "mechanical-services",
    slug: "mechanical-services",
    title: "Mechanical Services",
    shortTitle: "Mechanical Care",
    tagline: "Precision Powertrain Engineering, Braking & Preventive Maintenance",
    summary: "Engine, transmission, brakes, suspension and general vehicle maintenance.",
    fullDescription: "Performance, reliability, and safety originate beneath the surface. DSUS VIP delivers comprehensive mechanical care for sports cars, luxury cruisers, and daily commuters in Al Quoz. Our certified technicians execute engine diagnostics, automatic and dual-clutch transmission maintenance, high-performance brake upgrades, and adaptive suspension servicing using premium lubricants and OEM-grade components.",
    heroImage: "/assets/services/mechanical-engine-bay.jpg",
    secondaryImage: "/assets/workshop/workshop-detailing-lift.jpg",
    detailImage: "/assets/services/performance-brakes-suspension.jpg",
    iconName: "Wrench",
    features: [
      "Comprehensive multi-point mechanical inspection with digital health report",
      "Major & minor scheduled servicing with certified synthetic lubricants",
      "High-performance brake rotor replacement, pad fitting, and fluid flush",
      "Transmission service, dual-clutch clutch adaptation, and filter changes",
      "Suspension overhaul, adaptive air suspension diagnosis, and bushings",
      "Engine cooling system overhaul, water pump, and tropical radiator upgrades"
    ],
    specs: [
      { label: "Lubricant Standards", value: "Liqui Moly & Castrol OEM Synthetic" },
      { label: "Brake Testing", value: "High-Temp Boiling Point & Disc Runout" },
      { label: "Lifting Equipment", value: "Four-Ton Low-Profile Hydraulic Lifts" },
      { label: "Warranty", value: "Parts & Labor Guarantee on All Repairs" }
    ],
    subServices: [
      {
        title: "Major & Minor Scheduled Servicing",
        description: "Meticulous preventative maintenance tailored to Dubai's harsh operating conditions. Oil and filter replacement, spark plugs, cabin micro-filters, and fluid top-ups.",
        features: ["Premium OEM-approved fully synthetic oils", "Comprehensive 60-point mechanical safety checklist", "Reset of onboard service computer intervals"]
      },
      {
        title: "Performance Braking Systems",
        description: "Upgrade or restore decisive stopping power. Ceramic brake pads, slotted and cross-drilled rotors, braided stainless steel lines, and DOT 5.1 fluid flushes.",
        features: ["Brembo, AP Racing, and Akebono OEM fitments", "Elimination of brake squeal, pedal sponginess, and high-speed vibration", "Digital rotor runout micro-measurement"]
      },
      {
        title: "Transmission & Drivetrain Maintenance",
        description: "Protect complex automatic, DCT, PDK, and ZF gearboxes against fluid shear and thermal breakdown caused by UAE summer highway driving.",
        features: ["Transmission pan filter replacement with magnet cleaning", "Full fluid exchange using manufacturer-exact spec fluids", "Adaptation and clutch wear point re-learning"]
      },
      {
        title: "Suspension, Steering & Air Ride Systems",
        description: "Restoration of road holding and riding comfort. Diagnosis of leaking air suspension struts, compressor relays, control arm bushings, and steering racks.",
        features: ["Pneumatic air spring and valve block replacement", "Polyurethane and OEM rubber bushing pressing", "Computerized laser wheel alignment"]
      }
    ],
    faqs: [
      {
        question: "Why does driving in Dubai require shorter oil and maintenance intervals?",
        answer: "Extreme ambient temperatures exceeding 45°C coupled with airborne sand and stop-and-go traffic place motor oils under severe thermal and oxidation stress. We recommend 8,000 km to 10,000 km oil intervals using premium full synthetics to ensure long-term engine longevity."
      },
      {
        question: "Can you service luxury European brands without dealer markup?",
        answer: "Yes. Our team of eight technicians possesses years of specialized training on Mercedes-Benz, BMW, Porsche, Audi, Range Rover, and Bentley. We follow manufacturer workshop manuals and use OEM parts at transparent, honest pricing."
      },
      {
        question: "Do you offer genuine parts or aftermarket alternatives?",
        answer: "We source authentic OEM factory parts, as well as renowned Tier-1 German OEM suppliers (Bosch, Lemförder, Brembo, Bilstein, Mahle, Liqui Moly), giving you absolute quality at significant savings."
      }
    ],
    process: [
      { step: "01", title: "Road Test & Physical Inspection", description: "Multi-point hoist inspection checking undercarriage, bushings, leaks, and brake wear." },
      { step: "02", title: "Digital Estimate & Approval", description: "Transparent photographic quote detailing essential vs recommended maintenance." },
      { step: "03", title: "Precision Mechanical Execution", description: "Component replacement to exact manufacturer torque specs with proper new seals." },
      { step: "04", title: "Validation & Road Clearance", description: "Secondary technician sign-off, system adaptation, and final road performance test." }
    ]
  },
  {
    id: "lighting-solutions",
    slug: "lighting-solutions",
    title: "Lighting Solutions",
    shortTitle: "Lighting Solutions",
    tagline: "Optical Engineering, Laser Retrofits & Starlight Ambience",
    summary: "LED headlight upgrades, ambient lighting, starlight roofs and custom automotive lighting.",
    fullDescription: "Lighting defines the character and safety of your vehicle. At DSUS VIP, we engineer bespoke optical solutions that turn heads on Sheikh Zayed Road. From hand-crafted optical fiber Starlight Headliners with shooting star constellations to cutting-edge Bi-LED and Laser headlight retrofits that illuminate the darkest desert highways, our lighting lab merges artistry with electrical precision.",
    heroImage: "/assets/services/starlight-ambient-roof.jpg",
    secondaryImage: "/assets/projects/bespoke-starlight-craft.jpg",
    detailImage: "/assets/projects/range-rover-lighting-mod.jpg",
    iconName: "Zap",
    features: [
      "Bespoke optic fiber Starlight Roofs (500 to 1,600+ individual points)",
      "Shooting star animations, meteor showers, and custom constellations",
      "Bi-LED and Laser headlight projector retrofits with razor-sharp cutoffs",
      "64-color dynamic interior ambient lighting with turbine air vents",
      "Smoked taillight aesthetic styling & animated sequential indicators",
      "Underbody glow, grille illumination, and puddle projection lights"
    ],
    specs: [
      { label: "Fiber Material", value: "PMMA End-Glow High-Purity Optical Core" },
      { label: "LED Projectors", value: "3.0-Inch Bi-LED 6000K Laser Auxiliary" },
      { label: "Ambient Control", value: "OEM Screen & Bluetooth Smartphone App" },
      { label: "Road Compliance", value: "RTA Passable Clean Cutoff Beam Pattern" }
    ],
    subServices: [
      {
        title: "Bespoke Starlight Headliners",
        description: "Transform your vehicle's ceiling into a breathtaking celestial night sky. Each optical fiber is individually perforated, routed, and secured by hand.",
        features: ["Adjustable brightness, twinkle shimmer, and multi-color modes", "Programmable shooting star animations with random meteor intervals", "Custom constellation layouts (zodiacs, personal emblems, Milky Way)"]
      },
      {
        title: "Bi-LED & Laser Headlight Retrofits",
        description: "Upgrade dim, yellowed halogen or aged xenon headlights with ultra-bright Bi-LED projectors that produce daylight-intensity illumination with a sharp cutoff line.",
        features: ["Up to 300% brighter road illumination with zero glare to oncoming traffic", "High-temperature polycarbonate lens restoration and UV clear coat sealing", "Custom blackout projector shrouds and demon eye accents"]
      },
      {
        title: "64-Color Dynamic Ambient Cabin Lighting",
        description: "Illuminate door panels, dashboard contours, footwells, and illuminated turbine air vents with synchronized 64-color ambient light strips.",
        features: ["Seamless integration tucked into factory interior crevices", "Color cycling, music rhythm modes, and dual-zone color split", "Controlled via factory screen menus or dedicated smartphone app"]
      },
      {
        title: "Exterior Accent & Taillight Customization",
        description: "Complete your vehicle's nocturnal presence with illuminated front grille badges, subtle under-glow, and tinted taillights with sequential indicators.",
        features: ["High-durability IP68 waterproof LED architectures", "Controlled through discrete factory switches or ignition sync", "Smoked lenses that maintain 100% legal brake light visibility"]
      }
    ],
    faqs: [
      {
        question: "How long does a Starlight Headliner installation take and does it damage the roof?",
        answer: "A proper starlight headliner takes 2 to 3 days. We carefully drop your headliner board from the vehicle, mark out hundreds of points according to your chosen pattern, insert individual optical fibers, cement them with thermal-rated glue, trim them flush, and reinstall with zero visible wiring or sagging."
      },
      {
        question: "Will Bi-LED headlight upgrades pass UAE RTA annual inspection?",
        answer: "Yes! Unlike cheap drop-in LED bulbs that scatter blinding light, our Bi-LED projector retrofits feature an optically engineered internal cutoff shield that keeps the low beam strictly below oncoming driver eye-level, easily passing RTA beam alignment checks."
      },
      {
        question: "Can ambient lighting be controlled through my vehicle's original screen?",
        answer: "On many Mercedes, BMW, Audi, and Porsche models, we can code the ambient lighting directly into your vehicle's factory display screen, allowing control through your original dial and menu settings."
      }
    ],
    process: [
      { step: "01", title: "Pattern Conception & Design", description: "Design fiber density, constellation placement, and ambient placement with client." },
      { step: "02", title: "Headliner Extraction & Craft", description: "Meticulous dropping of roof lining; individual fiber insertion and optical grouping." },
      { step: "03", title: "Power Supply & Optic Engine", description: "Wire in safe fused illumination engines with dedicated thermal heat-sinking." },
      { step: "04", title: "Optical Calibration & Re-Assembly", description: "Trim fibers flush, test shimmer animations, and re-install with factory fitment." }
    ]
  }
];

export const getServiceBySlug = (slug: string): ServiceCategory | undefined => {
  return SERVICES_DATA.find((s) => s.slug === slug);
};
