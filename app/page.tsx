"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Startup from "@/components/StartupLogo";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/navitem";
import RecentProjects from "@/components/RecentProject";
import Language from "@/components/language";
import { FloatingDockDemo } from "@/components/floating";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  const [showStartup, setShowStartup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStartup(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      {showStartup ? (
        <Startup />
      ) : (
        <div className="max-w-7xl w-full">
          {/* <FloatingNav navItems={navItems} /> */}
          <Hero />
          <Grid />
          <RecentProjects/>
          <Language/>
          {/* <FloatingDockDemo/> */}
          <Experience/>
          <Approach/>
          <Footer/>
        </div>
      )}
    </main>
  );
}
