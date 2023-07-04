import { FieldHook } from "payload/types";

export const formatSlugString = (val: string): string =>
  val
    .replace(/ /g, "-")
    .replace(/[^\w-/]+/g, "")
    .toLowerCase();

export const formatSlug = (fallback: string): FieldHook => {
  return ({ value, originalDoc, data }) => {
    if (typeof value === "string") {
      return formatSlugString(value);
    }
    const fallbackData =
      (data && data[fallback]) || (originalDoc && originalDoc[fallback]);

    if (fallbackData && typeof fallbackData === "string") {
      return formatSlugString(fallbackData);
    }

    return value;
  };
};
