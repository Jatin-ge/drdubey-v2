import { generatePageMetadata } from "@/lib/seo.config";
import React from "react";

import PsychologyIcon from "@mui/icons-material/Psychology";

export const revalidate = 3600;

export const metadata = generatePageMetadata({
  title: "Orthopedic Health Blog | Dr. Dheeraj Dubay",
  description: "Expert articles on joint replacement, knee surgery, hip surgery recovery and orthopedic health by Dr. Dheeraj Dubay, Jaipur.",
  slug: "blogs",
});
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import Navbar from "@/components/Navbar/navbar";
import { db } from "@/lib/db";
import GTM from "@/utils/GTM";
type Props = {};

const page = async (props: Props) => {
  const blogs = await db.blogs.findMany();

  console.log("the blogs are ", blogs);

  console.log(blogs);

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
            Welcome to Our Blog Universe.
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {blogs.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
            >
              <img
                src={item.image1}
                alt="Card img"
                className="object-cover object-center w-full h-48"
              />
              <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="w-full flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                  <div>
                    <a
                      href={`/blogs/${item.slug}`}
                      className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600 border-b-2 border-blue-600 hover:text-blue-600 dark:text-gray-900"
                    >
                      {item.title}
                    </a>
                    <p className="mb-4 dark:text-gray-700">{item.subtitle1}</p>
                  </div>
                  <div>
                    <a
                      href={`/blogs/${item.slug}`}
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

export default page;
