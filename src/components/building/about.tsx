import { Users, Lightbulb, Laptop, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const AboutUs = () => (
    <div className="w-full py-20 lg:py-30">
        <div className="container mx-auto">
            <div className="flex flex-col gap-10">
                <div className="flex gap-4 flex-col items-start">
                    <div>
                        <Badge>About Us</Badge>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-4xl tracking-tighter max-w-xl font-regular text-left">
                            We're Raptors Who Code — a community of builders & learners.
                        </h2>
                        {/* <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                            Based at Montgomery College, we help students explore programming
                            through collaboration, curiosity, and hands-on projects — no matter
                            their experience level.
                        </p> */}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-background border rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
                        <Users className="w-8 h-8 stroke-1" />
                        <div className="flex flex-col">
                            <h3 className="text-xl tracking-tight">Inclusive & Welcoming</h3>
                            <p className="text-muted-foreground max-w-xs text-base">
                                Whether you're a total beginner or an advanced coder, there's a
                                place for you here.
                            </p>
                        </div>
                    </div>
                    <div className="bg-background border rounded-md aspect-square p-6 flex justify-between flex-col">
                        <Laptop className="w-8 h-8 stroke-1" />
                        <div className="flex flex-col">
                            <h3 className="text-xl tracking-tight">Events & Workshops</h3>
                            <p className="text-muted-foreground max-w-xs text-base">
                                We host hackathons, study nights, and tech talks to learn and
                                connect.
                            </p>
                        </div>
                    </div>
                    <div className="bg-background border rounded-md aspect-square p-6 flex justify-between flex-col">
                        <Code className="w-8 h-8 stroke-1" />
                        <div className="flex flex-col">
                            <h3 className="text-xl tracking-tight">Build Real Projects</h3>
                            <p className="text-muted-foreground max-w-xs text-base">
                                Create games, websites, and tools with your peers — and learn by
                                doing.
                            </p>
                        </div>
                    </div>
                    <div className="bg-background border rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
                        <Lightbulb className="w-8 h-8 stroke-1" />
                        <div className="flex flex-col">
                            <h3 className="text-xl tracking-tight">Driven by Curiosity</h3>
                            <p className="text-muted-foreground max-w-xs text-base">
                                We believe learning should be fun, self-directed, and shared. We
                                grow together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default AboutUs;
