interface PageSectionBase {
  title: string;
  subtitle?: string;
}
interface WhatWeDoFeature {
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
interface Client {
  name: string;
  logo: string;
  url: string;
  showInCarousel: boolean;
}

interface HeadlineSectionData extends PageSectionBase { }
interface HeroSectionData extends PageSectionBase { };
interface PresenceSectionData extends PageSectionBase {
  imageUrl: string;
  imageAlt: string;
}
interface WhatWeDoSectionData extends PageSectionBase {
  features: WhatWeDoFeature[];
}
interface OurProcessSectionData extends PageSectionBase {
  contactCtaText: string;
  contactCtaUrl: string;
  process: OurProcess[];
}
interface OurClientsSectionData extends PageSectionBase {
  ctaText: string;
  ctaUrl: string;
  clients: Client[];
}

export interface HomeData {
  mainHeadline: HeadlineSectionData;
  hero: HeroSectionData
  presence: PresenceSectionData;
  whatWeDo: WhatWeDoSectionData;
  ourProcess: OurProcessSectionData;
  ourClients: OurClientsSectionData;
}
