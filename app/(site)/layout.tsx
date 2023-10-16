import "@/styles/global.css";

import Init from "@/components/Init";
import { Layout } from "@/layouts/default";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import LoadingScreen from "./loading";
export const revalidate = 0;

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Init />
      <html lang="en" suppressHydrationWarning>
        <body className="h-full min-h-full bg-graphite-950">
          <Suspense fallback={<LoadingScreen />}>
            <Layout>{children}</Layout>
            {/* <WebGLTunnel /> */}
          </Suspense>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
