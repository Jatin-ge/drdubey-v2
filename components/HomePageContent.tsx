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
import Bot from "@/components/Bot/Bot";
import Navbar from "@/components/Navbar/navbar";
import GoogleMaps from "@/components/ui/map";
import Certificate from "@/components/Certificate/Certificate";
import GTM from "@/utils/GTM";
import Certificate2 from "@/components/Certificate/Certificate2";
import AchievementCollage from "@/components/Achievements/AchievementCollage";
import UKHonour from "@/components/UKHonour/UKHonour";
import ETAward from "@/components/ETAward/ETAward";
import FeaturedAchievementsSection from "@/components/Achievements/FeaturedAchievementsSection";

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
}

export default function HomePageContent({ featuredAchievements = [] }: HomePageContentProps) {
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
      <Card1 />
      <Stats />
      <UKHonour />
      <ETAward />
      <AchievementCollage />
      <FeaturedAchievementsSection achievements={featuredAchievements} />
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
