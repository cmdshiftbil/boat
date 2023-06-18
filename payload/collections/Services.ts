import Content from "../blocks/Content/Config";
import { SubServiceBlock } from "./../blocks/SubService/SubService";
import { CollectionConfig } from "payload/types";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: "title",
      label: "Service Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Service Description",
      type: "textarea",
      required: true,
    },
    {
      name: "showInHomePage",
      label: "Show in home page",
      type: "checkbox",
    },
    {
      name: "serviceContent",
      label: "Service Content",
      type: "blocks",
      minRows: 1,
      maxRows: 3,
      blocks: [SubServiceBlock, Content],
    },
  ],
};
