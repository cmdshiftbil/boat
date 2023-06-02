import { Block } from "payload/types";

export const SubServiceBlock: Block = {
  slug: "subService", // required
  labels: {
    singular: "Sub service",
    plural: "Sub services",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },
  ],
};
