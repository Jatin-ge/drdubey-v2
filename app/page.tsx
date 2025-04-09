"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import Hero2 from "@/components/Hero2/Hero2";
import { Stats } from "@/components/Stats/Stats";
import { Testimonial } from "@/components/Testimonials/Testimonial";

import AOS from "aos";
import "aos/dist/aos.css";
import Services from "@/components/Services/Services";
import Hero3 from "@/components/NewNav/Hero";
import Form from "@/components/ContactForm/Form2";
import Card1 from "@/components/ProfileCard/Card1";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import ReviewCard from "@/components/Carousel/ReviewCard";
import Booknow from "@/components/Booknow/Booknow";
import Footer from "@/components/Footer/Footer";
import Bot from "@/components/Bot/Bot";
import Navbar from "@/components/Navbar/navbar";
import GoogleMaps from "@/components/ui/map";
import Certificate from "@/components/Certificate/Certificate";
import GTM from "@/utils/GTM";
import { db } from "@/lib/db";
import Certificate2 from "@/components/Certificate/Certificate2";
import AchievementCollage from "@/components/Achievements/AchievementCollage";

export default function CardWithForm() {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <head>
        <GTM gtmId="GTM-MDF4W4JT" />

        <title>Dr. Dubay</title>
        <meta
          name="description"
          content="Dr. Dheeraj Dubay, Joint and Hip Replacement Surgeon in Rajasthan"
        />

        <link rel="icon" href="/assets/images/logonew.png" />
      </head>
      <Navbar />

      <Card1 />
      <Stats />
      <AchievementCollage />
      <Hero2 />
      <Certificate2 />
      <Certificate />

      
      

      <WhyChoose />

      <Booknow />

      <Testimonial />
      <GoogleMaps />
      <Form />

      <Footer />

      <Bot />
    </div>
  );
}
