import type {
  RichTextElement,
  RichTextField,
  RichTextLeaf,
} from "payload/dist/fields/config/types";

import link from "../link";
import elements from "./elements";
import leaves from "./leaves";
import deepMerge from "@/payload/utilities/deepMerge";

type RichText = (
  overrides?: Partial<RichTextField>,
  additions?: {
    elements?: RichTextElement[];
    leaves?: RichTextLeaf[];
  }
) => RichTextField;

const richText: RichText = (
  overrides,
  additions = {
    elements: [],
    leaves: [],
  }
) =>
  deepMerge<RichTextField, Partial<RichTextField>>(
    {
      name: "richText",
      type: "richText",
      required: true,
      admin: {
        upload: {
          collections: {
            media: {
              fields: [
                {
                  name: "widthPercentage",
                  type: "number",
                  label: "Width (in Percentage)",
                },
                {
                  name: "alignment",
                  label: "Image Alignment",
                  type: "select",
                  required: false,
                  options: [
                    { label: "Left", value: "left" },
                    { label: "Center", value: "center" },
                    { label: "Right", value: "right" },
                  ],
                },
                {
                  name: "enableLink",
                  type: "checkbox",
                  label: "Enable Link",
                },
                link({
                  appearances: false,
                  disableLabel: true,
                  overrides: {
                    admin: {
                      condition: (_, data) => Boolean(data?.enableLink),
                    },
                  },
                }),
                // {
                //   name: "alignment",
                //   type: "checkbox",
                //   label: "Enable Link",
                // },
                // link({
                //   appearances: false,
                //   disableLabel: true,
                //   overrides: {
                //     admin: {
                //       condition: (_, data) => Boolean(data?.enableLink),
                //     },
                //   },
                // }),
              ],
            },
          },
        },
        elements: [...elements, ...(additions.elements || [])],
        leaves: [...leaves, ...(additions.leaves || [])],
      },
    },
    overrides
  );

export default richText;
