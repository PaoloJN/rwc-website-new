import SiteFooter from "@/components/building/site-footer";
import SiteHeader from "@/components/building/site-header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            {/* Background */}
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute inset-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
            <SiteHeader />
            {children}
            <SiteFooter />
        </section>
    );
}
