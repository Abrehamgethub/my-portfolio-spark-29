const Hero = () => {
  return (
    <section id="home" className="pt-8 pb-12 flex items-center">
      <div className="max-w-4xl animate-fade-in">
        <p className="text-primary font-mono text-sm mb-5">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
          Abreham Kassahun
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
          Technical Systems Engineer | AI & Automation Integrator | Infrastructure & Digital Solutions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
          I design and implement systems that improve operational efficiency, automate workflows, and connect business platforms across organizations. My work combines IT infrastructure expertise with software integration and emerging AI tools to solve real-world business and digital transformation challenges.
        </p>
      </div>
    </section>
  );
};

export default Hero;