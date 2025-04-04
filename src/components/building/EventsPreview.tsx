import { CalendarDays, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsPreview = () => (
    <div className="w-full py-20 lg:py-30">
        <div className="container mx-auto flex flex-col gap-14">
            <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
                <h4 className="text-3xl md:text-4xl tracking-tighter max-w-xl font-semibold">
                    Upcoming Events
                </h4>
                <Button className="gap-3">
                    View all events <CalendarDays className="w-4 h-4" />
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    {
                        title: "Intro to Git Workshop",
                        description:
                            "Learn version control and GitHub basics in this beginner-friendly session.",
                    },
                    {
                        title: "HackMC 2024",
                        description:
                            "Join us for Montgomery College’s annual hackathon — code, build, and win.",
                    },
                    {
                        title: "Cybersecurity 101",
                        description: "Get a crash course on digital safety and ethical hacking.",
                    },
                    {
                        title: "Web Dev Crash Course",
                        description:
                            "Build your first website using HTML, CSS, and JavaScript — no experience needed.",
                    },
                ].map((event, i) => (
                    <div key={i} className="flex flex-col gap-2 hover:opacity-80 cursor-pointer">
                        <div className="bg-muted rounded-md aspect-video mb-4" />
                        <h3 className="text-xl tracking-tight">{event.title}</h3>
                        <p className="text-muted-foreground text-base">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default EventsPreview;
