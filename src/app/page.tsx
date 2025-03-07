import Image from "next/image";
import {HeroSection} from "@/components/HeroSection";
import {AboutMe} from "@/components/AboutMe";
import {Skills} from "@/components/Skills";
import {ProjectsWork} from "@/components/ProjectsWork";
import {Achievement} from "@/components/Achievement";
import {Contact} from "lucide-react";

export default function Home() {
     return (
         <>
              <HeroSection/>
              <AboutMe/>
              <Skills/>
              <ProjectsWork/>
              <Achievement/>
              <Contact/>
         </>
     );
}
