import { RichText } from "../RichText";

// type ContentTypeProps = Page["layout"][0];
export const Content = (props: any) => {
  if (props.blockType !== "content") return null;
  const { content } = props;

  return (
    <div className="content-wrap">
      <RichText content={content} />
    </div>
  );
};
