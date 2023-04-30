export const isDom = typeof document !== "undefined";

export function hasPaddingClass(className: string) {
  const paddingClasses = ["px", "py", "pb", "pl", "pr", "pt", "pb", "p"];

  const regex = new RegExp(paddingClasses.join("|"));

  return regex.test(className);
}
