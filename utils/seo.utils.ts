import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export function getPageTitle(page?: string) {
  return page ? `${page} | Alpha Nero` : "Alpha Nero";
}

interface SeoDataInputProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: Image;
}

export const prepareSeoData = (pageData: SeoDataInputProps): Metadata => {

  const title = pageData?.title ? getPageTitle(pageData?.title) : getPageTitle()
  const description = pageData?.description ?? "We specialize in crafting innovative retail concepts that stay ahead of the curve.";
  const keywords = pageData?.keywords ?? "alpha, nero, alpha nero, retail, design, retail design and production, Middle East, Africa";
  const images = pageData?.image?.url ? [pageData.image?.url] : [];

  return {
    title,
    description,
    keywords,
    colorScheme: "dark",
    openGraph: {
      title,
      description,
      type: "website",
      url: "https://alpha-nero.com",
      siteName: getPageTitle(),
      images,
    },
    twitter: {
      card: "summary",
      title,
      description,
      images,
      // siteId: "1467726470533754880",
      // creator: "@alphanero",
      // creatorId: "1467727470533754880",
    },
  };
};
