import { CollectionConfig } from "payload/types";
import path from "path";
import { triggerDeployHookAfterChange } from "../utils/hooks";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: path.resolve(__dirname, "../../media"),
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  hooks: {
    afterChange: [triggerDeployHookAfterChange]
  }
};
