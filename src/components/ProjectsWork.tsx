"use client";

import Image, {StaticImageData} from "next/image";
import {Tabs} from "./ui/tabs";
import locker from "@/pictures/locker.png";
import videomaker from "@/pictures/videomaker.png";
import hdvideo from "@/pictures/hdvideo.png";
import emi from "@/pictures/emi.png";

export function ProjectsWork() {
    const tabs = [
        {
            title: "Video Effects",
            value: "Voiz",
            content: (
                <ProjectTabContent
                    title="Voiz"
                    description="Voiz is fully customized music video maker with amazing effects"
                    githubLink="https://github.com/ravisorathiya"
                    liveLink="https://play.google.com/store/apps/details?id=vishow.musical.video.maker.editor&hl=en_IN/"
                    image={videomaker}
                    technologies={[
                        "Android",
                        "Kotlin",
                        "Firebase",
                        "Unity",
                    ]}
                />
            ),
        },
        {
            title: "Gallery Pro Vault",
            value: "Gallery Pro Vault",
            content: (
                <ProjectTabContent
                    title="Gallery Pro Vault"
                    description="Gallery Pro Vault is a feature-rich and secure way to manage and protect your cherished photos and videos."
                    githubLink="https://github.com/ravisorathiya"
                    liveLink="https://play.google.com/store/apps/details?id=com.vault.aigallery&hl=en/"
                    image={locker}
                    technologies={[
                        "Android",
                        "Kotlin",
                        "Firebase",
                    ]}
                />
            ),
        },
        {
            title: "HD Movie Video Player",
            value: "skillVerve",
            content: (
                <ProjectTabContent
                    title="Skill Verve"
                    description="HD Movie Video Player is a perfect multimedia player for phone and tablet."
                    githubLink="https://github.com/ravisorathiya"
                    liveLink="https://play.google.com/store/apps/details?id=com.trueplayer&hl=en/"
                    image={hdvideo}
                    technologies={[
                        "Android",
                        "Kotlin",
                        "Firebase",
                    ]}
                />
            ),
        },
        {
            title: "EMI Calculator",
            value: "EMI Calculator",
            content: (
                <ProjectTabContent
                    title="EMI Calculator"
                    description="EMI loan calculator - mortgage calculator for business loans & exchange rates"
                    githubLink="https://github.com/ravisorathiya"
                    liveLink="https://play.google.com/store/apps/details?id=com.loan.cash.trading.smart.money/"
                    image={emi}
                    technologies={[
                        "Android",
                        "Kotlin",
                        "Firebase",
                    ]}
                />
            ),
        },
    ];

    return (
        <>
            <div id="projects" className="scroll-mt-36 min-h-screen max-w-7xl mx-auto my-16 mt-28 mb-40 px-4">

                <h1 className="text-4xl font-bold text-center text-neutral-700 dark:text-neutral-400 mb-12">
                    Project Work
                </h1>


                <div className="mb-16">
                    <Tabs tabs={tabs}/>
                </div>


            </div>
        </>
    );
}

const ProjectTabContent = ({
                               title,
                               description,
                               githubLink,
                               liveLink,
                               image,
                               technologies,
                           }: {
    title: string;
    description: string;
    githubLink: string;
    liveLink: string;
    image: StaticImageData;
    technologies: string[];
}) => {
    return (
        <div
            className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-gray-900 to-black rounded-xl shadow-lg min-h-[400px] overflow-hidden">
            {/* Text Section */}
            <div className="flex-1 text-white min-h-full">
                <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                <p className="text-base md:text-lg mt-4 leading-relaxed">{description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm font-medium"
                        >
          {tech}
        </span>
                    ))}
                </div>
                <div className="mt-6 flex gap-4">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-neutral-700 text-white rounded-lg hover:bg-gray-800 transition font-medium"
                    >
                        GitHub
                    </a>
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-medium"
                    >
                        Live Demo
                    </a>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 min-h-[300px] md:min-h-full flex justify-center">
                <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={800}
                    className="rounded-lg shadow-md object-contain md:object-cover h-[400px] w-auto md:h-full"
                />
            </div>
        </div>

    );
};


