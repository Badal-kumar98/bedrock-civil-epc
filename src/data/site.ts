export const services = [
  {
    slug: "structural-engineering",
    code: "S-01",
    title: "Structural Engineering",
    short: "High-rise frames, long-span steel & seismic design engineered to outlast a century.",
    description:
      "From concept framing to construction-stage engineering, our structural team designs reinforced concrete, structural steel, post-tensioned and composite systems. We run full 3D finite-element modelling, wind and seismic analysis, and performance-based design for towers, stadiums, hospitals and industrial plants.",
    points: ["3D FEM & BIM modelling (Revit / Tekla / ETABS)", "Seismic & wind engineering to ASCE 7, Eurocode 8", "Post-tensioned slabs, transfer structures & deep foundations", "Peer review, proof checking & value engineering"],
    icon: "Building2",
    stat: "420+ structures delivered",
  },
  {
    slug: "bridges-infrastructure",
    code: "S-02",
    title: "Bridges & Transport",
    short: "Cable-stayed bridges, interchanges, metro viaducts and urban expressways.",
    description:
      "Our bridge studio has delivered cable-stayed, balanced-cantilever, steel-composite and precast segmental bridges up to 640 m main spans — plus metro viaducts, flyovers and toll corridors. We handle alignment, hydraulics, bearings, expansion joints and staged construction engineering.",
    points: ["Cable-stayed & extradosed bridges to 640 m spans", "Metro viaducts, launching-girder method expertise", "Pavement design, toll systems & ITS integration", "Bridge health monitoring & load-rating"],
    icon: "Route",
    stat: "186 km of bridges & viaducts",
  },
  {
    slug: "geotechnical-foundations",
    code: "S-03",
    title: "Geotechnical & Foundations",
    short: "Soil investigation, deep piling, diaphragm walls and ground improvement.",
    description:
      "Every landmark starts below ground. Our in-house geotechnical lab and drilling rigs deliver borehole investigation, CPT, pile load testing, slope stability and dewatering design — then engineer the right foundation: driven piles, bored piles, barrettes, rafts or ground improvement.",
    points: ["In-house drilling, CPT & geophysics crews", "Deep excavations, diaphragm walls & shoring", "Pile design to 80 m depth, static & dynamic load tests", "Liquefaction, settlement & slope-stability analysis"],
    icon: "Mountain",
    stat: "9,400+ boreholes logged",
  },
  {
    slug: "water-dams",
    code: "S-04",
    title: "Water, Dams & Hydraulics",
    short: "Gravity dams, reservoirs, treatment plants and flood-defence systems.",
    description:
      "We plan and build the water cycle: gravity and embankment dams, spillways, intake structures, 200 MLD treatment plants, trunk mains, storm drains and coastal defences. Hydraulic modelling (HEC-RAS, MIKE) and dam-break analysis come standard.",
    points: ["Concrete & embankment dams, spillway hydraulics", "Water & wastewater treatment plants", "Flood modelling, levees & pumping stations", "SCADA, leak detection & NRW reduction"],
    icon: "Waves",
    stat: "1.2B litres/day water handled",
  },
  {
    slug: "roads-highways",
    code: "S-05",
    title: "Roads & Highways",
    short: "Expressways, interchanges, flexible & rigid pavements built for heavy freight.",
    description:
      "Greenfield expressways, urban arterials and hill roads — with geometric design, pavement design per IRC/AASHTO, drainage, slope protection, toll plazas and road-safety audits. Our survey drones and LiDAR map 40 km of corridor per day.",
    points: ["Expressways, bypasses & hill-road geometry", "Rigid & flexible pavement design + proof rolling", "Drone LiDAR survey, 40 km/day corridor mapping", "Road-safety audits & blackspot rectification"],
    icon: "Milestone",
    stat: "2,350 km of roads paved",
  },
  {
    slug: "tunnels-underground",
    code: "S-06",
    title: "Tunnels & Underground",
    short: "TBM tunnels, cut-and-cover metros and utility corridors in hard rock & soft soil.",
    description:
      "Twin-bore road and metro tunnels, caverns and micro-tunnelling for utilities. NATM and TBM methods, probe drilling, grouting, ventilation and fire-life-safety design — with real-time convergence monitoring during excavation.",
    points: ["TBM & NATM tunnelling in rock and soft ground", "Metro stations, shafts & cross-passages", "Grouting, dewatering & settlement control", "Ventilation, egress & fire-life-safety"],
    icon: "Drill",
    stat: "68 km tunnelled to date",
  },
  {
    slug: "construction-management",
    code: "S-07",
    title: "Construction Management",
    short: "EPC delivery, PMC supervision, QA/QC labs and zero-harm site safety.",
    description:
      "As EPC contractor and PMC consultant we run planning (Primavera P6), cost control, QA/QC cube testing, third-party audits and HSE management. 14 million safe man-hours and counting — our TRIR sits 63% below industry average.",
    points: ["EPC, design-build & PMC delivery models", "P6 planning, earned-value & cost control", "NABL-accredited cube, NDT & soil labs", "HSE leadership: 14M safe man-hours"],
    icon: "HardHat",
    stat: "14M safe man-hours",
  },
  {
    slug: "survey-bim",
    code: "S-08",
    title: "Survey, BIM & Digital Twins",
    short: "LiDAR, GIS, 4D BIM and IoT structural health monitoring.",
    description:
      "Drone photogrammetry, terrestrial laser scanning, GIS asset mapping and LOD 400 BIM models federated in a common data environment. Post-handover, we install SHM sensors and hand over a live digital twin of every asset.",
    points: ["UAV + LiDAR survey & GIS mapping", "LOD 100–400 BIM, clash detection & 4D sequencing", "IoT SHM: strain, vibration & tilt sensing", "Digital-twin handover & asset registers"],
    icon: "ScanLine",
    stat: "100% projects BIM-modelled",
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  year: string;
  value: string;
  duration: string;
  scope: string;
  image: string;
  status: "Completed" | "Ongoing";
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "harbourlink-cable-stayed-bridge",
    name: "Harbourlink Cable-Stayed Bridge",
    category: "Bridges",
    location: "Kochi Waterfront, Kerala",
    year: "2024",
    value: "$486M",
    duration: "52 months",
    scope: "EPC · Design + Build",
    image: "/images/project-bridge.jpg",
    status: "Completed",
    description:
      "A 2.9 km cable-stayed crossing with a 420 m main span and 132 m diamond pylons. Balanced-cantilever segments were cast in a dedicated yard and erected with a 450-tonne derrick, while navigation spans stayed open throughout — zero marine closures in 4 years.",
    highlights: ["420 m main span, 176 stay cables", "Seismic isolation bearings for Zone III", "Wind-tunnel tested to 220 km/h gusts", "SHM with 240 live sensors"],
    specs: [
      { label: "Total length", value: "2.9 km" },
      { label: "Main span", value: "420 m" },
      { label: "Pylon height", value: "132 m" },
      { label: "Concrete poured", value: "188,000 m³" },
      { label: "Structural steel", value: "21,400 t" },
      { label: "Stay cables", value: "176 nos." },
    ],
  },
  {
    slug: "meridian-expressway-interchange",
    name: "Meridian Expressway & Interchange",
    category: "Highways",
    location: "Outer Ring Corridor, Hyderabad",
    year: "2025",
    value: "$312M",
    duration: "38 months",
    scope: "EPC · 4-lane access-controlled",
    image: "/images/project-highway.jpg",
    status: "Ongoing",
    description:
      "A 34 km access-controlled expressway with a 4-level stack interchange, 11 flyovers and 6 underpasses. 4.2 million m³ of earthwork moved with GPS-guided dozers; rigid pavement designed for 30-year life under 120 MSA loading.",
    highlights: ["34 km concrete pavement, 120 MSA design", "4-level stack interchange", "ETC tolling + full ITS corridor", "62% recycled aggregate in sub-base"],
    specs: [
      { label: "Length", value: "34 km" },
      { label: "Earthwork", value: "4.2M m³" },
      { label: "Flyovers", value: "11 nos." },
      { label: "Concrete paving", value: "310,000 m³" },
      { label: "Design speed", value: "120 km/h" },
      { label: "Progress", value: "78% complete" },
    ],
  },
  {
    slug: "kaveri-gravity-dam",
    name: "Kaveri Valley Gravity Dam",
    category: "Water & Dams",
    location: "Upper Kaveri Basin",
    year: "2023",
    value: "$528M",
    duration: "64 months",
    scope: "EPC · Dam + powerhouse",
    image: "/images/project-dam.jpg",
    status: "Completed",
    description:
      "An 86 m high concrete gravity dam impounding 1.4 BCM for irrigation and 2×60 MW hydropower. Roller-compacted concrete placed at 9,000 m³/day peak, with a morning-glory spillway rated for a 10,000-year flood.",
    highlights: ["86 m high, 1.4 BCM storage", "RCC placement record: 9,000 m³/day", "120 MW powerhouse cavern", "Irrigates 210,000 hectares"],
    specs: [
      { label: "Dam height", value: "86 m" },
      { label: "Crest length", value: "1,240 m" },
      { label: "RCC volume", value: "2.1M m³" },
      { label: "Spillway capacity", value: "18,400 m³/s" },
      { label: "Power", value: "120 MW" },
      { label: "Command area", value: "210,000 ha" },
    ],
  },
  {
    slug: "crestline-commercial-tower",
    name: "Crestline Commercial Tower",
    category: "Structures",
    location: "Financial District, Mumbai",
    year: "2024",
    value: "$264M",
    duration: "44 months",
    scope: "Design-build · Core + shell",
    image: "/images/project-tower.jpg",
    status: "Completed",
    description:
      "A 62-storey composite tower on a 4 m raft over 84 bored piles. Outrigger-and-belt truss system holds drift to H/600 under cyclonic wind; jump-form core climbed a floor every 4 days at peak.",
    highlights: ["62 storeys, 248 m tall", "H/600 drift control with outriggers", "4-day floor cycle with jump-form", "LEED Platinum, 38% energy saving"],
    specs: [
      { label: "Height", value: "248 m" },
      { label: "Floors", value: "62 + 5 basements" },
      { label: "Built-up area", value: "185,000 m²" },
      { label: "Concrete", value: "142,000 m³" },
      { label: "Rebar", value: "24,800 t" },
      { label: "Pile depth", value: "42 m" },
    ],
  },
  {
    slug: "blue-line-metro-tunnel",
    name: "Blue Line Twin Metro Tunnel",
    category: "Tunnels",
    location: "Metro Corridor Ph-II",
    year: "2025",
    value: "$398M",
    duration: "48 months",
    scope: "Design-build · TBM",
    image: "/images/project-tunnel.jpg",
    status: "Ongoing",
    description:
      "Twin 6.8 km EPB-TBM bores through mixed alluvium and weathered rock, with two underground stations built top-down. Surface settlement held under 12 mm against a 25 mm limit — beneath a live heritage precinct.",
    highlights: ["2 × 6.8 km EPB-TBM bores", "Settlement under 12 mm in heritage zone", "2 top-down underground stations", "1,900 precast segments per km"],
    specs: [
      { label: "Bore length", value: "13.6 km" },
      { label: "TBM diameter", value: "6.6 m" },
      { label: "Max depth", value: "28 m" },
      { label: "Segments", value: "26,000 rings" },
      { label: "Stations", value: "2 underground" },
      { label: "Progress", value: "64% complete" },
    ],
  },
  {
    slug: "marina-bay-residences",
    name: "Marina Bay Residences",
    category: "Structures",
    location: "East Coast, Chennai",
    year: "2022",
    value: "$196M",
    duration: "40 months",
    scope: "EPC · Residential township",
    image: "/images/project-marina.jpg",
    status: "Completed",
    description:
      "Five 28-storey waterfront towers with a 3-level podium on reclaimed marine clay — solved with 1,200 stone columns plus preloading. Sea-facing durability: C50 concrete with corrosion inhibitors and a 100-year design life.",
    highlights: ["5 towers × 28 storeys, 1,140 homes", "Ground improvement on marine clay", "100-year durability design", "IGBC Gold township"],
    specs: [
      { label: "Units", value: "1,140" },
      { label: "Built-up area", value: "240,000 m²" },
      { label: "Stone columns", value: "1,200 nos." },
      { label: "Concrete", value: "168,000 m³" },
      { label: "Landscaping", value: "32,000 m²" },
      { label: "Handover", value: "3 weeks early" },
    ],
  },
];

export const categories = ["All", "Bridges", "Highways", "Water & Dams", "Structures", "Tunnels"];

export const team = [
  {
    name: "Engr. Sarah Whitfield",
    role: "Chief Structural Engineer",
    creds: "PE · SE · 24 yrs",
    bio: "Led 60+ high-rise and long-span designs. Ex–Arup associate; publishes on performance-based seismic design.",
    image: "/images/lead-1.jpg",
  },
  {
    name: "Engr. Marcus Hale",
    role: "Director, Bridges & Highways",
    creds: "PE · PEng · 28 yrs",
    bio: "Delivered 9 major river crossings including two cable-stayed bridges. FIDIC contracts specialist.",
    image: "/images/lead-2.jpg",
  },
  {
    name: "Engr. David Okafor",
    role: "Head of Geotechnics & Dams",
    creds: "PhD Geotech · 19 yrs",
    bio: "Dam-safety panel expert; pioneered RCC thermal-crack control methods now used across three states.",
    image: "/images/lead-3.jpg",
  },
];

export const testimonials = [
  {
    quote:
      "Bedrock delivered our river crossing four months early without a single lost-time injury in 6.2 million man-hours. Their segment-yard planning was textbook.",
    name: "Rajesh Menon",
    role: "Project Director, State Highways Authority",
    project: "Harbourlink Bridge",
  },
  {
    quote:
      "The geotechnical honesty stood out. They flagged a marine-clay risk at tender stage and engineered it out — saving us an estimated $11M in claims.",
    name: "Amelia Cross",
    role: "Development Head, Marina Bay Group",
    project: "Marina Bay Residences",
  },
  {
    quote:
      "Settlement under a heritage precinct stayed below 12 mm. Their TBM control room runs like an air-traffic tower. Exceptional instrumentation culture.",
    name: "Daniel Reyes",
    role: "Chief Engineer, Metro Rail Corp",
    project: "Blue Line Tunnel",
  },
];

export const news = [
  {
    tag: "Milestone",
    date: "Aug 18, 2026",
    title: "Final TBM breakthrough on Blue Line twin tunnels",
    excerpt: "TBM 'Kaveri' broke through at Central Station after 13.6 km of boring — settlement never exceeded 12 mm.",
  },
  {
    tag: "Award",
    date: "Jul 02, 2026",
    title: "Harbourlink wins National Bridge Excellence Award",
    excerpt: "Judges cited the zero-closure marine staging and 240-sensor health-monitoring system.",
  },
  {
    tag: "Sustainability",
    date: "May 27, 2026",
    title: "62% recycled aggregate achieved on Meridian Expressway",
    excerpt: "Our mobile crushing plants processed demolition waste into sub-base — 48,000 truck trips avoided.",
  },
];

export const clients = [
  "State Highways Authority",
  "Metro Rail Corp",
  "National Water Board",
  "Port Trust of India",
  "Urban Development Corp",
  "Marina Bay Group",
  "PowerGrid Utilities",
  "Airport Authority",
];
