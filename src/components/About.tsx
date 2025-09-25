import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "AI Orchestration & Multi-LLM Coordination", level: 88 },
    { name: "Network Administration", level: 95 },
    { name: "Creative Technology & Digital Media", level: 92 },
    { name: "Cybersecurity", level: 85 },
    { name: "Python Programming & System Design", level: 82 },
    { name: "Customer Support & Team Leadership", level: 96 },
    { name: "Windows Server & Infrastructure", level: 90 },
    { name: "Adobe Creative Suite", level: 88 }
  ];

  return (
    <section id="about" className="py-20 bg-hero-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Creative Technologist and AI Innovation Specialist with 9+ years of experience at the intersection 
                of technology, creativity, and artificial intelligence. I orchestrate multi-AI systems as collaborative 
                partners, not just tools, while delivering enterprise-grade infrastructure and compelling digital experiences.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                From coordinating teams of LLMs in AI workshops to managing complex network infrastructures, I bridge 
                the gap between cutting-edge AI innovation and practical business solutions. My unique blend of technical 
                depth, creative vision, and AI orchestration skills enables me to solve complex problems through both 
                human collaboration and AI-powered workflows.
              </p>

              <div className="flex flex-wrap gap-3">
                {["AI Orchestration", "Multi-LLM Coordination", "Network Administration", "Cybersecurity", "Python", "Adobe Creative Suite", "Windows Server", "AWS", "Azure", "System Design"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-card rounded-full text-sm font-medium shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-card-gradient shadow-medium">
              <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-hero-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;