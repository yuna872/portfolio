import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Career from "@/components/Career";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Career />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
