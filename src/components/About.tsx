import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "AWS Cloud Services & Architecture", level: 94 },
    { name: "Network Administration & CCNA", level: 95 },
    { name: "IT Support & System Administration", level: 93 },
    { name: "Cloud Operations & Infrastructure", level: 90 },
    { name: "Google Cloud Platform (GCP)", level: 88 },
    { name: "Cybersecurity & Security", level: 86 },
    { name: "Database Management", level: 84 },
    { name: "Serverless Computing", level: 82 }
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
                <strong>Creative Technologist and AI Innovation Specialist</strong> with 9+ years driving digital transformation 
                at the intersection of technology, creativity, and artificial intelligence. I orchestrate multi-AI systems as 
                strategic partners—not just tools—while delivering enterprise-grade infrastructure and compelling digital experiences 
                that measurably improve business operations.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                From coordinating teams of LLMs in AI workshops to architecting secure network infrastructures for major financial 
                institutions, I translate cutting-edge AI innovation into practical business solutions. My technical depth spans 
                <strong> data center modernization (40% uptime improvement)</strong>, <strong>ERP optimization (25% error reduction)</strong>, 
                and <strong>large-scale network deployments (1500+ workstations)</strong>—complemented by creative excellence in 
                Adobe Creative Suite for impactful digital campaigns.
              </p>

              <div className="flex flex-wrap gap-3">
                {["AWS Cloud", "Google Cloud", "CCNA", "Network Administration", "Cloud Operations", "IT Support", "Cybersecurity", "Serverless", "Load Balancing", "Databases", "Linux", "Cloud Security"].map((tech) => (
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