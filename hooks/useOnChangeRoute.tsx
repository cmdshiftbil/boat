// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function useOnChangeRoute(callback: () => void) {
//   const router = useRouter();

//   // useEffect(() => {
//   //   router.events.on("routeChangeStart", callback);
//   // }, [router.events]);
// }

"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function useOnChangeRoute() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams!.toString();
    // You can now use the current URL
  }, [pathname, searchParams]);
}
