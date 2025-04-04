import { MoveRight, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CTA() {
    return (
        <div className="w-full py-20 lg:py-30">
            <div className="container mx-auto">
                <div className="flex flex-col text-center bg-background/40 border rounded-md p-4 lg:p-12 gap-12 items-center">
                    <div>
                        <Badge variant="secondary">Join the Raptors</Badge>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-3xl md:text-4xl tracking-tighter max-w-xl font-semibold">
                            Ready to code, learn, and build together?
                        </h3>
                        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
                            Montgomery College’s computer science club. Whether you&apos;re just
                            getting started or already deep into development, this is your place to
                            grow, collaborate, and build cool things with others.
                        </p>
                    </div>
                    <div className="flex flex-row gap-4 mt-4">
                        <Button className="gap-3" variant="outline">
                            Meet the Community <Users className="w-4 h-4" />
                        </Button>
                        <Button className="gap-3">
                            Join Now <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
