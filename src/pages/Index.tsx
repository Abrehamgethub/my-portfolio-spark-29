import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AIWorkshop from "@/components/AIWorkshop";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  console.log("Index component rendering");
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <AIWorkshop />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
