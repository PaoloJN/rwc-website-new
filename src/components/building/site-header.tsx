"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PiDiscordLogo, PiDiscordLogoFill, PiDiscordLogoThin } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";

import Image from "next/image";
import { cn } from "@/lib/utils";

const navigationItems = [
    {
        title: "Home",
        href: "/",
        description: "Welcome to Raptors Who Code – a community for tech-savvy minds.",
    },
    {
        title: "Events",
        description: "Stay updated with meetups, hackathons, and workshops.",
        items: [
            {
                title: "Upcoming Events",
                href: "/events",
            },
            {
                title: "Hackathons",
                href: "/events/hackathons",
            },
            {
                title: "Workshops",
                href: "/events/workshops",
            },
            {
                title: "Past Highlights",
                href: "/events/past",
            },
        ],
    },
    {
        title: "Jobs",
        description: "Opportunities for coders, designers, and aspiring devs.",
        items: [
            {
                title: "Job Board",
                href: "/jobs",
            },
            {
                title: "Internships",
                href: "/jobs/internships",
            },
            {
                title: "Freelance Gigs",
                href: "/jobs/freelance",
            },
            {
                title: "Contribute",
                href: "/jobs/contribute",
            },
        ],
    },
    {
        title: "More",
        description: "Explore the community, resources, and beyond.",
        items: [
            {
                title: "Projects",
                href: "/projects",
            },
            {
                title: "Blog",
                href: "/blog",
            },
            {
                title: "About Us",
                href: "/about",
            },
            {
                title: "Contact",
                href: "/contact",
            },
        ],
    },
];

export default function SiteHeader() {
    const [isOpen, setOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // adjust scroll distance here
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "w-full z-40 fixed top-0 left-0 border-b transition-colors duration-300",
                scrolled ? "bg-background/90 backdrop-blur" : "bg-transparent"
            )}
        >
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <div className="flex gap-4 items-center bg-transparent rounded-sm px-4 py-1">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="w-8 h-8"
                        />
                        <p className="font-semibold">Raptors Who Code</p>
                    </div>
                </div>
                <div className="flex lg:justify-center lg:items-center justify-start items-center gap-4">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink className="hover:bg-transparent">
                                                <Button variant="ghost" className="">
                                                    {item.title}
                                                </Button>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm bg-transparent">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">
                                                                {item.title}
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10">
                                                            <FaDiscord className="w-6 h-6 mt-[1px]" />
                                                            <span className="ml-1">
                                                                Join Discord
                                                            </span>
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex justify-end w-full gap-4">
                    <Button variant="outline">Sign in</Button>
                    <Button>
                        <FaDiscord className="w-6 h-6" />
                        Join Discord
                    </Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="flex justify-between items-center"
                                            >
                                                <span className="text-lg">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                            </Link>
                                        ) : (
                                            <p className="text-lg">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center"
                                                >
                                                    <span className="text-muted-foreground">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1" />
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
