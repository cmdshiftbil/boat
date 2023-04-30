// Prune a tailwindcss color class to remove the bg- or text- prefix
export const pruneTailwindColor = (tailwindColor: string) => {
  if (!tailwindColor) {
    return;
  }

  if (tailwindColor.startsWith("bg-")) {
    return tailwindColor.replace("bg-", "");
  }

  if (tailwindColor.startsWith("text-")) {
    return tailwindColor.replace("text-", "");
  }

  return tailwindColor;
};

// Transform a background tailwindcss class to a stroke color tailwindcss class
export const bgToStrokeColor = (tailwindColor: string) => {
  if (!tailwindColor) {
    return;
  }

  if (!tailwindColor.startsWith("stroke-")) {
    return `stroke${tailwindColor.slice(tailwindColor.indexOf("-"))}`;
  }

  return tailwindColor;
};

// Transform a background tailwindcss class to a text tailwindcss class
export const bgToTextColor = (tailwindColor: string) => {
  if (!tailwindColor) {
    return;
  }

  if (tailwindColor.startsWith("bg-")) {
    return tailwindColor.replace("bg-", "text-");
  }

  return tailwindColor;
};
