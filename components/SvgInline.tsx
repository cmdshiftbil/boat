import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const SvgInline = (props: { className: string; url: string }) => {
  const [svg, setSvg] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.text())
      .then((svg) => {
        console.log("SVG", svg);

        setSvg(svg);
      })
      .catch(setIsErrored)
      .then(() => setIsLoaded(true));
  }, [props.url]);

  return (
    <div
      className={cn(
        `svgInline svgInline--${isLoaded ? "loaded" : "loading"} ${
          isErrored ? "svgInline--errored" : ""
        }`,
        props.className
      )}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default SvgInline;
