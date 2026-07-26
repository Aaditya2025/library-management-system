export type NavLink = {
  label: string;
  href: string;
};

export type Shift = {
  id: string;
  label: string;
  time: string;
  seatsTotal: number;
  seatsLeft: number;
};

export type StatItem = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
};

export type FacilityItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type GalleryCategory =
  | "Reading Hall"
  | "Study Area"
  | "Individual Cabins"
  | "Reception"
  | "Interior"
  | "Exterior"
  | "Facilities";

export type GalleryImage = {
  id: string;
  category: GalleryCategory;
  title: string;
  src: string;
  width: number;
  height: number;
};

export type MembershipPlan = {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  exam: string;
  rating: number;
  review: string;
  avatar: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};
