import { Block, Field } from "payload/types";
import link from "../../fields/link";
import richText from "../../fields/richText";

const columnFields: Field[] = [
  richText(),
  {
    name: "enableLink",
    type: "checkbox",
  },
  link({
    overrides: {
      admin: {
        condition: (_: any, { enableLink }: any) => Boolean(enableLink),
      },
    },
  }),
];

export const Content: Block = {
  slug: "content",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "layout",
          type: "select",
          defaultValue: "oneColumn",
          options: [
            {
              label: "One Column",
              value: "oneColumn",
            },
            {
              label: "Two Thirds + One Third",
              value: "twoThirdsOneThird",
            },
            {
              label: "Half + Half",
              value: "halfAndHalf",
            },
            {
              label: "Three Columns",
              value: "threeColumns",
            },
          ],
        },
      ],
    },
    {
      name: "columnOne",
      type: "group",
      fields: columnFields,
    },
    {
      name: "columnTwo",
      type: "group",
      fields: columnFields,
      admin: {
        condition: (_, { layout }) =>
          ["twoThirdsOneThird", "halfAndHalf", "threeColumns"].includes(layout),
      },
    },
    {
      name: "columnThree",
      type: "group",
      fields: columnFields,
      admin: {
        condition: (_, { layout }) => layout === "threeColumns",
      },
    },
  ],
};
