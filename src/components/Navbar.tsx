"use client";
import React, {useState} from "react";
import {HoveredLink, Menu, MenuItem,} from "./ui/navbar-menu";
import {cn} from "@/lib/utils";
import { Menu as Hamburger, X } from "lucide-react";


export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-4", className)}>
            <div className="relative flex items-center justify-between md:my-16">

                {/* Centered Menu */}
                <div className="absolute left-1/2 transform -translate-x-1/2 ">
                    <Menu setActive={setActive} className="hidden md:flex space-x-6 rounded-3xl">
                        <HoveredLink href={'#home'}>
                            <MenuItem setActive={setActive} active={active} item="Home" />
                        </HoveredLink>
                        <HoveredLink href={'#about'}>
                            <MenuItem setActive={setActive} active={active} item="About" />
                        </HoveredLink>
                        <HoveredLink href={'#skills'}>
                            <MenuItem setActive={setActive} active={active} item="Skills" />
                        </HoveredLink>
                        <HoveredLink href={'#projects'}>
                            <MenuItem setActive={setActive} active={active} item="Projects" />
                        </HoveredLink>
                        <HoveredLink href={'#contact'}>
                            <MenuItem setActive={setActive} active={active} item="Contact" />
                        </HoveredLink>
                    </Menu>
                </div>

                {/* Hamburger Icon - Aligned to End on Mobile */}
                <button
                    className="md:hidden ml-auto p-2 rounded-md focus:outline-none focus:ring"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-10 h-10" /> : <Hamburger className="w-10 h-10" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden mt-4 flex justify-center",
                    isOpen ? "block" : "hidden"
                )}
            >
                <Menu setActive={setActive} className="flex flex-col space-y-4 rounded-3xl items-end">
                    <HoveredLink href={'#home'}>
                        <MenuItem setActive={setActive} active={active} item="Home" />
                    </HoveredLink>
                    <HoveredLink href={'#about'}>
                        <MenuItem setActive={setActive} active={active} item="About" />
                    </HoveredLink>
                    <HoveredLink href={'#skills'}>
                        <MenuItem setActive={setActive} active={active} item="Skills" />
                    </HoveredLink>
                    <HoveredLink href={'#projects'}>
                        <MenuItem setActive={setActive} active={active} item="Projects" />
                    </HoveredLink>
                    <HoveredLink href={'#contact'}>
                        <MenuItem setActive={setActive} active={active} item="Contact" />
                    </HoveredLink>
                </Menu>
            </div>
        </div>

    );
}