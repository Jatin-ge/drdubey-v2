import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import { defaultSEO } from "@/lib/seo.config";
import { db } from "@/lib/db";

export const revalidate = 3600;

async function getServiceBySlug(slug: string) {
  try {
    return await db.services.findFirst({ where: { slug } });
  } catch {
    return null;
  }
}

async function getAllServices() {
  try {
    return await db.services.findMany();
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const title = service.metaTitle || service.title;
  const description = service.metaDescription || service.subtitle;

  return {
    title,
    description,
    alternates: {
      canonical: `${defaultSEO.siteUrl}/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${defaultSEO.siteUrl}/services/${service.slug}`,
      siteName: defaultSEO.siteName,
      images: [
        {
          url: service.image || `${defaultSEO.siteUrl}/assets/images/hero.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        service.image || `${defaultSEO.siteUrl}/assets/images/hero.png`,
      ],
    },
  };
}

const ServiceJsonLd = ({ service }: { service: any }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: service.title,
    description: service.metaDescription || service.subtitle,
    url: `${defaultSEO.siteUrl}/services/${service.slug}`,
    about: {
      "@type": "MedicalCondition",
      name: service.title,
    },
    author: {
      "@type": "Physician",
      name: "Dr. Dheeraj Dubay",
      url: defaultSEO.siteUrl,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [service, allServices] = await Promise.all([
    getServiceBySlug(params.slug),
    getAllServices(),
  ]);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceJsonLd service={service} />
      <Navbar />
      <div className="container mx-auto px-4">
        <main className="mt-12 mb-16">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            {" / "}
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            {" / "}
            <span className="text-gray-700">{service.title}</span>
          </div>

          <div className="flex flex-col md:flex-row space-x-0 md:space-x-8">
            {/* Main content */}
            <div className="w-full md:w-4/6">
              {service.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-md object-cover w-full max-h-[480px] mb-6"
                />
              )}

              <span className="text-green-700 text-sm block mb-2">
                Dr. Dheeraj Dubay
              </span>

              <h1 className="text-gray-800 text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {service.title}
              </h1>

              <p className="text-gray-600 text-lg font-medium mb-6">
                {service.subtitle}
              </p>

              {/* blog field — rendered as HTML from Quill */}
              <div
                className="text-gray-700 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: service.blog }}
              />

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-10"
              >
                ← Back to all services
              </Link>
            </div>

            {/* Sidebar — other services */}
            <div className="w-full md:w-2/6 mt-10 md:mt-0">
              <div className="md:sticky md:top-8">
                <p className="text-[#EE8A27] font-semibold text-xl mb-4">
                  Other Services
                </p>
                <div className="flex flex-col gap-4">
                  {allServices
                    .filter((s) => s.slug !== service.slug)
                    .map((item) => (
                      <Link
                        key={item.id}
                        href={`/services/${item.slug}`}
                        className="flex gap-3 group"
                      >
                        {item.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-16 object-cover rounded-md flex-shrink-0"
                          />
                        ) : null}
                        <div>
                          <p className="text-gray-800 font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                            {item.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
