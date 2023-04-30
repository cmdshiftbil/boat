import resolveConfig from "tailwindcss/resolveConfig";
import config from "../tailwind.config";

export default function useTheme(): any {
  const tailwindConfig = resolveConfig(config);

  return tailwindConfig.theme;
}
