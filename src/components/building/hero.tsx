"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CalendarDays, MoveRight, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = ["curious", "ambitious", "creative", "collaborative", "relentless"];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTitleNumber((prev) => (prev + 1) % titles.length);
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles.length]);

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="flex gap-8 py-20 lg:pt-40 items-center justify-center flex-col">
                    <div>
                        <Button variant="secondary" size="sm" className="gap-4">
                            Meet the Raptors <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="flex gap-4 flex-col text-center">
                        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                            <span className="text-spektr-cyan-50">Raptors Who Code is</span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 h-[4rem] md:h-[5rem]">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-semibold"
                                        initial={{ opacity: 0, y: -100 }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? { y: 0, opacity: 1 }
                                                : {
                                                      y: titleNumber > index ? -150 : 150,
                                                      opacity: 0,
                                                  }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mt-4">
                            Whether you're a beginner or seasoned dev, Raptors Who Code is your
                            space to explore programming, attend events, build projects, and grow
                            together in tech.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="gap-2">
                            <Users className="w-5 h-5" />
                            Join the Community
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2">
                            <CalendarDays className="w-5 h-5" />
                            Explore Events
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
