import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function useRouteChange(callback: any, deps: any[] = []) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(callback, [pathname, searchParams, ...deps]);
}
