import {HeroSection} from "@/components/HeroSection";
import {AboutMe} from "@/components/AboutMe";
import {Skills} from "@/components/Skills";
import {ProjectsWork} from "@/components/ProjectsWork";
import {Contact} from "@/components/Contact";
import Navbar from "@/components/Navbar";


export default function Home() {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <AboutMe/>
            <Skills/>
            <ProjectsWork/>
            <Contact/>
        </>
    );
}
