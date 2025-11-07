const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-4xl animate-fade-in">
        <p className="text-primary font-mono text-sm mb-5">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
          Abreham Kassahun
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6">
          System Administrator & IT Professional
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
          Results-driven professional with 9+ years of experience in IT infrastructure, 
          system support, and network management. Proven expertise in LAN/WAN setup, 
          Windows systems administration, and security configuration for enterprise environments.
        </p>
      </div>
    </section>
  );
};

export default Hero;