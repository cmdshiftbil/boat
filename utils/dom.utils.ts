export const isDom = typeof document !== "undefined";

export function hasPaddingClass(className?: string) {
  const classes = ["px-", "py-", "pb-", "pl-", "pr-", "pt-", "pb-", "p-"];

  const regex = new RegExp(classes.join("|"));

  return regex.test(className ?? "");
}

export function hasWidthClass(className?: string) {
  const classes = ["w-"];

  const regex = new RegExp(classes.join("|"));

  return regex.test(className ?? "");
}

export function hasHeightClass(className?: string) {
  const classes = ["h-"];

  const regex = new RegExp(classes.join("|"));

  return regex.test(className ?? "");
}
