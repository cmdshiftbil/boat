import Link from "next/link";
import { RichText } from "../RichText";

// type CallToActionProps = Page["layout"][0];

export const CallToAction: React.FC<any> = (props) => {
  if (props.blockType !== "cta") return null;
  const { content, buttons } = props;

  return (
    <div className="cta">
      <div className="cta-wrap">
        <RichText content={content} className="cta-content" />
        {buttons && (
          <ul className="cta-buttons">
            {buttons.map((button: any, i: number) => (
              <li key={i}>
                {typeof button?.page === "object" && (
                  <Link
                    href={"/" + button?.page?.slug ?? "/"}
                    className="cta-button"
                  >
                    {button.label}
                  </Link>
                )}
                {typeof button?.page === "string" && (
                  <a
                    className="cta-button"
                    href={button.url}
                    target={button.newTab ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {button.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
