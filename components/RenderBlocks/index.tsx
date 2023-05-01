import React from "react";
// import { Layout } from "../../cms/collections/Page";
// import { components } from "../../cms/blocks";
import classes from "./index.module.css";
import { components } from "@/payload/blocks";

type Props = {
  // layout: Layout[];
  className?: string;
};

const RenderBlocks = ({ layout, className }: any) => (
  <div className={[classes.renderBlocks, className].filter(Boolean).join(" ")}>
    {layout.map((block: any, i: number) => {
      const Block: React.FC<any> = components[block.blockType];

      if (Block) {
        return (
          <section key={i} className={classes.block}>
            <Block {...block} />
          </section>
        );
      }

      return null;
    })}
  </div>
);

export default RenderBlocks;
