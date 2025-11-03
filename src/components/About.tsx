import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

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

          {/* Tech Avatar Section */}
          <div className="flex justify-center mb-12 animate-fade-in">
            <div className="relative group">
              {/* Animated gradient ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse"></div>
              
              {/* Secondary glow */}
              <div className="absolute -inset-1 bg-hero-gradient rounded-full blur-md opacity-50"></div>
              
              <div className="relative">
                {/* Tech border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 p-1">
                  <div className="w-full h-full rounded-full bg-background"></div>
                </div>
                
                {/* Avatar image */}
                <img 
                  src={profilePhoto} 
                  alt="Abreham Kassahun - Tech Professional"
                  className="relative rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-elegant hover:scale-105 transition-all duration-500 border-4 border-background ring-2 ring-primary/20"
                />
                
                {/* Tech badge overlay */}
                <div className="absolute -bottom-2 -right-2 bg-hero-gradient rounded-full p-3 shadow-medium border-4 border-background group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </div>
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