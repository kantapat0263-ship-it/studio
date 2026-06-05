/**
 * Central site configuration used for metadata, structured data, sitemap and
 * robots. Set NEXT_PUBLIC_SITE_URL in the environment to the production origin
 * (e.g. https://www.lotus-eme.com) so canonical/OG URLs resolve correctly.
 */
export const siteConfig = {
  name: "LOTUS ELECTRICAL MECHANICAL ENGINEERING CO.,LTD.",
  shortName: "Lotus EME",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lotus-eme.com",
  description:
    "Lotus Electrical Mechanical Engineering — design, management, procurement and installation of electrical, sanitary, fire protection and air conditioning systems. Engineering excellence for society and the environment.",
  logo: "https://img2.pic.in.th/LOTUS-EME.png",
  email: "lotus_eme@hotmail.com",
  telephone: "+66-2-902-7983",
  foundingDate: "1996-06-03",
  address: {
    streetAddress: "17/12 Moo 9, Liab Klong Si Road, Klong Si",
    addressLocality: "Klong Luang",
    addressRegion: "Pathum Thani",
    postalCode: "12120",
    addressCountry: "TH",
  },
  sameAs: ["https://www.facebook.com/profile.php?id=100027862286419"],
} as const;
