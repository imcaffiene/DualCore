import Script from "next/script";

export function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  if (!GA_ID || process.env.NODE_ENV === "development") return null;

  return (
    <>
      {/* 1️⃣ Set default consent BEFORE gtag loads — required for GDPR */}
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Default everything to denied until user accepts
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500,
          });
        `}
      </Script>

      {/* 2️⃣ Load GA4 script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* 3️⃣ Configure GA4 */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}