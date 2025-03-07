import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from 'next/image'

export function HeroSection() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 pt-20 md:pt-32"> {/* Added pt-20 for spacing */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-neutral-700 dark:border-neutral-400">
                <Image
                    src="/ravi.jpg"
                    alt="Ravi Sorathiya"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Hi There <span className=" text-purple-100">👋🏻</span>  <br /> I'm Ravi Sorathiya
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                "Full Stack Developer | Passionate Coder"
            </p>
        </BackgroundLines>
    );
}
