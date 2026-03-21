"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero2 from "@/components/Hero2/Hero2";
import { Stats } from "@/components/Stats/Stats";
import { Testimonial } from "@/components/Testimonials/Testimonial";
import Services from "@/components/Services/Services";
import Form from "@/components/ContactForm/Form2";
import Card1 from "@/components/ProfileCard/Card1";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import ReviewCard from "@/components/Carousel/ReviewCard";
import Booknow from "@/components/Booknow/Booknow";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/navbar";
import GoogleMaps from "@/components/ui/map";
import Certificate from "@/components/Certificate/Certificate";
import GTM from "@/utils/GTM";
import Certificate2 from "@/components/Certificate/Certificate2";
import AchievementCollage from "@/components/Achievements/AchievementCollage";
import UKHonour from "@/components/UKHonour/UKHonour";
import ETAward from "@/components/ETAward/ETAward";
import FeaturedAchievementsSection from "@/components/Achievements/FeaturedAchievementsSection";
import LatestEvents from "@/components/home/LatestEvents";
import LatestBlogs from "@/components/home/LatestBlogs";

type FeaturedAchievement = {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  imageUrl: string;
};

interface HomePageContentProps {
  featuredAchievements?: FeaturedAchievement[];
  services?: any[];
}

export default function HomePageContent({ featuredAchievements = [], services = [] }: HomePageContentProps) {
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
        <link rel="icon" href="/assets/images/logonew.png" />
      </head>
      <Navbar />
      {/* 1. Hero */}
      <Card1 />
      {/* 2. Stats */}
      <Stats />
      {/* 3. Services */}
      {services.length > 0 && <Services services={services} />}
      {/* 4. Achievements */}
      <FeaturedAchievementsSection achievements={featuredAchievements} />
      <AchievementCollage />
      <UKHonour />
      <ETAward />
      {/* 5. Latest Events */}
      <LatestEvents />
      {/* 6. Testimonials carousel */}
      <Testimonial />
      {/* 7. Blog preview */}
      <LatestBlogs />
      {/* 8. CTA */}
      <Booknow />
      {/* Remaining content */}
      <Hero2 />
      <Certificate2 />
      <Certificate />
      <WhyChoose />
      <GoogleMaps />
      <Form />
      <Footer />
    </div>
  );
}
