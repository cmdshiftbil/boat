import React from "react";
import { components } from ".";
// import type { Page } from "@alpha-nero/cms";
// export type Layout = Page["layout"];

interface BricksProps {
  // layout: Layout;
  className?: string;
}

const Bricks = ({ layout = [], className }: any) => {
  if (layout.length === 0) {
    console.warn("No layout provided to Bricks component.");
  }

  return (
    <div className="block">
      {layout.map((block: any, i: number) => {
        const Block: React.FC<any> = components[block.blockType];

        if (Block) {
          return (
            <section key={i}>
              <Block {...block} />
            </section>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Bricks;
