export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: "industrial-cleaning",
    title: "Industrial Cleaning",
    shortDescription: "Comprehensive cleaning solutions for industrial facilities, equipment, and infrastructure.",
    fullDescription: "Our industrial cleaning services provide thorough, professional cleaning for manufacturing plants, refineries, warehouses, and industrial facilities of all sizes. We use state-of-the-art equipment and environmentally responsible methods to ensure your facility meets the highest standards of cleanliness and safety.",
    benefits: [
      "Improved workplace safety and compliance",
      "Extended equipment lifespan",
      "Reduced downtime during cleaning operations",
      "Environmentally responsible cleaning methods",
      "Customized cleaning schedules to fit your operations"
    ],
    icon: "🏭"
  },
  {
    slug: "hydro-excavation",
    title: "Hydro Excavation",
    shortDescription: "Safe, non-destructive excavation using high-pressure water and vacuum technology.",
    fullDescription: "Hydro excavation is the safest and most precise method for digging around underground utilities. Using high-pressure water to break up soil and a powerful vacuum to remove debris, we can excavate with pinpoint accuracy while minimizing the risk of damage to existing infrastructure.",
    benefits: [
      "Non-destructive digging protects underground utilities",
      "Precise excavation in tight or sensitive areas",
      "Reduced risk of utility strikes and damage",
      "Faster project completion times",
      "Year-round operation in various soil conditions"
    ],
    icon: "💧"
  },
  {
    slug: "vacuum-truck",
    title: "Vacuum Truck Services",
    shortDescription: "Powerful vacuum trucks for liquid and solid waste removal and transport.",
    fullDescription: "Our fleet of vacuum trucks provides reliable removal and transport of liquids, sludge, and solid materials. Whether you need routine maintenance, emergency response, or specialized waste handling, our experienced operators deliver efficient, compliant solutions.",
    benefits: [
      "Rapid response for emergency situations",
      "Handles both wet and dry materials",
      "Compliant disposal and documentation",
      "Large capacity trucks for major projects",
      "24/7 availability for critical needs"
    ],
    icon: "🚛"
  },
  {
    slug: "line-jetting",
    title: "Line Jetting",
    shortDescription: "High-pressure water jetting to clear and clean pipes and drainage systems.",
    fullDescription: "Our line jetting services use high-pressure water to blast away blockages, buildup, and debris from pipes and drainage systems. This effective cleaning method restores full flow capacity and helps prevent future clogs and backups.",
    benefits: [
      "Clears stubborn blockages and buildup",
      "Restores pipes to near-original capacity",
      "Environmentally friendly - uses only water",
      "Preventive maintenance reduces emergency calls",
      "Video inspection available to verify results"
    ],
    icon: "🔧"
  },
  {
    slug: "sewer-jetting",
    title: "Sewer Jetting",
    shortDescription: "Professional sewer line cleaning and maintenance for municipalities and businesses.",
    fullDescription: "Keep your sewer systems flowing freely with our professional sewer jetting services. We handle everything from routine maintenance to emergency blockage removal, using powerful equipment that cleans thoroughly while being safe for all pipe materials.",
    benefits: [
      "Prevents costly sewer backups and overflows",
      "Removes grease, roots, and mineral deposits",
      "Safe for all pipe types and ages",
      "Reduces odors and improves system health",
      "Scheduled maintenance programs available"
    ],
    icon: "🚿"
  },
  {
    slug: "pipe-repair",
    title: "Pipe Repair",
    shortDescription: "Expert pipe repair and rehabilitation services to restore your infrastructure.",
    fullDescription: "When pipes fail, you need fast, reliable repairs. Our pipe repair services address cracks, leaks, corrosion, and structural damage. We offer both traditional repair methods and modern trenchless technologies to minimize disruption to your operations.",
    benefits: [
      "Quick response minimizes downtime",
      "Trenchless options reduce excavation needs",
      "Repairs extend pipe system lifespan",
      "Cost-effective alternatives to full replacement",
      "Comprehensive inspection and assessment"
    ],
    icon: "🔩"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
