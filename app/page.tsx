import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Credentials from "@/components/Credentials";
import WhoWeServe from "@/components/WhoWeServe";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Credentials />
      <WhoWeServe />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
