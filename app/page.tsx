import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { About } from "@/components/home/about";
import { Facilities } from "@/components/home/facilities";
import { Gallery } from "@/components/gallery/gallery";
import { Membership } from "@/components/home/membership";
import { Testimonials } from "@/components/home/testimonials";
import { Contact } from "@/components/contact/contact";
import { WhatsappFab } from "@/components/shared/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Facilities />
        <Gallery />
        <Membership />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
