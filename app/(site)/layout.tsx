import "@/styles/globals.css";

import Init from "@/components/Init";
import { Layout } from "@/layouts/default";

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Init />
      <html lang="en">
        <body className="h-full min-h-full pt-32 bg-shark-900">
          <Layout>{children}</Layout>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
