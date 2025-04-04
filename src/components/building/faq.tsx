import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => (
    <div className="w-full py-20 lg:py-30">
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-10">
                {/* Left Section */}
                <div className="flex gap-10 flex-col">
                    <div className="flex gap-12 flex-col">
                        <div>
                            <Badge variant="outline">FAQ</Badge>
                        </div>
                        <div className="flex gap-10 flex-col">
                            <h4 className="text-3xl md:text-4xl tracking-tighter max-w-xl text-left font-normal">
                                Curious about Raptors Who Code?
                            </h4>
                            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                                We’re Montgomery College’s computer science club, open to all
                                students interested in tech — whether you're just getting started or
                                already building your own apps.
                            </p>
                        </div>
                        <div>
                            <Button className="gap-3" variant="outline">
                                Have more questions? Reach out
                                <PhoneCall className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <Accordion type="single" collapsible className="w-full">
                    {[
                        {
                            question: "Who can join the club?",
                            answer: "Anyone at Montgomery College with an interest in tech, programming, or digital creativity! No experience required.",
                        },
                        {
                            question: "Do I need to know how to code?",
                            answer: "Not at all. We welcome beginners! Many of our events are beginner-friendly and designed to help you learn.",
                        },
                        {
                            question: "What kind of events do you host?",
                            answer: "Hackathons, workshops, study groups, project nights, guest speakers, and more!",
                        },
                        {
                            question: "When and where do you meet?",
                            answer: "We meet weekly on campus or in Discord. Check the Events page or our Discord for up-to-date info.",
                        },
                        {
                            question: "Is there a membership fee?",
                            answer: "Nope! Raptors Who Code is completely free to join and participate in.",
                        },
                        {
                            question: "Can I get help on my projects or homework?",
                            answer: "Yes! We often host co-working/study sessions and you can always ask in our Discord for help.",
                        },
                        {
                            question: "How do I stay updated?",
                            answer: "Follow us on Discord, check the Events page, or subscribe to our newsletter (coming soon).",
                        },
                        {
                            question: "Can I help run the club?",
                            answer: "Absolutely. We're always looking for volunteers and officers who want to get involved.",
                        },
                    ].map((item, index) => (
                        <AccordionItem key={index} value={"item-" + index} className="text-lg">
                            <AccordionTrigger className="text-lg">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-lg text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    </div>
);

export default FAQ;
