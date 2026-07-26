import type {
  NavLink,
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
    "A quiet, disciplined reading hall on NH31 in Ballia — known for a good study environment and honest guidance for students preparing for UPSC, SSC, Banking, Railway, NEET, JEE, CUET and state exams.",
  city: "Ballia",
  state: "Uttar Pradesh",
  fullAddress: "Mangla Bhawani Hall, NH31, Ballia, Uttar Pradesh",
  phone: "+91 7007358343",
  phoneDisplay: "+91 7007358343",
  whatsapp: "7007358343",
  email: "apniLibrary@gmail.com",
  mapsQuery: "Apni Library, Ballia, Uttar Pradesh",
  mapsEmbedSrc: "https://www.google.com/maps?cid=11114231066645782846&output=embed",
  mapsLink: "https://www.google.com/maps?cid=11114231066645782846",
  founded: 2024,
  foundedDate: "7 October 2024",
  social: {
    instagram: "https://instagram.com/Apnilibrary0710",
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

// Study shifts — referenced in the About section's timing note.
export const shifts = [
  { id: "morning", label: "Morning", time: "8:00 AM – 12:00 PM" },
  { id: "afternoon", label: "Afternoon", time: "12:00 PM – 4:00 PM" },
  { id: "evening", label: "Evening", time: "4:00 PM – 10:00 PM" },
];

export const stats: StatItem[] = [
  { id: "seats", label: "Total Seats", value: 180 },
  { id: "students", label: "Students Guided", value: 1000, suffix: "+" },
  { id: "years", label: "Years of Service", value: new Date().getFullYear() - site.founded },
  { id: "visitors", label: "Daily Visitors", value: 200, suffix: "+" },
];

export const facilities: FacilityItem[] = [
  { id: "ac", title: "Air-Conditioned Study Hall", description: "A fully air-conditioned hall that holds a steady, distraction-free temperature through UP's summers.", icon: "Snowflake" },
  { id: "wifi", title: "High-Speed Wi-Fi", description: "Fibre broadband backup for online mock tests, PYQ downloads and video lectures.", icon: "Wifi" },
  { id: "cctv", title: "CCTV Security", description: "Round-the-clock camera coverage across the hall and entrance for every shift.", icon: "ShieldCheck" },
  { id: "seating", title: "Comfortable Seating", description: "Ergonomic chairs built for long study sessions, not just short ones.", icon: "Armchair" },
  { id: "desks", title: "Individual Study Desks", description: "Partitioned desks with a personal lamp point, so your neighbour's pace never breaks yours.", icon: "BookOpen" },
  { id: "charging", title: "Mobile Charging Points", description: "A charging socket at every single seat — no queueing at the one wall plug.", icon: "BatteryCharging" },
  { id: "water", title: "Drinking Water (RO)", description: "RO-purified water on the floor, refilled through the day.", icon: "GlassWater" },
  { id: "washroom", title: "Clean Washrooms", description: "Separate, cleaned washrooms for men and women.", icon: "Sparkles" },
  { id: "power", title: "Power Backup", description: "Full-capacity inverter backup, so a power cut never costs you a revision hour.", icon: "Zap" },
  { id: "silent", title: "Silent Study Environment", description: "A strictly enforced no-phone-call, no-chatter policy inside the hall.", icon: "VolumeX" },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "Reading Hall", title: "Main Reading Hall — Morning Shift", src: "/gallery/IMG-20241007-WA0010.jpg.jpeg", width: 1200, height: 900 },
  { id: "g2", category: "Reading Hall", title: "Reading Hall — Row Seating", src: "/gallery/IMG-20241007-WA0016.jpeg", width: 1000, height: 1300 },
  { id: "g3", category: "Study Area", title: "Group Study Table", src: "/gallery/IMG-20241007-WA0023.jpeg", width: 1200, height: 800 },
  { id: "g4", category: "Study Area", title: "Window-side Study Row", src: "/gallery/study-hall.jpg", width: 1100, height: 1400 },
  { id: "g5", category: "Individual Cabins", title: "Personal Cabin — Corner Unit", src: "/gallery/library-view.jpg", width: 1000, height: 1250 },
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
    price: 50,
    period: "/ day",
    description: "For a one-off mock-test day or a trial visit before you commit.",
    features: ["Any single shift", "Reading hall access", "Drinking water & washroom"],
  },
  {
    id: "weekly",
    name: "Weekly",
    price: 200,
    period: "/ week",
    description: "Short revision sprints before an upcoming exam date.",
    features: ["Any single shift", "Reading hall access", "Wi-Fi access"],
  },
  {
    id: "monthly",
    name: "Monthly",
    price: 500,
    period: "/ month",
    description: "The plan most long-form aspirants stay on through their preparation.",
    features: [
      "Fixed seat, single shift",
      "Wi-Fi access",
      "Charging point at seat",
      "Guidance from the founder",
    ],
    popular: true,
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: 1350,
    period: "/ 3 months",
    description: "Best value for a full exam-cycle commitment — save over the monthly rate.",
    features: [
      "Fixed seat, single shift",
      "Wi-Fi access",
      "Charging point at seat",
      "Guidance from the founder",
      "Priority seat renewal",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Raju Chaudhary",
    exam: "SSC GD Clear · Quarterly Plan",
    rating: 5,
    review:
      "Quarterly plan at Apni Library gave me the steady seat and routine I needed. Cleared SSC GD in the same cycle I enrolled here.",
    avatar: "https://picsum.photos/seed/apni-avatar-1/200/200",
  },
  {
    id: "t2",
    name: "Deepak Chaudhary",
    exam: "SSC Aspirant · Quarterly Plan",
    rating: 5,
    review:
      "On the quarterly plan right now, still preparing. What stands out is that the founder actually guides you on strategy, not just rents out a seat.",
    avatar: "https://picsum.photos/seed/apni-avatar-2/200/200",
  },
  {
    id: "t3",
    name: "Kumkum Kumari",
    exam: "State Exam Aspirant · Quarterly Plan",
    rating: 5,
    review:
      "I'm from a village nearby with very few study options close by. The quarterly plan and the guidance from Amit sir made all the difference for my state exam preparation.",
    avatar: "https://picsum.photos/seed/apni-avatar-3/200/200",
  },
  {
    id: "t4",
    name: "Vishal Rai",
    exam: "State Exam Qualified · Monthly Plan",
    rating: 5,
    review:
      "Monthly plan, disciplined hall, and proper guidance whenever I was stuck on which subject to prioritise. Helped me qualify my state exam.",
    avatar: "https://picsum.photos/seed/apni-avatar-4/200/200",
  },
];

export const faqs: FAQItem[] = [
  {
    id: "f1",
    question: "What are the library timings?",
    answer:
      "We run three daily shifts — Morning (8 AM – 12 PM), Afternoon (12 PM – 4 PM), and Evening (4 PM – 10 PM). You can choose any shift when you enrol.",
  },
  {
    id: "f2",
    question: "Is a seat guaranteed once I pay?",
    answer:
      "Yes — monthly and quarterly plans come with a fixed seat in your chosen shift for the full period. Daily and weekly passes use any open seat in the hall.",
  },
  {
    id: "f3",
    question: "Do you offer guidance beyond just a study seat?",
    answer:
      "Yes — the founder personally guides students on strategy and subject focus across UPSC, SSC, Banking, Railway, NEET, JEE, CUET and state exams.",
  },
];