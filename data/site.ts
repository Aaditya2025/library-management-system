import type {
  NavLink,
  Shift,
  StatItem,
  FacilityItem,
  GalleryImage,
  MembershipPlan,
  Testimonial,
  FAQItem,
} from "@/types";

export const site = {
  name: "Apni Library",
  ownerName: "Amit Nishad",
  tagline: "Apni Padhai, Apni Library",
  taglineEn: "Your prep. Your place. Your Apni Library.",
  description:
    "A quiet, disciplined reading room in the heart of Ballia — built for students preparing for UPSC, SSC, Banking, Railway, NEET, JEE, CUET and state PCS exams.",
  city: "Ballia",
  state: "Uttar Pradesh",
  fullAddress: "Near Station Road, Ward No. 6, Ballia, Uttar Pradesh 277001",
  phone: "+91 7007358343",
  phoneDisplay: "+91 7007358343",
  whatsapp: "7007358343",
  email: "hello@apnilibrary.in",
  mapsQuery: "Station Road, Ballia, Uttar Pradesh 277001",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114567.0!2d84.15!3d25.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBallia%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin",
  founded: 2018,
  social: {
    instagram: "https://instagram.com/apnilibrary.ballia",
    facebook: "https://facebook.com/apnilibrary.ballia",
    youtube: "https://youtube.com/@apnilibrary",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export const examTags: string[] = [
  "UPSC",
  "SSC CGL",
  "Banking (IBPS/SBI)",
  "Railway (RRB)",
  "NEET",
  "JEE",
  "CUET",
  "UP PCS",
  "University Exams",
];

// The signature element: real seat-register data across the four study
// shifts a small-town UP library actually runs, instead of a generic stat block.
export const shifts: Shift[] = [
  { id: "morning", label: "Morning", time: "5:30 AM – 11:00 AM", seatsTotal: 60, seatsLeft: 7 },
  { id: "day", label: "Afternoon", time: "11:00 AM – 5:00 PM", seatsTotal: 60, seatsLeft: 14 },
  { id: "evening", label: "Evening", time: "5:00 PM – 10:30 PM", seatsTotal: 60, seatsLeft: 3 },
  { id: "night", label: "Night", time: "10:30 PM – 5:30 AM", seatsTotal: 40, seatsLeft: 22 },
];

export const stats: StatItem[] = [
  { id: "seats", label: "Total Reading Seats", value: 120 },
  { id: "students", label: "Students Guided", value: 3200, suffix: "+" },
  { id: "years", label: "Years of Service", value: new Date().getFullYear() - site.founded },
  { id: "visitors", label: "Daily Visitors", value: 180, suffix: "+" },
];

export const facilities: FacilityItem[] = [
  { id: "ac", title: "Air-Conditioned Study Hall", description: "Two fully air-conditioned halls that hold a steady, distraction-free temperature through UP's summers.", icon: "Snowflake" },
  { id: "wifi", title: "High-Speed Wi-Fi", description: "Fibre broadband backup for online mock tests, PYQ downloads and video lectures.", icon: "Wifi" },
  { id: "cctv", title: "CCTV Security", description: "Round-the-clock camera coverage across halls, cabins and the entrance for every shift.", icon: "ShieldCheck" },
  { id: "seating", title: "Comfortable Seating", description: "Ergonomic chairs built for eight-hour sessions, not just eight-minute ones.", icon: "Armchair" },
  { id: "desks", title: "Individual Study Desks", description: "Partitioned desks with a personal lamp point, so your neighbour's pace never breaks yours.", icon: "BookOpen" },
  { id: "charging", title: "Mobile Charging Points", description: "A charging socket at every single seat — no queueing at the one wall plug.", icon: "BatteryCharging" },
  { id: "water", title: "Drinking Water (RO)", description: "RO-purified water on every floor, refilled through the day.", icon: "GlassWater" },
  { id: "washroom", title: "Clean Washrooms", description: "Separate, cleaned-thrice-daily washrooms for men and women.", icon: "Sparkles" },
  { id: "power", title: "Power Backup", description: "Full-capacity inverter backup, so a power cut never costs you a revision hour.", icon: "Zap" },
  { id: "silent", title: "Silent Study Environment", description: "A strictly enforced no-phone-call, no-chatter policy inside every hall.", icon: "VolumeX" },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "Reading Hall", title: "Main Reading Hall — Morning Shift", src: "https://picsum.photos/seed/apni-reading-1/1200/900", width: 1200, height: 900 },
  { id: "g2", category: "Reading Hall", title: "Reading Hall — Row Seating", src: "https://picsum.photos/seed/apni-reading-2/1000/1300", width: 1000, height: 1300 },
  { id: "g3", category: "Study Area", title: "Group Study Table", src: "https://picsum.photos/seed/apni-study-1/1200/800", width: 1200, height: 800 },
  { id: "g4", category: "Study Area", title: "Window-side Study Row", src: "https://picsum.photos/seed/apni-study-2/1100/1400", width: 1100, height: 1400 },
  { id: "g5", category: "Individual Cabins", title: "Personal Cabin — Corner Unit", src: "https://picsum.photos/seed/apni-cabin-1/1000/1250", width: 1000, height: 1250 },
  { id: "g6", category: "Individual Cabins", title: "Cabin Row with Lamp Points", src: "https://picsum.photos/seed/apni-cabin-2/1200/900", width: 1200, height: 900 },
  { id: "g7", category: "Reception", title: "Reception & Registration Desk", src: "https://picsum.photos/seed/apni-reception-1/1200/900", width: 1200, height: 900 },
  { id: "g8", category: "Reception", title: "Waiting Lounge", src: "https://picsum.photos/seed/apni-reception-2/1100/1350", width: 1100, height: 1350 },
  { id: "g9", category: "Interior", title: "Reference Book Shelf", src: "https://picsum.photos/seed/apni-interior-1/1000/1300", width: 1000, height: 1300 },
  { id: "g10", category: "Interior", title: "Staircase & Notice Board", src: "https://picsum.photos/seed/apni-interior-2/1200/900", width: 1200, height: 900 },
  { id: "g11", category: "Exterior", title: "Apni Library — Front Facade", src: "https://picsum.photos/seed/apni-exterior-1/1300/900", width: 1300, height: 900 },
  { id: "g12", category: "Exterior", title: "Entrance Gate, Station Road", src: "https://picsum.photos/seed/apni-exterior-2/1200/900", width: 1200, height: 900 },
  { id: "g13", category: "Facilities", title: "Charging Point at Every Seat", src: "https://picsum.photos/seed/apni-facility-1/1000/1250", width: 1000, height: 1250 },
  { id: "g14", category: "Facilities", title: "RO Water Station", src: "https://picsum.photos/seed/apni-facility-2/1100/1300", width: 1100, height: 1300 },
];

export const galleryCategories: GalleryImage["category"][] = [
  "Reading Hall",
  "Study Area",
  "Individual Cabins",
  "Reception",
  "Interior",
  "Exterior",
  "Facilities",
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: "daily",
    name: "Daily Pass",
    price: 40,
    period: "/ day",
    description: "For a one-off mock-test day or a trial visit before you commit.",
    features: ["Any single shift", "Reading hall access", "Drinking water & washroom"],
  },
  {
    id: "weekly",
    name: "Weekly",
    price: 220,
    period: "/ week",
    description: "Short revision sprints before an upcoming exam date.",
    features: ["Any single shift", "Reading hall access", "Wi-Fi access", "Locker (shared)"],
  },
  {
    id: "monthly",
    name: "Monthly",
    price: 700,
    period: "/ month",
    description: "The plan most long-form aspirants stay on through their preparation.",
    features: [
      "Fixed seat, single shift",
      "24x7 Wi-Fi access",
      "Personal locker",
      "Charging point at seat",
      "Free mock-test Sundays",
    ],
    popular: true,
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: 1800,
    period: "/ 3 months",
    description: "Best value for a full exam-cycle commitment — save over the monthly rate.",
    features: [
      "Fixed seat, single shift",
      "24x7 Wi-Fi access",
      "Personal locker",
      "Charging point at seat",
      "Free mock-test Sundays",
      "1 free shift-change per month",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Singh",
    exam: "SSC CGL Aspirant",
    rating: 5,
    review:
      "I moved from studying at home to Apni Library six months before my SSC CGL Tier 1, and the fixed morning seat changed my routine completely. No distractions, no chai breaks that turn into an hour.",
    avatar: "https://picsum.photos/seed/apni-avatar-1/200/200",
  },
  {
    id: "t2",
    name: "Rohit Yadav",
    exam: "UPSC Aspirant",
    rating: 5,
    review:
      "The night shift here is the reason I could keep a day job and still prepare for the Mains. Amit sir keeps the hall genuinely silent — that matters more than people realise.",
    avatar: "https://picsum.photos/seed/apni-avatar-2/200/200",
  },
  {
    id: "t3",
    name: "Anjali Verma",
    exam: "NEET Aspirant",
    rating: 4,
    review:
      "Individual cabins with a lamp point made a real difference for late revision sessions. Wish there were a few more cabins during peak season, but the reading hall is always open as backup.",
    avatar: "https://picsum.photos/seed/apni-avatar-3/200/200",
  },
  {
    id: "t4",
    name: "Saurabh Kumar",
    exam: "RRB NTPC Aspirant",
    rating: 5,
    review:
      "Cleanest washrooms of any library I've studied in across Ballia, and the power backup means a cut never costs me revision time. Simple things, but they add up.",
    avatar: "https://picsum.photos/seed/apni-avatar-4/200/200",
  },
  {
    id: "t5",
    name: "Neha Rai",
    exam: "CUET Aspirant",
    rating: 5,
    review:
      "Booked the quarterly plan right before my Class 12 boards and stayed on for CUET prep. The free Sunday mock tests kept me honest about where I actually stood.",
    avatar: "https://picsum.photos/seed/apni-avatar-5/200/200",
  },
];

export const faqs: FAQItem[] = [
  {
    id: "f1",
    question: "Can I switch my shift after enrolling?",
    answer:
      "Monthly and quarterly members get shift-change requests, subject to seat availability in the new shift — just ask at the reception desk.",
  },
  {
    id: "f2",
    question: "Is a seat guaranteed once I pay?",
    answer:
      "Yes — monthly and quarterly plans come with a fixed, named seat in your chosen shift for the full period. Daily and weekly passes use any open seat in the hall.",
  },
  {
    id: "f3",
    question: "Do you allow late-night unaccompanied study for students under 18?",
    answer:
      "For the night shift, we ask for a parent's written consent for students under 18, kept on file at reception.",
  },
];
