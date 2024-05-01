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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        During my study at the University of South FLorida, I conducted research on 
        utilizing {" "}
        <span className="font-medium">Virtual Reality</span> to assess and train individuals with severe cognitive disabilities.
        The immersive VR modules were designed with the principles of Gamification
        to motivate and encourage the user, tailoring the system to users' 
        special needs related to their disabilities.
      </p>
      <p>
        After my graduation in 2019, I decided to pursue my career as a {" "}
        <span className="font-medium">Software Developer</span> at Zebra Technologies
        working on enabling their enterprise customers with {" "}
        <span className="font-medium">real-time and time-series</span> data
        to help manage device specific metrics. My core stack is Java, Spring Boot, Docker
        and Microservices architecture with over 4 years of experience. Familiar with similar technologies like
        {" "}
        <span className="font-medium">React, GO, gRPC</span> out of personal curiosity.
        
        </p>

        <p>
        <span className="italic">When I'm not coding</span>, you might find me reading a book or in the office gym.
         I also enjoy{" "}
        <span className="font-medium">astronomy and excited about space travel</span>. I am currently
        reading{" "}
        <span className="font-medium">The Book Thief by Markus Zusak
</span>. People who know me, know me as a dedicated, amicable individual with great attention to detail.

      </p>
      <p> _ </p>
      <p>
      I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Software Engineer in Full-stack or Backend development.
      </p>
    </motion.section>
  );
}
