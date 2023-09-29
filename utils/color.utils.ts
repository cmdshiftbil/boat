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

export function hexToNormalizedRGB(hex: string): [number, number, number] {
  // Validate input and ensure it starts with a '#'
  if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(hex)) {
    return [0, 0, 0];
  }

  // If short format, e.g., #abc, expand it to #aabbcc
  if (hex.length === 4) {
    let expanded = "#";
    for (let i = 1; i < 4; i++) {
      expanded += hex.charAt(i) + hex.charAt(i);
    }
    hex = expanded;
  }

  // Extract the R, G, and B parts
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Normalize each value and return as tuple
  return [r / 255, g / 255, b / 255];
}
