import { siteConfig } from "@/lib/site";

/**
 * Emits JSON-LD describing the company so search engines can render a rich
 * knowledge panel (name, logo, address, contact, social profiles).
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: siteConfig.logo,
    image: siteConfig.logo,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    foundingDate: siteConfig.foundingDate,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    sameAs: siteConfig.sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
