import { Field } from "payload/types";
import formatSlug from "../utils/formatSlug";
import deepMerge from "../utils/deepMerge";
import { Slug } from "../components/Slug";

type SlugParams = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

// By dynamically building fields in code configurations are reusable and concise
const slug: SlugParams = (fieldToUse = "title", overrides) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "slug",
      label: "Slug",
      type: "text",
      localized: true,
      admin: {
        components: {
          Field: Slug,
        },
      },
      hooks: {
        beforeChange: [formatSlug(fieldToUse)],
      },
    },
    overrides
  );

export default slug;
