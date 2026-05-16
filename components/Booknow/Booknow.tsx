import React from "react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp-booking";

const Booknow = () => {
  return (
    <div className=" my-16">
      <div className="bg-[#E2FFF5] dark:bg-inherit p-10 flex flex-col items-center">
        <h2 className="text-xl text-primary font-semibold">BOOK NOW</h2>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-700 dark:text-gray-200 text-center">
          Book your medical appointment Today
        </h2>
        <div className="mt-8 flex flex-col lg:flex-row text-2xl font-semibold">
          <a
            className="p-2 border rounded relative inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-blue-700 border border-primary text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book an appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
