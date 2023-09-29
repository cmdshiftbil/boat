import "@/styles/global.css";

import Init from "@/components/Init";
import { Layout } from "@/layouts/default";
import WebGLTunnel from "@/components/WebGLTunnel";
import { AnimatePresence } from "framer-motion";
export const revalidate = 0;

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Init />
      <html lang="en" suppressHydrationWarning>
        <body className="h-full min-h-full bg-graphite-950">
          <Layout>{children}</Layout>

          {/* <WebGLTunnel /> */}
        </body>
      </html>
    </>
  );
};

export default RootLayout;
