"use client";
import Download from "@/components/Download";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MobileMenu from "@/components/MobileMenu";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="lg:w-[1440px] lg:mx-auto">
      <Header setIsExpanded={setIsExpanded} />
      <Main />
      <Features />
      <Download />
      <Faq />
      <Newsletter />
      <Footer />
      <MobileMenu isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </div>
  );
}
