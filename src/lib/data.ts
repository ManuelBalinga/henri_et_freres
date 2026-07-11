/* =========================================================================
   Henri & Frères SARL — central content model
   All copy is authored (no lorem ipsum). Figures are directional and can be
   swapped by the client's communications team.
   ========================================================================= */

export const company = {
  name: "Henri & Frères",
  legalName: "Henri & Frères SARL",
  tagline: "Cameroon's distribution backbone",
  foundedTrading: 1993,
  incorporated: 2004,
  hqCity: "Yaoundé",
  hqCountry: "Cameroon",
  employees: "300+",
  phone: "+237 222 00 00 00",
  whatsapp: "237690000000",
  email: "contact@henrietfreres.com",
  careersEmail: "careers@henrietfreres.com",
  address: "Avenue de l'Indépendance, Yaoundé, Cameroon",
  mission:
    "Henri & Frères exists to make trusted everyday products accessible across Cameroon through an efficient nationwide distribution network built on reliability, partnership and service.",
};

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/brands" },
  { label: "Distribution", href: "/distribution" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
];

export const secondaryNav: NavItem[] = [
  { label: "Our Story", href: "/our-story" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Sustainability", href: "/csr" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 30, suffix: "+", label: "Years of trading heritage", sub: "Since 1993" },
  { value: 8, suffix: "", label: "Regional distribution hubs", sub: "Nationwide footprint" },
  { value: 300, suffix: "+", label: "People employed", sub: "Across the network" },
  { value: 12, suffix: "", label: "Principal brand partners", sub: "Global & regional" },
  { value: 25000, suffix: "+", label: "Retail outlets served", sub: "Formal & informal trade" },
  { value: 99.2, suffix: "%", label: "Order fulfilment rate", sub: "Rolling 12 months", decimals: 1 },
];

export type Branch = {
  city: string;
  region: string;
  role: string;
  established: number;
  x: number; // % position on stylised map
  y: number;
  hub?: boolean;
};

export const branches: Branch[] = [
  { city: "Yaoundé", region: "Centre", role: "Headquarters & central warehouse", established: 1993, x: 47, y: 62, hub: true },
  { city: "Douala", region: "Littoral", role: "Import gateway & logistics hub", established: 2005, x: 30, y: 60, hub: true },
  { city: "Bafoussam", region: "West", role: "Regional distribution centre", established: 2008, x: 33, y: 48, hub: true },
  { city: "Bertoua", region: "East", role: "Eastern distribution hub", established: 2011, x: 66, y: 63 },
  { city: "Dschang", region: "West", role: "Highlands depot", established: 2013, x: 29, y: 52 },
  { city: "Mbouda", region: "West", role: "Depot & delivery point", established: 2014, x: 31, y: 45 },
  { city: "Ngaoundéré", region: "Adamawa", role: "Northern gateway hub", established: 2016, x: 58, y: 40, hub: true },
];

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  items: string[];
  image: string;
};

export const categories: Category[] = [
  {
    slug: "food",
    name: "Food",
    blurb: "Pantry staples that anchor the Cameroonian household — pasta, culinary aids and everyday cooking essentials.",
    items: ["Pasta & semolina", "Bouillons & seasoning", "Tomato & sauces", "Cooking oils", "Cereals & grains", "Canned goods"],
    image: "https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "beverages",
    name: "Beverages",
    blurb: "Hot and cold drinks distributed through both modern and traditional trade channels.",
    items: ["Powdered milk drinks", "Malt & instant beverages", "Juices & concentrates", "Water", "Tea & infusions"],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "dairy",
    name: "Dairy",
    blurb: "Shelf-stable dairy and nutrition brands trusted by families across the country.",
    items: ["Powdered milk", "Evaporated milk", "Condensed milk", "Nutritional drinks"],
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "personal-care",
    name: "Personal Care",
    blurb: "Oral, skin and hygiene brands that reach shelves in every region we serve.",
    items: ["Toothpaste & brushes", "Soaps & body wash", "Skin care", "Deodorants", "Hair care"],
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "baby-care",
    name: "Baby Care",
    blurb: "Gentle, dependable products for infants and young children.",
    items: ["Infant nutrition", "Diapers", "Baby toiletries", "Wipes"],
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "household",
    name: "Household",
    blurb: "Cleaning and home-care lines that keep homes and businesses running.",
    items: ["Detergents", "Dishwashing", "Surface cleaners", "Air care", "Insecticides"],
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "stationery",
    name: "Stationery",
    blurb: "School and office supplies — including our own notebook lines produced for the back-to-school season.",
    items: ["Notebooks", "Exercise books", "Pens & pencils", "Office paper", "School kits"],
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1600&auto=format&fit=crop",
  },
];

export type Brand = {
  slug: string;
  name: string;
  kind: "Principal partner" | "Owned brand";
  category: string;
  description: string;
  products: string[];
  since?: string;
};

export const brands: Brand[] = [
  { slug: "unilever", name: "Unilever", kind: "Principal partner", category: "Personal & Home Care", description: "A cornerstone partnership spanning oral care, skin cleansing and home-care lines distributed nationwide.", products: ["Skin cleansing", "Home care", "Oral care"] },
  { slug: "colgate", name: "Colgate", kind: "Principal partner", category: "Oral Care", description: "Oral-care leadership brought to every region through our modern and traditional trade coverage.", products: ["Toothpaste", "Toothbrushes", "Mouthwash"] },
  { slug: "chococam", name: "Chococam", kind: "Principal partner", category: "Confectionery & Spreads", description: "Iconic Cameroonian chocolate and spreads, moved from factory to shelf at national scale.", products: ["Chocolate spreads", "Confectionery", "Cocoa drinks"] },
  { slug: "panzani", name: "Panzani", kind: "Principal partner", category: "Food", description: "Premium pasta and culinary products serving households and food-service customers.", products: ["Pasta", "Sauces", "Semolina"] },
  { slug: "tropik", name: "Tropik", kind: "Principal partner", category: "Food & Culinary", description: "Everyday culinary staples with deep penetration across the informal trade.", products: ["Cooking oil", "Culinary aids"] },
  { slug: "peak", name: "Peak", kind: "Principal partner", category: "Dairy", description: "Trusted powdered and evaporated milk brands distributed through our dairy cold and dry chain.", products: ["Powdered milk", "Evaporated milk"] },
  { slug: "safca", name: "SAFCA", kind: "Principal partner", category: "Food Manufacturing", description: "Regional manufacturing partner supplying staple food lines into our network.", products: ["Milled products", "Staples"] },
  { slug: "mado", name: "MADO", kind: "Principal partner", category: "Food & Beverage", description: "A regional favourite carried across our depots and delivery points.", products: ["Beverages", "Food staples"] },
  { slug: "tiof", name: "TIOF", kind: "Principal partner", category: "Consumer Goods", description: "Consumer-goods lines distributed through the full breadth of our route-to-market.", products: ["Consumer goods"] },
  { slug: "henri", name: "Henri", kind: "Owned brand", category: "Private Label", description: "Our flagship own-brand — dependable everyday quality at an accessible price, built for the Cameroonian shopper.", products: ["Household lines", "Food staples", "Stationery"], since: "Owned brand" },
  { slug: "two-cows", name: "Two Cows", kind: "Owned brand", category: "Dairy & Nutrition", description: "Our own dairy and nutrition label, produced and distributed under Henri & Frères quality standards.", products: ["Powdered milk", "Nutritional drinks"], since: "Owned brand" },
];

export const services = [
  {
    title: "Nationwide Distribution",
    icon: "Truck",
    desc: "A route-to-market that reaches modern retail, wholesalers and the informal trade in every region we operate.",
    points: ["Primary & secondary distribution", "Modern & traditional trade coverage", "Dedicated key-account teams"],
  },
  {
    title: "Importation & Sourcing",
    icon: "Ship",
    desc: "Import handling and customs coordination through the Douala gateway, connecting global manufacturers to Cameroonian shelves.",
    points: ["Import & clearing coordination", "Supplier onboarding", "Regulatory compliance"],
  },
  {
    title: "Warehousing & Storage",
    icon: "Warehouse",
    desc: "Regional warehouses with organised dry storage, stock rotation and inventory discipline built for FMCG velocity.",
    points: ["Regional warehouse footprint", "FEFO stock rotation", "Real-time inventory control"],
  },
  {
    title: "Route-to-Market Strategy",
    icon: "Map",
    desc: "We design and execute go-to-market plans that put principals' brands within arm's reach of the consumer.",
    points: ["Territory planning", "Coverage optimisation", "Trade activation"],
  },
  {
    title: "Retail Execution & Merchandising",
    icon: "Store",
    desc: "Field teams that secure visibility, availability and share of shelf across thousands of outlets.",
    points: ["Merchandising & POS", "Availability audits", "Promotional execution"],
  },
  {
    title: "Data & Trade Insights",
    icon: "BarChart3",
    desc: "Sell-out data and coverage analytics that give principals a clear view of performance on the ground.",
    points: ["Sell-out reporting", "Coverage analytics", "Demand planning support"],
  },
];

export const timeline = [
  { year: "1993", title: "A single shop opens", text: "Henri Tsakou Tiomela begins trading consumer goods from a modest storefront in Yaoundé, built on trust with local retailers." },
  { year: "2004", title: "Henri & Frères is incorporated", text: "The family trading business is formalised as Henri & Frères SARL, laying the foundation for structured growth." },
  { year: "2005", title: "Douala gateway", text: "A Littoral base opens near Cameroon's principal port, anchoring importation and primary distribution." },
  { year: "2008", title: "Expansion into the West", text: "A regional centre in Bafoussam extends coverage into the densely populated western highlands." },
  { year: "2011", title: "Reaching the East", text: "A hub in Bertoua brings dependable supply to the eastern regions." },
  { year: "2016", title: "Northern gateway", text: "Ngaoundéré connects the northern corridor, completing a truly national footprint." },
  { year: "2020", title: "Own brands scale", text: "The Henri and Two Cows private labels grow into trusted household names in their categories." },
  { year: "Today", title: "A national distribution platform", text: "Eight regional hubs, 300+ people and a network serving tens of thousands of outlets across Cameroon." },
];

export const values = [
  { title: "Reliability", icon: "ShieldCheck", text: "Principals and retailers plan around us because we deliver — consistently, and at scale." },
  { title: "Partnership", icon: "Handshake", text: "We grow when our partners grow. Every relationship is built for the long term." },
  { title: "Integrity", icon: "Scale", text: "Transparent dealing and disciplined governance underpin three decades of trust." },
  { title: "Service", icon: "HeartHandshake", text: "From the boardroom to the roadside kiosk, we treat every customer as essential." },
  { title: "Excellence", icon: "Award", text: "We hold ourselves to standards worthy of the world's leading manufacturers." },
  { title: "People", icon: "Users", text: "Our 300+ colleagues are the network. We invest in their growth and safety." },
];

export const sectors = [
  { name: "Supermarkets & Modern Retail", icon: "ShoppingCart" },
  { name: "Wholesalers & Distributors", icon: "PackageOpen" },
  { name: "Traditional & Informal Trade", icon: "Store" },
  { name: "Hotels, Restaurants & Catering", icon: "UtensilsCrossed" },
  { name: "Institutions & Government", icon: "Landmark" },
  { name: "Schools & Education", icon: "GraduationCap" },
];

export const testimonials = [
  { quote: "Henri & Frères give us reach we simply could not build alone. Their coverage of the informal trade is second to none in Cameroon.", name: "Regional Sales Director", role: "Multinational FMCG principal" },
  { quote: "Reliable, disciplined and transparent. Stock arrives when they say it will, which is rare and invaluable in this market.", name: "Category Manager", role: "National supermarket group" },
  { quote: "A genuine partner rather than a vendor. They understand our brands and defend them on the shelf.", name: "Country Manager", role: "Global consumer-goods company" },
];

export const news = [
  { slug: "northern-corridor-capacity", date: "2026-05-18", tag: "Logistics", title: "Henri & Frères expands warehousing capacity on the northern corridor", excerpt: "New storage capacity in Ngaoundéré strengthens supply to the Adamawa, North and Far North regions ahead of peak season." },
  { slug: "back-to-school-notebooks", date: "2026-04-02", tag: "Own Brands", title: "Back-to-school: Henri notebook lines scale for the 2026 season", excerpt: "Our owned stationery range grows to meet demand from schools and retailers across all eight regional hubs." },
  { slug: "peak-partnership-deepens", date: "2026-02-11", tag: "Partnerships", title: "Deepening our dairy distribution partnership", excerpt: "A renewed agreement extends nationwide coverage for trusted powdered and evaporated milk brands." },
  { slug: "fleet-modernisation", date: "2025-11-27", tag: "Operations", title: "Fleet modernisation programme improves on-time delivery", excerpt: "Investment in secondary distribution vehicles lifts our rolling order-fulfilment rate above 99%." },
  { slug: "women-in-distribution", date: "2025-10-09", tag: "People", title: "Growing our women-in-distribution programme", excerpt: "A commitment to opening more field and management roles to women across the network." },
  { slug: "douala-gateway-upgrade", date: "2025-08-15", tag: "Logistics", title: "Douala gateway upgrade cuts clearance times", excerpt: "Improvements at our import gateway reduce lead times from port to regional warehouse." },
];

export const jobs = [
  { title: "Regional Sales Manager", location: "Douala", type: "Full-time", team: "Commercial" },
  { title: "Warehouse Operations Supervisor", location: "Yaoundé", type: "Full-time", team: "Logistics" },
  { title: "Key Account Executive", location: "Bafoussam", type: "Full-time", team: "Commercial" },
  { title: "Fleet & Transport Coordinator", location: "Ngaoundéré", type: "Full-time", team: "Logistics" },
  { title: "Merchandising Field Representative", location: "Bertoua", type: "Full-time", team: "Field Sales" },
  { title: "Demand Planning Analyst", location: "Yaoundé", type: "Full-time", team: "Supply Chain" },
];

export const csrPillars = [
  { title: "Economic opportunity", icon: "Sprout", text: "Every route we open creates livelihoods — for our people and for the tens of thousands of small retailers who depend on dependable supply." },
  { title: "People & safety", icon: "HardHat", text: "We invest in the training, welfare and safety of our 300+ colleagues across warehouses, fleet and field." },
  { title: "Community & education", icon: "GraduationCap", text: "Through affordable school supplies and back-to-school programmes, we help keep classrooms stocked across Cameroon." },
  { title: "Responsible operations", icon: "Leaf", text: "We work to reduce waste, optimise delivery routes and lower the footprint of our distribution network." },
];

export const partnerLogos = ["Unilever", "Colgate", "Chococam", "Panzani", "Tropik", "Peak", "SAFCA", "MADO", "TIOF"];
