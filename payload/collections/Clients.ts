import { CollectionConfig } from "payload/types";
import { triggerDeployHookAfterChange, triggerDeployHookAfterDelete } from "../utils/hooks";

export const Clients: CollectionConfig = {
  slug: "clients",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: "name",
      label: "Client Name",
      type: "text",
      required: true,
    },
    {
      name: "logo",
      label: "Client Logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "url",
      label: "Client URL",
      type: "text",
    },
    {
      name: "showInCarousel",
      label: "Show client in carousel",
      type: "checkbox",
    },
  ],
  hooks: {
    afterChange: [triggerDeployHookAfterChange],
    afterDelete: [triggerDeployHookAfterDelete],
  }
};
