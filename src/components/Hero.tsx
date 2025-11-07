import { Button } from "@/components/ui/button";

const Hero = () => {
  console.log("Hero component rendering");
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient-subtle" />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-3 leading-tight">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Abreham Kassahun
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
            System Administrator / IT Support & Network Administrator
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="bg-hero-gradient hover:shadow-medium transition-all duration-300 text-lg px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-3"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;