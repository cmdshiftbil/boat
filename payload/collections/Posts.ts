import type { CollectionConfig } from "payload/types";

import { isAdmin } from "../access/isAdmin";
import { publishedOnly } from "../access/publishedOnly";
import { Banner } from "../blocks/Banner";
import { BlogContent } from "../blocks/BlogContent";
import { BlogMarkdown } from "../blocks/BlogMarkdown";
import { MediaBlock } from "../blocks/Media";
import { ReusableContent } from "../blocks/ReusableContent";
import richText from "../fields/richText";
import slug from "../fields/slug";
import { formatPreviewURL } from "../utilities/formatPreviewURL";
// import { regeneratePage } from "../utilities/regeneratePage";
import { triggerDeployHookAfterChange, triggerDeployHookAfterDelete } from "../utilities/hooks";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    preview: (doc) => formatPreviewURL("posts", doc),
  },
  versions: {
    drafts: true,
  },
  access: {
    create: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    afterChange: [triggerDeployHookAfterChange],
    afterDelete: [triggerDeployHookAfterDelete],
    // afterChange: [
    //   ({ req: { payload }, doc }) => {
    //     regeneratePage({
    //       payload,
    //       collection: "posts",
    //       doc,
    //     });
    //   },
    // ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    richText({
      name: "excerpt",
    }),
    {
      name: "content",
      type: "blocks",
      // blocks: [Banner, BlogContent, BlogMarkdown, MediaBlock],
      blocks: [BlogContent],
      required: true,
    },
    slug(),
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedOn",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
    },
  ],
};
