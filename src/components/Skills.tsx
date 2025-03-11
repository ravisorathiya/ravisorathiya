"use client";
import React from "react";

export function Skills() {
    return (
        <div
            id="skills"
            className="scroll-mt-36 scroll-mt-36h-[] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="w-full max-w-7xl px-4">

                <div className="">
                    <Card>
                        <CardTitle>
                            <p className="text-4xl text-neutral-700 dark:text-neutral-400">
                                Skills
                            </p>
                        </CardTitle>
                        <CardDescription>
                            Below are my core technical skills, categorized by domain expertise:
                        </CardDescription>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-6">
                            {[
                                {
                                    name: "Kotlin",
                                    description: "Building native apps using Kotlin.",
                                    img: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kotlin-colored.svg",
                                },
                                {
                                    name: "PHP",
                                    description: "Programming language for web development.",
                                    img: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg",
                                },
                                {
                                    name: "Laravel",
                                    description: "Full Stack Framework for PHP.",
                                    img: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg",
                                },
                                {
                                    name: "ReactJS",
                                    description: "Building interactive UIs with React.",
                                    img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
                                },
                                {
                                    name: "Vuejs",
                                    description: "Building interactive UIs with Vue.",
                                    img: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg",
                                },
                                {
                                    name: "TailwindCSS",
                                    description: "Building modern web applications with Tailwind CSS.",
                                    img: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
                                },
                                {
                                    name: "NextJS",
                                    description: "Full-stack React framework with SSR.",
                                    img: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg",
                                },
                                {
                                    name: "PostgreSQL",
                                    description: "Relational database management system.",
                                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfU9YbZmeSt7txRuGy0rxZ6NmhogYkQEQoA&s",
                                },
                                {
                                    name: "JavaScript",
                                    description: "Powerful scripting language for web development.",
                                    img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png",
                                },
                                {
                                    name: "TypeScript",
                                    description: "Typed JavaScript for scalable development.",
                                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png",
                                },
                                {
                                    name: "HTML",
                                    description: "Standard language for structuring web content.",
                                    img: "https://upload.wikimedia.org/wikipedia/commons/0/00/HTML5_logo_black.svg",
                                },
                                {
                                    name: "CSS",
                                    description: "Styles and layouts for web pages.",
                                    img: "https://i.gzn.jp/img/2024/11/18/css-new-logo/01_m.png",
                                },
                            ].map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    title={skill.name}
                                    description={skill.description}
                                    img={skill.img}
                                />
                            ))}
                        </div>
                    </Card>
                </div>


                <div className=" mt-10">
                    <Card>
                        <CardTitle>
                            <p className="text-4xl text-neutral-700 dark:text-neutral-400">
                                Tools
                            </p>
                        </CardTitle>
                        <CardDescription>
                            Tools that enhance my productivity and streamline my development process:
                        </CardDescription>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
                            {[

                                {
                                    name: "GitHub",
                                    img: "https://www.svgrepo.com/show/475654/github-color.svg"
                                },
                                {
                                    name: "Android Studio",
                                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxvx7-Wparxr1aKmUd9j2hH59oLWWX3LjPA&s"
                                },   {
                                    name: "PhpStorm",
                                    img: "https://img.stackshare.io/service/1452/icon_PhpStorm.png"
                                },
                                {
                                    name: "WebStorm",
                                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/WebStorm_Icon.svg/2048px-WebStorm_Icon.svg.png"
                                },
                                {
                                    name: "VS Code",
                                    img: "https://external-preview.redd.it/WSuAcyz1u8MoF8cokXspkmOIn8oWXaE8JH-SGXbUUW0.png?auto=webp&s=a6abc62ecb4a08f2bf2f287b79c9bd93006791d1"
                                },
                                {
                                    name: "Postman",
                                    img: "https://cdn.iconscout.com/icon/free/png-512/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256"
                                },
                                {
                                    name: "Copilot",
                                    img: "https://cdn01.justjared.com/wp-content/uploads/headlines/2024/02/microsoft-copilot-super-bowl-commercial.jpg"
                                },
                                {
                                    name: "Figma",
                                    img: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png"
                                },
                                {
                                    name: "Git",
                                    img: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png"
                                },
                                {
                                    name: "Vercel",
                                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwNwDUq_S0U6wDzS60c45kVK5zpxF-03wsQ&s"
                                },
                            ].map((tool) => (
                                <ToolCard key={tool.name} name={tool.name} img={tool.img}/>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

const SkillCard = ({
                       title,
                       description,
                       img,
                   }: {
    title: string;
    description: string;
    img: string;
}) => {
    return (
        <div
            className="p-6 bg-zinc-950 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center">
            <img
                src={img}
                alt={title}
                className="w-20 h-20 mb-4 object-contain transition-transform duration-300 ease-in-out"
            />
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <p className="text-sm text-gray-400 mt-2 text-center">{description}</p>
        </div>
    );
};


const ToolCard = ({name, img}: { name: string; img: string }) => {
    return (
        <div
            className="p-4 bg-zinc-950 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col items-center">
            <img
                src={img}
                alt={name}
                className="w-16 h-16 mb-4 object-contain transition-transform duration-300 ease-in-out"
            />
            <h4 className="text-base font-medium text-white">{name}</h4>
        </div>
    );
};


const Card = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="p-8 rounded-lg shadow-2xl bg-black border border-gray-700">
            {children}
        </div>
    );
};


const CardTitle = ({children}: { children: React.ReactNode }) => {
    return (
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
            {children}
        </h3>
    );
};


const CardDescription = ({children}: { children: React.ReactNode }) => {
    return (
        <p className="text-sm text-gray-400 text-center">{children}</p>
    );
}; 