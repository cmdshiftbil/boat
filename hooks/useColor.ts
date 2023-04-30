import useTheme from "./useTheme";

export default function useColor(tailwindColorString: string) {
  const { colors } = useTheme();

  if (!tailwindColorString) {
    return;
  }

  const isTailwindString =
    tailwindColorString.split("").reduce((total, char) => {
      return char === "-" ? total + 1 : total;
    }, 0) === 2;

  if (isTailwindString) {
    const [, color, shade] = tailwindColorString.split("-");

    return colors[color][shade];
  }

  return tailwindColorString;
}
