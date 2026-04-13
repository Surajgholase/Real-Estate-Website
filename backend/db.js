const Database = require('better-sqlite3');
const path = require('path');
require('dotenv').config();

const dbPath = process.env.DB_PATH || './database.sqlite';
const db = new Database(path.resolve(dbPath));

// Create content table
db.exec(`
  CREATE TABLE IF NOT EXISTS content (
    id INTEGER PRIMARY KEY,
    data TEXT NOT NULL
  )
`);

// Default content seed
const defaultContent = {
  hero: {
    title: "Welcome to LuxeVilla Heights",
    subtitle: "Experience luxury living redefined. Premium residences crafted for those who appreciate the finest things in life.",
    ctaText: "Explore Now",
    badge: "Now Launching — Phase 1"
  },
  overview: {
    title: "Project Overview",
    description: "LuxeVilla Heights is a landmark residential project offering 2, 3, and 4 BHK premium apartments spread across 12 acres of lush green landscape. Designed by award-winning architects, every detail is crafted for comfort, elegance, and modern living.",
    highlights: [
      { icon: "building", label: "Total Units", value: "480 Apartments" },
      { icon: "layers", label: "Configurations", value: "2, 3 & 4 BHK" },
      { icon: "map-pin", label: "Location", value: "Whitefield, Bangalore" },
      { icon: "calendar", label: "Possession", value: "December 2026" }
    ]
  },
  connectivity: {
    title: "Nearby Connectivity",
    description: "Strategically located with excellent connectivity to major hubs.",
    items: [
      { icon: "train", label: "Metro Station", distance: "0.5 km" },
      { icon: "plane", label: "International Airport", distance: "28 km" },
      { icon: "graduation-cap", label: "Top Schools", distance: "1.2 km" },
      { icon: "hospital", label: "Apollo Hospital", distance: "3 km" },
      { icon: "shopping-bag", label: "Phoenix Mall", distance: "4.5 km" },
      { icon: "briefcase", label: "Tech Park", distance: "2 km" }
    ]
  },
  amenities: {
    title: "World-Class Amenities",
    description: "Over 40+ amenities designed to elevate your everyday life.",
    items: [
      { icon: "waves", name: "Infinity Pool", description: "Olympic-size pool with panoramic views" },
      { icon: "dumbbell", name: "Fitness Center", description: "State-of-the-art gym with personal trainers" },
      { icon: "trees", name: "Zen Garden", description: "Landscaped garden for peace and serenity" },
      { icon: "shield", name: "24/7 Security", description: "CCTV surveillance and biometric access" },
      { icon: "coffee", name: "Clubhouse", description: "Exclusive 5000 sq.ft. clubhouse facility" },
      { icon: "car", name: "Smart Parking", description: "Multi-level automated parking system" },
      { icon: "wifi", name: "High-Speed WiFi", description: "Fibre-optic internet in all common areas" },
      { icon: "gamepad-2", name: "Kids Play Zone", description: "Safe and engaging children's playground" }
    ]
  },
  about: {
    title: "About LuxeVilla Developers",
    description: "With over 25 years of excellence in real estate, LuxeVilla Developers has delivered 50+ landmark projects across India. Our commitment to quality, transparency, and customer satisfaction makes us one of the most trusted names in premium real estate.",
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "50+", label: "Projects Delivered" },
      { value: "15,000+", label: "Happy Families" },
      { value: "12", label: "Cities" }
    ]
  },
  updates: {
    title: "Construction Updates",
    description: "Stay updated with the latest progress on your dream home.",
    items: [
      { date: "March 2025", title: "Foundation Complete", description: "The foundation work for all 8 towers has been successfully completed ahead of schedule.", phase: "Phase 1" },
      { date: "January 2025", title: "Superstructure Begins", description: "Superstructure work commenced for Tower A and B. Floors 1-5 are complete.", phase: "Phase 1" },
      { date: "October 2024", title: "Site Preparation Done", description: "All site preparation, soil testing, and initial groundwork completed successfully.", phase: "Pre-Phase" }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      { question: "What are the available flat configurations?", answer: "We offer 2 BHK (1200 sq.ft), 3 BHK (1650 sq.ft), and 4 BHK (2200 sq.ft) configurations with premium fittings and finishes." },
      { question: "What is the expected possession date?", answer: "The expected possession date for Phase 1 is December 2026, and Phase 2 is March 2027." },
      { question: "What are the payment plan options?", answer: "We offer flexible payment plans including construction-linked plan, down payment plan, and subvention scheme with leading banks." },
      { question: "Is the project RERA registered?", answer: "Yes, LuxeVilla Heights is RERA registered under registration number KA/RERA/12345/2024." },
      { question: "Are there any additional charges besides the base price?", answer: "Additional charges include car parking (₹5 lakh), club membership (₹2 lakh), and maintenance deposit (₹50,000)." }
    ]
  },
  contact: {
    title: "Get In Touch",
    description: "Ready to move into your dream home? Our sales team is here to help you every step of the way.",
    email: "sales@luxevilla.com",
    phone: "+91 98765 43210",
    address: "123 Luxury Lane, Whitefield, Bangalore, KA 560066"
  }
};

// Seed if empty
const row = db.prepare('SELECT id FROM content WHERE id = 1').get();
if (!row) {
  db.prepare('INSERT INTO content (id, data) VALUES (1, ?)').run(JSON.stringify(defaultContent));
  console.log('[DB] Seeded default content');
}

module.exports = db;
