import React from "react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp-booking";

const Hero = ({ heading, message }: { heading: string; message: string }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2]" />
      <div className="p-5 text-white z-[2] md:mt-[-10rem] ">
        <h2 className="text-5xl font-bold w-2/3">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>

        <div className="">
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className=" border  relative inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-blue-700  border-primary text-xl lg:text-2xl text-gray-200   focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white  px-16 py-6  dark:focus:ring-offset-gray-800"
          >
            Book an appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
