"use client";

import Navbar from "../components/navbar";
import HomePage from "../components/homepage";
import About from "../components/about";
import Skills from "../components/skills";
import Contact from "../components/contact";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import { Experience } from "@/components/experience";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }


  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
