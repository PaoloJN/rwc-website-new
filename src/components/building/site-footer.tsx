import Image from "next/image";
import Link from "next/link";

const navigationItems = [
    {
        title: "Events",
        items: [
            { title: "Upcoming Events", href: "/events" },
            { title: "Hackathons", href: "/events/hackathons" },
            { title: "Workshops", href: "/events/workshops" },
        ],
    },
    {
        title: "Jobs",
        items: [
            { title: "Job Board", href: "/jobs" },
            { title: "Internships", href: "/jobs/internships" },
        ],
    },
    {
        title: "More",
        items: [
            { title: "Projects", href: "/projects" },
            { title: "Blog", href: "/blog" },
            { title: "About Us", href: "/about" },
            { title: "Contact", href: "/contact" },
        ],
    },
];

export default function SiteFooter() {
    return (
        <div className="w-full py-20 lg:py-40 bg-transparent text-foreground border-t">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="flex gap-8 flex-col items-start">
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-3xl md:text-4xl tracking-tighter max-w-xl font-regular text-left mb-10 flex items-center">
                                <Image
                                    src="/assets/images/logo.png"
                                    alt="Raptors Who Code Logo"
                                    width={100}
                                    height={100}
                                    className="w-16 h-16 mr-6 inline-block"
                                />
                                Raptors Who Code
                            </h2>
                            <p className="text-lg max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                                A community of tech enthusiasts and curious minds exploring
                                programming, collaborating on projects, and growing together.
                            </p>
                        </div>
                        <div className="flex gap-20 flex-row">
                            <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                                <Link href="/terms">Terms of Service</Link>
                                <Link href="/privacy">Privacy Policy</Link>
                                <Link href="/code-of-conduct">Code of Conduct</Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
                        {navigationItems.map((item) => (
                            <div
                                key={item.title}
                                className="flex text-base gap-1 flex-col items-start"
                            >
                                <div className="flex flex-col gap-2">
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="flex justify-between items-center"
                                        >
                                            <span className="text-xl">{item.title}</span>
                                        </Link>
                                    ) : (
                                        <p className="text-xl">{item.title}</p>
                                    )}
                                    {item.items?.map((subItem) => (
                                        <Link
                                            key={subItem.title}
                                            href={subItem.href}
                                            className="flex justify-between items-center"
                                        >
                                            <span className="text-foreground/75">
                                                {subItem.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
