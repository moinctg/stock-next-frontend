// import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import Head from 'next/head';

import React from "react";
import Headers from "@/components/Headers";
import Footer from "@/components/Footer";

import HomeSection from './../components/Sections/HomeSection';
import FeaturesSection from './../components/Sections/FeaturesSection';
import TeamSection from './../components/Sections/TeamSection';
import AboutSection from './../components/Sections/AboutSection';
import ContactSection from './../components/Sections/ContactSection';
import AdminLoginSection from './../components/Sections/AdminLoginSection';
import ProcessSecton from "@/components/Sections/ProcessSection";
import ReviewSection from "@/components/Sections/ReviewSection";

export default function Home() {
  return (
    <>
     
<div>
      <Headers />
      <main>
        <HomeSection />
        <AboutSection />
        <FeaturesSection />
        <ProcessSecton/>
        <TeamSection />
        <ReviewSection/>
        <ContactSection />
        <AdminLoginSection />
      </main>
      <Footer />
    </div>
    </>
  );
}
