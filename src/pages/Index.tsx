import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="lg:ml-80">
        <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-24 max-w-5xl">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
