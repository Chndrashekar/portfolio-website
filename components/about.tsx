"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-24 max-w-[45rem] text-center leading-8 sm:mb-32 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      During my time at the University of South Florida, I pioneered research that used 
      {" "}
        <span className="font-medium">Virtual Reality</span> to empower individuals with severe cognitive disabilities, 
      crafting immersive experiences fueled by gamification principles.
      </p>
      <p className="mb-3">
        I began my career as a {" "}
        <span className="font-medium">Software Developer</span> at Zebra Technologies, 
        where I've been instrumental in shaping enterprise solutions by harnessing 
        real-time and time-series data. My expertise lies in {" "}
        <span className="font-medium">Java, Spring Boot, Docker, 
        and Microservices</span> architecture, cultivated over years of dedicated work. 
        While I thrive in backend development, my curiosity has led me to explore frontend 
        technologies like React, as well as server-side frameworks like GO and gRPC.
        </p>
        <p className="mb-3">
        <span className="italic">When I'm not coding</span>, you might find me reading a book or in the office gym.
         I also enjoy{" "}
        <span className="font-medium">astronomy and excited about space travel</span>. I am currently
        reading{" "}
        <span className="font-medium"> "The Book Thief" by Markus Zusak
</span>. People who know me, know me as a dedicated, amicable individual with great attention to detail.

      </p>
      <p>
      I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Backend or Full-stack developer.
      </p>
    </motion.section>
  );
}
