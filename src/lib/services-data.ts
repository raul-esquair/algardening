export interface ServiceData {
  slug: string;
  badge: string;
  headline: string;
  subheadline: string;
  ctaQuestion: string;
  description: string;
  checklist: string[];
  color: string;
  image: string;
  faqs: { question: string; answer: string }[];
  testimonial: {
    quote: string;
    name: string;
    location: string;
  };
}

export const services: ServiceData[] = [
  {
    slug: "lawn-maintenance",
    badge: "Lawn Maintenance",
    headline: "A Lawn You'll Love Coming Home To",
    subheadline:
      "Professional lawn care that keeps your yard looking its best, season after season.",
    ctaQuestion: "Ready for a Lawn You'll Love?",
    description:
      "We take a comprehensive approach to lawn care. From regular mowing to seasonal treatments, our team ensures your property looks pristine year-round. We customize every plan to your yard's unique needs, accounting for East Bay soil conditions, sun exposure, and your personal preferences.",
    checklist: [
      "Weekly mowing & edging",
      "String trimming & blowing",
      "Seasonal fertilization",
      "Leaf & debris cleanup",
      "Weed control & prevention",
      "Seasonal aeration",
    ],
    color: "bg-[#3A6B4A]",
    image: "/images/services/lawn-maintenance.jpg",
    faqs: [
      {
        question: "How often should I schedule lawn maintenance?",
        answer:
          "For most East Bay lawns, we recommend weekly service during the growing season (March–October) and bi-weekly during the cooler months. We'll customize a schedule based on your lawn's specific needs.",
      },
      {
        question: "What does a typical visit include?",
        answer:
          "Every visit includes mowing, edging, string trimming, and blowing. Seasonal services like fertilization, aeration, and weed control are included based on your plan.",
      },
      {
        question: "Do you offer one-time or recurring service?",
        answer:
          "We offer both! Most clients choose recurring service for the best results and value, but we're happy to do one-time cleanups or seasonal work too.",
      },
    ],
    testimonial: {
      quote:
        "They keep our office grounds looking immaculate. Professional team, always on schedule.",
      name: "Mark T.",
      location: "Lafayette",
    },
  },
  {
    slug: "landscape-design",
    badge: "Landscape Design & Installation",
    headline: "Outdoor Spaces Designed Around Your Life",
    subheadline:
      "From concept to completion, we create landscapes that reflect your vision and enhance your lifestyle.",
    ctaQuestion: "Ready to Transform Your Yard?",
    description:
      "Great landscape design starts with listening. We work closely with you to understand how you use your outdoor space, what inspires you, and what challenges your property presents. Then we design and install a landscape that's beautiful, functional, and built to thrive in the East Bay climate.",
    checklist: [
      "On-site design consultation",
      "Custom landscape plans",
      "Planting & garden installation",
      "Sod & lawn establishment",
      "Mulch & ground cover",
      "Irrigation system setup",
    ],
    color: "bg-primary-light",
    image: "/images/services/landscape-design.jpg",
    faqs: [
      {
        question: "How long does a landscape design project take?",
        answer:
          "Most residential projects take 2–6 weeks from design approval to completion, depending on scope. We'll give you a clear timeline during your free estimate.",
      },
      {
        question: "Do you handle the full process from design to installation?",
        answer:
          "Yes! We manage everything — consultation, design, material sourcing, and installation. One team, one point of contact, no hassle.",
      },
      {
        question: "Can you work with my existing landscape?",
        answer:
          "Absolutely. Whether you want a full redesign or just want to refresh specific areas, we'll work with what you have and enhance it.",
      },
    ],
    testimonial: {
      quote:
        "AL Gardening transformed our backyard into an oasis. The design process was collaborative and the result exceeded our expectations.",
      name: "Sarah M.",
      location: "Walnut Creek",
    },
  },
  {
    slug: "tree-shrub-care",
    badge: "Tree & Shrub Care",
    headline: "Healthy Trees, Beautiful Property",
    subheadline:
      "Expert care for the trees and shrubs that define your landscape.",
    ctaQuestion: "Ready for Healthier Trees?",
    description:
      "Trees and shrubs are the backbone of any landscape — and they need expert attention to stay healthy and beautiful. Our team provides professional pruning, trimming, and health assessments tailored to each species. We understand the trees that thrive in the East Bay and how to care for them properly.",
    checklist: [
      "Professional pruning & shaping",
      "Seasonal trimming",
      "Tree & stump removal",
      "Shrub maintenance",
      "Health assessments",
      "Storm damage cleanup",
    ],
    color: "bg-primary",
    image: "/images/services/tree-care.jpg",
    faqs: [
      {
        question: "When is the best time to prune trees?",
        answer:
          "It depends on the species. Most deciduous trees are best pruned in late winter while dormant. We'll advise on the ideal timing for each tree on your property.",
      },
      {
        question: "Do you handle tree removal?",
        answer:
          "Yes, we handle tree and stump removal safely and efficiently. We're fully licensed and insured for all tree work.",
      },
      {
        question: "How do I know if my tree is unhealthy?",
        answer:
          "Signs include discolored leaves, peeling bark, dead branches, or unusual growth patterns. We offer health assessments and can diagnose issues early before they become serious.",
      },
    ],
    testimonial: {
      quote:
        "They saved an oak tree we thought was a lost cause. Knowledgeable, careful, and genuinely passionate about trees.",
      name: "Jennifer L.",
      location: "Pleasant Hill",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string): ServiceData[] {
  return services.filter((s) => s.slug !== slug);
}
