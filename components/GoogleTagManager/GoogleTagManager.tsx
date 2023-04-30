import Script from "next/script";

const GoogleTagManager = ({ id }) => {
  if (process.env.NODE_ENV !== "development") {
    return (
      <>
        <Script
          async
          strategy="worker"
          src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        />
        <Script
          id="gtm-base"
          strategy="worker"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${id}');`,
          }}
        />
      </>
    );
  }

  return null;
};

export default GoogleTagManager;
