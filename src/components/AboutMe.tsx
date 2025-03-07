"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import college from "../pictures/college.jpg";
import meritourious from "../pictures/meritourious.avif";
import school from "../pictures/school.jpg";
import { GraduationCap } from "lucide-react";
import { CalendarDays } from "lucide-react";

export function AboutMe() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative z-10">
      
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="w-full h-full dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

     
      <div className="relative z-10 px-6 py-12">
        <TracingBeam>
          <h1 className="text-4xl text-neutral-700 dark:text-neutral-400 font-bold text-center mb-8">
            About
          </h1>

        
          <div className="max-w-2xl mx-auto antialiased pt-6 relative">
            <div className="mb-10">
              <p className="text-sm text-neutral-700 dark:text-neutral-400 mb-4">
                Hello! My name is{" "}
                <span className="font-bold">Ravi Sorathiya</span>, and I am a
                Full Stack Developer specializing in Mobile and Web Application Development Using Kotlin,Android Laravel, Inertia.js, Vue.js, React.js,
                and Git. Experienced in building scalable mobile with Kotlin,Android  and web applications with Laravel for
                backend development and Vue.js/React.js for dynamic, interactive UIs.
                Proficient in Inertia.js for seamless full-stack development without API
                complexities. Strong expertise in MySQL, RESTful APIs, authentication, and
                security best practices. Experienced in Git for version control and collaborative
                development. Adept at performance optimization and
                modern web technologies. Passionate about delivering high-quality
                applications with clean, maintainable code
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-400 mb-4">
                Beyond coding, I enjoy exploring new technologies and continuously enhancing my skills.
                Whether it's solving complex problems or collaborating on
                impactful projects, I am always up for a challenge. Let’s take
                a journey through my academic and professional growth below.
              </p>
            </div>
          </div>

          
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-black text-white rounded-full border text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>
                <p className="text-neutral-700 flex items-center text-sm mb-3 dark:text-neutral-400">
                  <CalendarDays className="mr-3 text-gray-500" />
                  {item.year}
                </p>

                <p
                  className={twMerge(
                    "text-sm flex items-center  text-neutral-700 dark:text-neutral-400 mb-4"
                  )}
                >
                  <GraduationCap className="mr-3 text-gray-500" /> {item.title}
                </p>

                <div className="text-sm prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="300"
                      width="300"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  <span className="text-neutral-700 dark:text-neutral-400">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}

const dummyContent = [
  {
    title:
      "B.Tech CSE || Baba Farid College of Engineering & Technology, Bathinda",
    description: (
      <>
        <ul className="list-disc">
          <li>
            Active participant in coding competitions and hackathons.
          </li>
          <li>
            Working on multiple MERN stack projects as part of my academic and
            personal growth.
          </li>
        </ul>
      </>
    ),
    badge: "Under Graduation",
    image: college,
    year: "2021 - 2025",
  },
  {
    title:
      "Non-Medical || Sen. Sec. Residential School for Meritourious Students, Ludhiana",
    description: (
      <>
        <ul className="list-disc">
          <li>Secured 88% in the PSEB board examinations.</li>
          <li>
            Developed a keen interest in problem-solving and algorithms during
            these years.
          </li>
        </ul>
      </>
    ),
    badge: "Higher Secondary (Class 12)",
    image: meritourious,
    year: "2019 - 2021",
  },
  {
    title: "Govt. Sen. Sec. School, Threeke, Ludhiana",
    description: (
      <>
        <ul className="list-disc">
          <li>Secured 85% in the PSEB board examinations.</li>
          <li>
            Awarded 'Best Student of the Year' for outstanding academic
            performance.
          </li>
        </ul>
      </>
    ),
    badge: "Secondary (Class 10)",
    image: school,
    year: "2019",
  },
];
