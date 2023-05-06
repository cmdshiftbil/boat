interface WhatWeDoFeatures {
  name: string;
  description: string;
  href: string;
  icon: string;
}

interface OurProcess {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HomeData {
  hero: { title1: string; title2: string };
  presence: { title: string; imageUrl: string; imageAlt: string };
  whatWeDo: { title: string; features: WhatWeDoFeatures[] };
  ourProcess: {
    title: string;
    contactCtaText: string;
    contactCtaUrl: string;
    process: OurProcess[];
  };
  ourClients: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaUrl: string;
  };
}
