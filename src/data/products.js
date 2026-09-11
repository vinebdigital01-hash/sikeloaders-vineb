export const categories = [
  {
    id: "tempering",
    name: "Tempering & Heating",
    description: "High-efficiency tempering furnaces, bending furnaces, and heat soak ovens for architectural and automotive glass.",
    image: "/catalogue/New Catalogue SK 2025 print_Page_10.jpg",
  },
  {
    id: "washing",
    name: "Washing & Drying",
    description: "Ultra-fast vertical and horizontal washing machines designed specifically for standard and Low-E glass.",
    image: "/catalogue/New Catalogue SK 2025 print_Page_35.jpg",
  },
  {
    id: "cutting",
    name: "Cutting & Breaking",
    description: "Multi-function manual and CNC cutting tables with air cushion and breaking bars.",
    image: "/catalogue/New Catalogue SK 2025 print_Page_25.jpg",
  },
  {
    id: "handling",
    name: "Handling & Loading",
    description: "Automated loaders, unloaders, and rotation racks for jumbo and half-jumbo glass sheets.",
    image: "/catalogue/New Catalogue SK 2025 print_Page_18.jpg",
  }
];

export const products = [
  {
    id: 'sktc-forced-convection',
    categoryId: 'tempering',
    category: 'Tempering',
    name: 'SKTC-Horizontal Forced Convection Glass Tempering Furnace',
    shortDesc: 'State-of-the-art forced convection tempering furnace for Low-E and architectural glass.',
    longDesc: 'The SKTC-Horizontal Forced Convection Glass Tempering Furnace is engineered for supreme optical clarity and high-efficiency processing of advanced Low-E coated glass. Using a proprietary top and bottom convection heating matrix, it eliminates thermal warping and ensures uniform temperature distribution. Manufactured for continuous operation in high-volume industrial environments, it features intelligent SCADA controls and energy-saving insulation technologies.',
    images: [
      '/catalogue/New Catalogue SK 2025 print_Page_09.jpg',
      '/catalogue/New Catalogue SK 2025 print_Page_10.jpg',
      '/catalogue/New Catalogue SK 2025 print_Page_11.jpg'
    ],
    highlights: [
      'Advanced forced convection heating matrix',
      'Perfect for soft-coat Low-E glass tempering',
      'Intelligent PID temperature control system',
      'High-speed, energy-efficient quenching section'
    ],
    specs: [
      { label: 'Heating Method', value: 'Upper & Lower Forced Convection' },
      { label: 'Glass Thickness', value: '4mm - 19mm' },
      { label: 'Control System', value: 'Siemens/Omron PLC + Industrial PC' },
      { label: 'Heating Elements', value: 'High-grade Ni-Cr Alloy' },
      { label: 'Energy Efficiency', value: 'Up to 30% power savings' }
    ],
    faqs: [
      { q: "Is this furnace suitable for soft-coat Low-E glass?", a: "Yes, the forced convection system is specifically designed to safely heat coated glass without damaging the sensitive Low-E layer." },
      { q: "What is the typical energy consumption?", a: "Due to the advanced ceramic matrix and intelligent quenching, this furnace reduces energy consumption by up to 30% compared to traditional radiant furnaces." },
      { q: "Does it come with remote diagnostics?", a: "Yes, the integrated PLC system allows our engineers to perform remote diagnostics and troubleshooting worldwide." }
    ]
  },
  {
    id: 'skdcb-double-curvature',
    categoryId: 'tempering',
    category: 'Tempering',
    name: 'SKDCB-Double Curvature Bending Glass Tempering Furnace',
    shortDesc: 'Precision double curvature bending for complex automotive and architectural applications.',
    longDesc: 'The SKDCB-Double Curvature Bending Furnace is specialized for creating complex, multi-axis bent tempered glass. Utilizing advanced servomotor-driven forming mechanisms, it precisely bends glass to exact CAD specifications without optical distortion. It is the perfect solution for modern automotive windshields, luxury appliance panels, and custom architectural facades.',
    images: [
      '/catalogue/New Catalogue SK 2025 print_Page_12.jpg',
      '/catalogue/New Catalogue SK 2025 print_Page_13.jpg'
    ],
    highlights: [
      'Multi-axis servomotor bending control',
      'Zero optical distortion forming',
      'Rapid tool-less matrix changeover',
      'Custom curvature programming via touchscreen'
    ],
    specs: [
      { label: 'Bending Type', value: 'Double Curvature (Spherical/Complex)' },
      { label: 'Glass Thickness', value: '3.2mm - 8mm' },
      { label: 'Forming Speed', value: 'High-speed automated forming' },
      { label: 'Control System', value: 'Advanced CNC Bending Software' },
      { label: 'Application', value: 'Automotive, Appliances, Architecture' }
    ],
    faqs: [
      { q: "Can we program custom shapes?", a: "Absolutely. The CNC software allows operators to input exact radii and curvature profiles directly into the system." },
      { q: "How long does it take to change the bending matrix?", a: "The quick-release tool mechanism allows for a complete matrix changeover in under 45 minutes, maximizing uptime." }
    ]
  },
  {
    id: 'skhst-heat-soak',
    categoryId: 'tempering',
    category: 'Tempering',
    name: 'SKHST-Series Heat Soak Oven Test Furnace',
    shortDesc: 'Critical heat soak testing ovens to prevent spontaneous breakage in architectural tempered glass.',
    longDesc: 'Spontaneous breakage due to Nickel Sulfide (NiS) inclusions is a critical liability in architectural installations. The SKHST-Series Heat Soak Oven subjects tempered glass to a rigorous EN 14179-1 compliant thermal cycle. By deliberately inducing failure in defective panels under controlled conditions, it guarantees 100% reliability for glass installed in high-rise facades and structural applications.',
    images: [
      '/catalogue/New Catalogue SK 2025 print_Page_15.jpg',
      '/catalogue/New Catalogue SK 2025 print_Page_16.jpg'
    ],
    highlights: [
      'Strict adherence to EN 14179-1 thermal curve',
      'Precision multi-point thermal data logging',
      'High-capacity A-frame trolley loading',
      'Uniform temperature distribution system'
    ],
    specs: [
      { label: 'Operating Temperature', value: '290°C ± 10°C' },
      { label: 'Compliance Standard', value: 'European EN 14179-1' },
      { label: 'Loading System', value: 'Heavy-duty track trolleys' },
      { label: 'Data Output', value: 'Digital thermal graphs per batch' },
      { label: 'Air Circulation', value: 'High-velocity axial fans' }
    ],
    faqs: [
      { q: "Does the oven generate certified reports?", a: "Yes, the system automatically generates digital and printed reports showing the precise thermal curve achieved during the cycle, satisfying building inspectors and architects." },
      { q: "How many probes are used for temperature monitoring?", a: "The oven utilizes multiple strategically placed thermocouples across the glass surface and ambient air to ensure uniform compliance." }
    ]
  },
  {
    id: 'ef-series-low-e-washer',
    categoryId: 'washing',
    category: 'Washing',
    name: 'EF-Series Ultra Fast Architectural Low-E Glass Washing Machine',
    shortDesc: 'Ultra-fast washing and drying system perfectly safe for delicate Low-E coatings.',
    longDesc: 'The EF-Series is a flagship horizontal glass washing machine engineered for high-throughput architectural glass processing lines. It features specialized ultra-soft brush technologies and multi-stage deionized water filtration to clean Low-E coated glass flawlessly without scratching or degrading the coating. Paired with high-velocity heated air knives, it ensures a perfectly dry, static-free surface ready for IG unit assembly or tempering.',
    images: [
      '/catalogue/New Catalogue SK 2025 print_Page_35.jpg',
      '/catalogue/New Catalogue SK 2025 print_Page_36.jpg',
      '/catalogue/New Catalogue SK 2025 print_Page_37.jpg'
    ],
    highlights: [
      'Safe for all soft-coat Low-E glasses',
      'Ultra-fast throughput speed',
      'Closed-loop water filtration system',
      'Stainless steel anti-corrosion construction'
    ],
    specs: [
      { label: 'Brushes', value: '3-4 Pairs (Special Low-E bristle)' },
      { label: 'Air Knives', value: 'Heated high-velocity angled knives' },
      { label: 'Water System', value: 'Multi-stage DI water compatible' },
      { label: 'Structure', value: '304 Stainless Steel Wash Zone' },
      { label: 'Washing Speed', value: 'Up to 12m/min' }
    ],
    faqs: [
      { q: "Will this machine scratch soft-coat Low-E?", a: "No. The upper brushes are made from specialized micro-bristles designed specifically to clean without degrading silver layers." },
      { q: "Is the water system recirculating?", a: "Yes, it includes a multi-stage closed-loop filtration system to minimize water consumption while maintaining high purity." }
    ]
  },
  {
    id: 'skw-vf-vertical-washer',
    categoryId: 'washing',
    category: 'Washing',
    name: 'SKW-VF-Series Vertical Glass Washing Machine',
    shortDesc: 'Space-saving vertical washing system for IG lines and edging machines.',
    longDesc: 'Designed to integrate seamlessly with vertical double glazing (IG) lines and vertical seaming machines, the SKW-VF-Series provides exceptional cleaning power in a compact footprint. It features an automated thickness adjustment system, robust stainless steel washing compartments, and powerful blowers that guarantee a spotless finish.',
    images: [
      '/catalogue/New Catalogue SK 2025 print_Page_40.jpg',
      '/catalogue/New Catalogue SK 2025 print_Page_41.jpg'
    ],
    highlights: [
      'Compact vertical footprint',
      'Automatic glass thickness detection',
      'Powerful noise-reduced blowers',
      'Easy-maintenance brush drive system'
    ],
    specs: [
      { label: 'Orientation', value: 'Vertical (5 degree tilt)' },
      { label: 'Thickness Range', value: '3mm - 19mm (Auto-adjust)' },
      { label: 'Material', value: 'Stainless steel wash tanks & covers' },
      { label: 'Drying System', value: 'High-pressure ambient/heated air' },
      { label: 'Drive', value: 'Inverter controlled conveyor' }
    ],
    faqs: [
      { q: "Can it be integrated directly into an existing IG line?", a: "Yes, the SKW-VF-Series features universal PLC handshakes to integrate seamlessly with major brand IG lines." },
      { q: "How is maintenance handled on a vertical machine?", a: "The machine features large, easy-access watertight doors and slide-out brush cassettes for simple maintenance." }
    ]
  },
  {
    id: 'skc-multi-function-cutting',
    categoryId: 'cutting',
    category: 'Cutting',
    name: 'SKC-Multi Function Manual Cutting Table',
    shortDesc: 'Versatile cutting table equipped with air cushion and breaking bars.',
    longDesc: 'The SKC-Multi Function Table is the workhorse of agile glass shops. Featuring a high-volume air cushion system, it allows operators to effortlessly float and position heavy jumbo sheets. The integrated pneumatic breaking bars (X and Y axis) ensure clean, precise snaps along score lines, minimizing operator fatigue and reducing glass waste.',
    images: [
      '/catalogue/New Catalogue SK 2025 print_Page_25.jpg',
      '/catalogue/New Catalogue SK 2025 print_Page_26.jpg'
    ],
    highlights: [
      'High-volume blower for air cushion',
      'Pneumatic X and Y breaking bars',
      'Felt-covered scratch-resistant surface',
      'Heavy-duty reinforced steel frame'
    ],
    specs: [
      { label: 'Table Surface', value: 'Industrial grade felt' },
      { label: 'Air Cushion', value: 'High-pressure centrifugal blower' },
      { label: 'Breaking Bars', value: 'Pneumatic, multi-directional' },
      { label: 'Tilting Mechanism', value: 'Hydraulic (Optional)' },
      { label: 'Glass Types', value: 'Float, Laminated, Patterned' }
    ],
    faqs: [
      { q: "Can one operator move a jumbo sheet on this table?", a: "Yes, the powerful air cushion system creates a frictionless surface, allowing a single operator to maneuver heavy sheets easily." },
      { q: "Are the breaking bars foot-pedal operated?", a: "Yes, the pneumatic breaking bars are actuated via robust industrial foot pedals, leaving the operators hands free to support the glass." }
    ]
  },
  {
    id: 'skl-automatic-loader',
    categoryId: 'handling',
    category: 'Handling',
    name: 'SKL-Glass Automatic Loader Jumbo',
    shortDesc: 'Robotic loading system for seamless transfer of jumbo glass sheets.',
    longDesc: 'The SKL-Automatic Loader eliminates manual handling bottlenecks at the start of any processing line. Designed for jumbo and half-jumbo sheets, this robotic system uses a multi-zone vacuum cup array to pick up glass from storage racks and lay it perfectly flat onto cutting tables or edging lines. It maximizes safety, reduces labor costs, and keeps the processing line fed at a continuous, optimized pace.',
    images: [
      '/catalogue/New Catalogue SK 2025 print_Page_18.jpg',
      '/catalogue/New Catalogue SK 2025 print_Page_19.jpg'
    ],
    highlights: [
      'Multi-zone vacuum suction array',
      'High-speed servo motor drive',
      'Automatic rack detection sensors',
      'Eliminates manual handling injuries'
    ],
    specs: [
      { label: 'Max Payload', value: '1000 kg (Jumbo config)' },
      { label: 'Cycle Time', value: 'Fast return cycle' },
      { label: 'Vacuum System', value: 'High-flow venturi/pump' },
      { label: 'Control', value: 'Touchscreen HMI interface' },
      { label: 'Safety', value: 'Vacuum loss alarm & interlocks' }
    ],
    faqs: [
      { q: "What happens if there is a power failure while holding glass?", a: "The system is equipped with safety check-valves and a vacuum reservoir to hold the glass securely even during a total power loss." },
      { q: "Can it load from multiple racks?", a: "Yes, the gantry system can be configured to travel across multiple racks to pick different glass thicknesses automatically." }
    ]
  },
  {
    id: 'skb-break-out-table',
    categoryId: 'cutting',
    category: 'Cutting',
    name: 'SKB-Break Out Table Jumbo',
    shortDesc: 'Robust breaking tables for rapid, safe separation of scored glass sheets.',
    longDesc: 'Designed to follow automated CNC cutting lines, the SKB-Break Out Table provides a large, perfectly flat surface for operators to separate complex scored patterns. Equipped with strategically placed pneumatic breakout bars and an air cushion float system, it ensures fast, clean edges and prevents micro-fractures during the breakout process.',
    images: [
      '/catalogue/New Catalogue SK 2025 print_Page_28.jpg',
      '/catalogue/New Catalogue SK 2025 print_Page_29.jpg'
    ],
    highlights: [
      'Dense felt work surface',
      'Ergonomic pneumatic breakout bars',
      'Seamless integration with CNC tables',
      'Durable powder-coated framework'
    ],
    specs: [
      { label: 'Function', value: 'Manual/Assisted breakout' },
      { label: 'Assist System', value: 'Pneumatic lifting bars' },
      { label: 'Air System', value: 'Optional air cushion' },
      { label: 'Dimensions', value: 'Customizable up to Jumbo' },
      { label: 'Durability', value: 'Heavy-duty impact resistant' }
    ],
    faqs: [
      { q: "Can this table be attached to my existing cutting machine?", a: "Yes, it is designed as a modular unit and can be height-adjusted to align perfectly with any existing cutting line." }
    ]
  }
];
