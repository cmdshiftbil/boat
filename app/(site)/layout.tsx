import "@/styles/globals.css";

import Init from "@/components/Init";
import { Layout } from "@/layouts/default";

const SiteLayout = async ({ children }: any) => {
  return (
    <>
      <Init />
      <Layout>{children}</Layout>
    </>
  );
};

export default SiteLayout;
