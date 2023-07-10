import { CollectionConfig } from "payload/types";
import { publishedOnly } from "../access/publishedOnly";
import slug from "../fields/slug";
import { triggerDeployHookAfterChange } from "../utilities/hooks";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "description", "keywords", "updatedAt"],
    preview: (doc, { locale }) => {
      if (doc?.slug) {
        return `/${doc.slug}${locale ? `?locale=${locale}` : ""}`;
      }

      return "";
    },
  },
  access: {
    read: publishedOnly,
  },
  hooks: {
    afterChange: [triggerDeployHookAfterChange],
    // afterChange: [regenerateStaticPage],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: false,
    },
    {
      name: "keywords",
      type: "text",
      required: false,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    slug(),
  ],
};
