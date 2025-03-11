"use client";
import React from "react";

import Image from "next/image";
import {twMerge} from "tailwind-merge";
import {TracingBeam} from "./ui/tracing-beam";
import college from "../pictures/college.jpg";
import maliba from "../pictures/maliba.webp";
import wonder from "../pictures/wonder.jpeg";
import freelancing from "../pictures/freelancing.png";
import {GraduationCap} from "lucide-react";
import {CalendarDays} from "lucide-react";

export function AboutMe() {
    return (
        <div id="about"
             className="scroll-mt-36 min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative z-10">

            <div className="absolute inset-0 pointer-events-none -z-10">
                <div
                    className="w-full h-full dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>


            <div className="relative z-10 px-6 py-12 overflow-hidden">
                <TracingBeam>
                    <h1 className="text-4xl text-neutral-700 dark:text-neutral-400 font-bold text-center mb-8">
                        About
                    </h1>


                    <div className="max-w-2xl mx-auto antialiased pt-6 relative">
                        <div className="mb-10">
                            <p className="text-sm text-neutral-700 dark:text-neutral-400 mb-4">
                                Hello! My name is{" "}
                                <span className="font-bold">Ravi Sorathiya</span>, and I am a
                                Full Stack Developer specializing in Mobile and Web Application Development Using
                                Kotlin,Android Laravel, Inertia.js, Vue.js, React.js,
                                and Git. Experienced in building scalable mobile with Kotlin,Android and web
                                applications with Laravel for
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
                                    <CalendarDays className="mr-3 text-gray-500"/>
                                    {item.year}
                                </p>

                                <p
                                    className={twMerge(
                                        "text-sm flex items-center  text-neutral-700 dark:text-neutral-400 mb-4"
                                    )}
                                >
                                    <GraduationCap className="mr-3 text-gray-500"/> {item.title}
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
            "Sutex Bank College of Computer Application & Science",
        description: (
            <>
                <ul className="list-disc">
                    <li>
                        I have completed my Bachelor of Computer Application from Sutex Bank College of Computer
                        Application & Science in 2019.
                    </li>
                    <li>
                        This is where I started my journey in the field of Computer Science and Software Engineering.
                    </li>
                </ul>
            </>
        ),
        badge: "Bachelor of Computer Application",
        image: college,
        year: "2016 - 2019",
    },
    {
        title:
            "Maliba University",
        description: (
            <>
                <ul className="list-disc">
                    <li>Here is i have done my Master of Computer Application from Maliba University in 2021.</li>
                    <li>
                        After completing graduation, I have decided to pursue my Master of Computer Application from
                        Maliba University.
                    </li>
                </ul>
            </>
        ),
        badge: "Master of Computer application",
        image: maliba,
        year: "2019 - 2021",
    },
    {
        title: "Wonder Softwares",
        description: (
            <>
                <ul className="list-disc">
                    <li>Worked as a Software Developer at Wonder Softwares.</li>
                    <li>
                        This is where I started my journey as Sofware Developer and worked
                        as an Employee of Wonder Softwares From Year 2021 to 2025.
                    </li>
                </ul>
            </>
        ),
        badge: "Sotware Developer",
        image: wonder,
        year: "2021-2025",
    },
    {
        title: "Freelancer",
        description: (
            <>
                <ul className="list-disc">
                    <li>Currently working as a Full time Freelancer.</li>
                    <li>
                        I have been doing freelancing as full stack developer after quitting my job as a Software
                        Developer at Wonder
                        Softwares.
                    </li>
                </ul>
            </>
        ),
        badge: "Sotware Developer",
        image: freelancing,
        year: "2025 - Present",
    },
];
