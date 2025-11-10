"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const UKHonour = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f0f4ff]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            UK Honour Recognition
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Celebrating excellence and recognition from the United Kingdom
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                UK Honour Award
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Dr. Dheeraj Dubay has been honored with a prestigious recognition from the United Kingdom for outstanding contributions in the field of Joint Replacement Surgery. This honor reflects his dedication to excellence and innovation in orthopedic care.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-primary/10 rounded-lg">
                  <span className="text-primary font-semibold">Excellence in Orthopedics</span>
                </div>
                <div className="px-4 py-2 bg-primary/10 rounded-lg">
                  <span className="text-primary font-semibold">International Recognition</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center" style={{ minHeight: '400px', maxHeight: '600px' }}>
                <Image
                  src="/assets/images/uk-honor-1.jpeg"
                  alt="UK Honour Award 1"
                  width={800}
                  height={600}
                  className="object-contain w-full h-full"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center" style={{ minHeight: '400px', maxHeight: '600px' }}>
                <Image
                  src="/assets/images/uk-honor-2.jpeg"
                  alt="UK Honour Award 2"
                  width={800}
                  height={600}
                  className="object-contain w-full h-full"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UKHonour;

