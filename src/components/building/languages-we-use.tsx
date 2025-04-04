"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function LanguagesWeUse() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const languages = [
        { name: "Python", logo: "/assets/languages/python.png" },
        { name: "JavaScript", logo: "/assets/languages/javascript.png" },
        { name: "C++", logo: "/assets/languages/cpp.png" },
        { name: "Java", logo: "/assets/languages/java.png" },
        { name: "HTML", logo: "/assets/languages/html.png" },
        { name: "CSS", logo: "/assets/languages/css.png" },
        { name: "TypeScript", logo: "/assets/languages/typescript.png" },
        { name: "C#", logo: "/assets/languages/csharp.png" },
        { name: "PostgreSQL", logo: "/assets/languages/postgresql.png" },
        { name: "React", logo: "/assets/languages/react.png" },
    ];

    useEffect(() => {
        if (!api) return;

        const timeout = setTimeout(() => {
            const next =
                api.selectedScrollSnap() + 1 === api.scrollSnapList().length
                    ? 0
                    : api.selectedScrollSnap() + 1;

            api.scrollTo(next);
            setCurrent(next);
        }, 1500);

        return () => clearTimeout(timeout);
    }, [api, current]);

    return (
        <div className="w-full pb-20 lg:pb-40">
            <div className="container mx-auto">
                <div className="flex flex-col gap-10">
                    <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                            {languages.map((lang, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-1/3 sm:basis-1/4 lg:basis-1/8"
                                >
                                    <div className="flex flex-col items-center justify-center p-4 aspect-square bg-background rounded-lg border overflow-hidden relative">
                                        {/* Image container with overlay */}
                                        <div className="relative w-[50px] h-[50px]">
                                            <Image
                                                src={lang.logo}
                                                alt={lang.name}
                                                fill
                                                className="object-contain z-0"
                                            />
                                            <div className="absolute inset-0 bg-black/10 z-10 rounded" />
                                        </div>

                                        {/* <span className="mt-3 text-sm text-muted-foreground">
                                            {lang.name}
                                        </span> */}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
