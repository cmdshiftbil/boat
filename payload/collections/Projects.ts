import { Content } from "./../blocks/Content/Config";
import { CollectionConfig } from "payload/types";
import slug from "../fields/slug";
import formatSlug from "../utils/formatSlug";
import meta from "../fields/meta";

export const ProjectsSlug = "projects";
export const Projects: CollectionConfig = {
  slug: ProjectsSlug,
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: "title",
      label: "Project Title",
      type: "text",
      required: true,
    },
    slug(),
    {
      name: "logo",
      label: "Project Client Logo",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          description: "Project Content",
          fields: [
            {
              name: "location",
              label: "Location",
              type: "text",
              required: true,
            },
            {
              name: "buildDate",
              label: "Build Date",
              type: "date",
              admin: {
                date: {
                  displayFormat: "yyyy",
                },
              },
              required: true,
            },

            {
              name: "images",
              label: "Project Views",
              type: "blocks",
              blocks: [
                {
                  slug: "project-view",
                  fields: [
                    {
                      type: "row",
                      fields: [
                        {
                          name: "view",
                          label: "Project view (image)",
                          type: "select",
                          required: true,
                          options: [
                            { label: "Front view", value: "Front view" },
                            { label: "Back view", value: "Back view" },
                            { label: "Left side", value: "Left side" },
                            { label: "Right side", value: "Right side" },
                            { label: "Top view", value: "Top view" },
                            { label: "Interior view", value: "Interior view" },
                            { label: "Other", value: "Other" },
                          ],
                        },
                        {
                          name: "label",
                          label: "Label (optional)",
                          type: "text",
                        },
                      ],
                    },
                    {
                      name: "image",
                      label: "Image",
                      required: true,
                      type: "upload",
                      relationTo: "media",
                    },
                  ],
                },
              ],
            },
            {
              name: "layout",
              label: "Projet Layout",
              type: "blocks",
              blocks: [Content],
            },
          ],
        },
        {
          label: "SEO",
          description: "SEO Meta Data",
          fields: [meta],
        },
      ],
    },

    {
      name: "client",
      label: "Client",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    //   {
    //     name: "categories",
    //     label: "Categories",
    //     type: "relationship",
    //     relationTo: "categories",
    //     hasMany: true,
    //     admin: {
    //       position: "sidebar",
    //     },
    //   },
  ],
};
