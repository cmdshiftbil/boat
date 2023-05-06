import "@/styles/globals.css";

import Init from "@/components/Init";
import { Layout } from "@/layouts/default";

export const metadata = {
  title: "Alpha Nero",
  description: "Generated by Next.js",
};

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Init />
      <html lang="en">
        <body className="h-full min-h-full pt-32 overflow-x-hidden bg-shark-900">
          <Layout>{children}</Layout>
        </body>
      </html>
    </>
  );

  return <></>;
};

export default RootLayout;
