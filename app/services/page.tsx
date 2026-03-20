import { generatePageMetadata } from "@/lib/seo.config";
import React from "react";

export const revalidate = 3600;

export const metadata = generatePageMetadata({
  title: "Joint Replacement Services | Dr. Dheeraj Dubay Jaipur",
  description: "Expert knee replacement, hip replacement, computer navigation surgery and minimally invasive joint replacement in Jaipur by Dr. Dheeraj Dubay.",
  slug: "services",
});
import Link from "next/link";
import Navbar from "@/components/Navbar/navbar";
import { db } from "@/lib/db";
import GTM from "@/utils/GTM";
type Props = {};

const Service = async (props: Props) => {
  let services: any[] = [];
  try {
    services = await db.services.findMany();
  } catch {
    services = [];
  }

  console.log(services);

  return (
    <>
      <head>
        <GTM gtmId="GTM-MDF4W4JT" />

        <title>Dr. Dubay</title>
        <meta
          name="description"
          content="Dr. Dheeraj Dubay, Joint and Hip Replacement Surgeon in Rajasthan"
        />

        {/* Favicon for branding */}
        <link rel="icon" href="/assets/images/logonew.png" />
      </head>
      <Navbar />
      <section className="flex flex-col justify-center max-w-6xl  px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
            Our Services Dedicated to Your Vitality.
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {services.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
            >
              <img
                src={item.image}
                alt="Card img"
                className="object-cover object-center w-full h-48"
              />
              <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="w-full flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                  <div>
                    <a
                      href={`/services/${item.slug}`}
                      className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600 border-b-2 border-blue-600 hover:text-blue-600 dark:text-black"
                    >
                      {item.title}
                    </a>
                    <p className="mb-4 dark:text-black">{item.subtitle}</p>
                  </div>
                  <div>
                    <a
                      href={`/services/${item.slug}`}
                      className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;
