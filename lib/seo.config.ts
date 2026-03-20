export const defaultSEO = {
  siteName: "Dr. Dheeraj Dubay",
  siteUrl: "https://www.drdubay.in",
  defaultTitle: "Dr. Dheeraj Dubay | Best Joint Replacement Surgeon in Jaipur",
  defaultDescription: "Dr. Dheeraj Dubay - Senior Consultant Joint Replacement Surgery at Shalby Hospital Jaipur. 24,000+ successful surgeries, Forbes World Record holder, 16+ years experience.",
  defaultKeywords: "joint replacement surgeon jaipur, knee replacement jaipur, hip replacement jaipur, best orthopedic surgeon rajasthan, dr dheeraj dubay",
  twitterHandle: "@drdheerajdubay",
  locale: "en_IN",
}

export const generatePageMetadata = ({
  title,
  description,
  keywords,
  slug,
  image,
}: {
  title?: string
  description?: string
  keywords?: string
  slug?: string
  image?: string
}) => ({
  title: title ?? defaultSEO.defaultTitle,
  description: description ?? defaultSEO.defaultDescription,
  keywords: keywords ?? defaultSEO.defaultKeywords,
  alternates: {
    canonical: slug ? `${defaultSEO.siteUrl}/${slug}` : defaultSEO.siteUrl,
  },
  openGraph: {
    title: title ?? defaultSEO.defaultTitle,
    description: description ?? defaultSEO.defaultDescription,
    url: slug ? `${defaultSEO.siteUrl}/${slug}` : defaultSEO.siteUrl,
    siteName: defaultSEO.siteName,
    locale: defaultSEO.locale,
    type: "website",
    images: [
      {
        url: image ?? `${defaultSEO.siteUrl}/assets/images/hero.png`,
        width: 1200,
        height: 630,
        alt: title ?? defaultSEO.defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title ?? defaultSEO.defaultTitle,
    description: description ?? defaultSEO.defaultDescription,
    images: [image ?? `${defaultSEO.siteUrl}/assets/images/hero.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
})
