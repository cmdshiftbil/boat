import React, { CSSProperties, Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import { RichTextField } from "payload/types";
import classNames from "classnames";
import Link from "next/link";

type ImageAlignment = "left" | "center" | "right";
// eslint-disable-next-line no-use-before-define
type Children = Leaf[];

type Leaf = {
  type: string;
  value?: {
    url: string;
    alt: string;
  };
  children?: Children;
  url?: string;
  fields: RichTextField;
  [key: string]: unknown;
};

interface ExternalLinkProps {
  children: React.ReactNode;
  newTab?: boolean;
  href: string;
  style?: CSSProperties;
}
const ExternalLink = ({ newTab, href, children, style }: ExternalLinkProps) => (
  <a href={escapeHTML(href)} target={newTab ? "_blank" : "_self"} style={style}>
    {children}
  </a>
);

interface InternalLinkProps {
  children: React.ReactNode;
  newTab?: boolean;
  href: string;
  style?: CSSProperties;
}
const InternalLink = ({ newTab, href, children, style }: InternalLinkProps) => {
  return (
    <Link
      href={href?.replace("/pages", "")?.replace("/posts", "/blog")}
      target={newTab ? "_blank" : "_self"}
      style={style}
    >
      {children}
    </Link>
  );
};

const serialize = (children: Children) =>
  children.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      if (node.underline) {
        text = (
          <span style={{ textDecoration: "underline" }} key={i}>
            {text}
          </span>
        );
      }

      if (node.strikethrough) {
        text = (
          <span style={{ textDecoration: "line-through" }} key={i}>
            {text}
          </span>
        );
      }

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case "h1":
        return (
          <h1 className="text-5xl py-4" key={i}>
            {serialize(node.children as Children)}
          </h1>
        );
      case "h2":
        return (
          <h2 className="text-5xl py-4" key={i}>
            {serialize(node.children as Children)}
          </h2>
        );
      case "h3":
        return (
          <h3 className="text-4xl py-4" key={i}>
            {serialize(node.children as Children)}
          </h3>
        );
      case "h4":
        return (
          <h4 className="text-3xl py-4" key={i}>
            {serialize(node.children as Children)}
          </h4>
        );
      case "h5":
        return (
          <h5 className="text-2xl py-4" key={i}>
            {serialize(node.children as Children)}
          </h5>
        );
      case "h6":
        return (
          <h6 className="text-xl py-4" key={i}>
            {serialize(node.children as Children)}
          </h6>
        );
      case "quote":
        return (
          <blockquote key={i}>
            {serialize(node.children as Children)}
          </blockquote>
        );
      case "upload": {
        const width = (node.fields as any)?.widthPercentage ?? 100;
        const alignment: ImageAlignment =
          (node.fields as any)?.alignment ?? "center";
        let alignmentClass = "justify-center";
        if (alignment === "right") {
          alignmentClass = "justify-end";
        }

        const NodeImage = (props: any) => (
          <img src={node.value?.url} alt="" className="w-full" {...props} />
        );
        const reference = (node.fields as any)?.link?.reference;

        const linkWithImage =
          (node.fields as any)?.link?.type === "custom" ? (
            <ExternalLink
              href={(node.fields as any)?.link?.url}
              newTab={(node.fields as any)?.link?.newTab}
              key={i}
              style={{ width: `${width}%`, border: "1px solid" }}
            >
              <NodeImage />
            </ExternalLink>
          ) : (
            <InternalLink
              href={`/${reference?.relationTo}/${reference?.value?.slug}`}
              newTab={(node.fields as any)?.link?.newTab}
              key={i}
              style={{ width: `${width}%`, border: "1px solid" }}
            >
              <NodeImage />
            </InternalLink>
          );

        return (
          <div className={classNames("flex", alignmentClass)} key={i}>
            {(node.fields as any)?.enableLink ? (
              linkWithImage
            ) : (
              <NodeImage style={{ width: `${width}%`, border: "1px solid" }} />
            )}
          </div>
        );
      }
      case "ul":
        return (
          <ul className="list-disc px-6 py-3" key={i}>
            {serialize(node.children as Children)}
          </ul>
        );
      case "ol":
      case "li":
        return <li key={i}>{serialize(node.children as Children)}</li>;
      case "link":
        const reference = node?.doc as any;
        return node.linkType === "custom" ? (
          <ExternalLink href={node.url ?? ""} newTab={!!node.newTab}>
            {serialize(node.children as Children)}
          </ExternalLink>
        ) : (
          <InternalLink
            href={`/${reference?.relationTo}/${reference?.value?.slug}`}
            newTab={!!node.newTab}
          >
            {serialize(node.children as Children)}
          </InternalLink>
        );

      default:
        return (
          <p key={i} className="pb-3">
            {serialize(node.children as Children)}
          </p>
        );
    }
  });

export default serialize;
