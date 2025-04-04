import { Briefcase, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const JobsPreview = () => (
    <div className="w-full py-20 lg:py-30">
        <div className="container mx-auto flex flex-col gap-14">
            <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
                <h4 className="text-3xl md:text-4xl tracking-tighter max-w-xl font-normal ml-1">
                    Job & Opportunities
                </h4>
                <Button className="gap-3">
                    Browse all jobs <Briefcase className="w-4 h-4" />
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    {
                        title: "Software Intern",
                        company: "NASA Goddard",
                        location: "Remote",
                        description:
                            "Join the NASA Goddard team as a software intern and work on exciting projects.",
                        type: "Internship",
                    },
                    {
                        title: "Front-End Dev Intern",
                        company: "Replit",
                        location: "Remote",
                        description:
                            "Join Replit as a front-end developer intern and help build amazing tools.",
                        type: "Part-Time",
                    },
                    {
                        title: "Helpdesk Technician",
                        company: "Montgomery College IT",
                        location: "Rockville Campus",
                        description:
                            "Join the Montgomery College IT team as a Helpdesk Technician and provide support.",
                        type: "On Campus",
                    },
                    {
                        title: "Software Engineer Intern",
                        company: "NASA Goddard",
                        location: "Greenbelt, MD",
                        description:
                            "Join the NASA Goddard team as a software engineer intern and work on exciting projects.",
                        type: "Internship",
                    },
                ].map((job, i) => (
                    <div
                        key={i}
                        className="bg-background/50 rounded-md p-6 flex flex-col gap-3 border hover:shadow-md transition-shadow"
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">{job.title}</h3>
                            <Badge variant="secondary">{job.type}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{job.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                        </div>
                        <p className="text-muted-foreground text-sm">{job.description}</p>

                        <Button variant="outline" className="mt-6 text-sm font-medium w-full">
                            View details
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default JobsPreview;
