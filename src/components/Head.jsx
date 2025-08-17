import { Helmet } from "react-helmet-async";

export default function Head({ pageTitle, description }) {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/shoreguardians-logo.png" />
      <meta property="og:url" content="https://shoreguardians.club" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ShoreGuardians" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/shoreguardians-logo.png" />

      <link rel="canonical" href="https://shoreguardians.club" />

      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ShoreGuardians",
          "url": "https://shoreguardians.club",
          "logo": "/shoreguardians-logo.png",
          "description": "${description}",
          "author": {
             "@type": "Person",
             "name": "Badhri N Hari"
           },
          "sameAs": [
            "https://www.instagram.com/shore.guardians",
            "https://www.linkedin.com/company/shoreguardians/"
          ]
        }
      `}
      </script>
    </Helmet>
  );
}
