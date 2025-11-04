import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const skills = [
    { name: "AWS Cloud Services & Architecture", level: "Expert" },
    { name: "Network Administration & CCNA", level: "Expert" },
    { name: "IT Support & System Administration", level: "Advanced" },
    { name: "Cloud Operations & Infrastructure", level: "Advanced" },
    { name: "Google Cloud Platform (GCP)", level: "Advanced" },
    { name: "Cybersecurity & Security", level: "Advanced" },
    { name: "Database Management", level: "Proficient" },
    { name: "Serverless Computing", level: "Proficient" },
    { name: "AI/LLM Orchestration", level: "Advanced" },
    { name: "Adobe Creative Suite", level: "Expert" }
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

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Tech Avatar Section */}
            <div className="flex justify-center animate-fade-in">
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
                    className="relative rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-elegant hover:scale-105 transition-all duration-500 border-4 border-background ring-2 ring-primary/20"
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

            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  <strong>Creative Technologist and AI Innovation Specialist</strong> with 9+ years driving digital transformation 
                  at the intersection of technology, creativity, and artificial intelligence. I orchestrate complex multi-AI systems as 
                  strategic partners—not just tools—while delivering enterprise-grade infrastructure and compelling digital experiences 
                  that measurably improve business operations and achieve strategic objectives.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  From coordinating teams of LLMs in AI workshops to architecting secure network infrastructures for major financial 
                  institutions, I consistently translate cutting-edge AI innovation into practical, high-impact business solutions. My technical depth spans 
                  <strong> data center modernization (40% uptime improvement)</strong>, <strong>ERP optimization (25% error reduction)</strong>, 
                  and <strong>large-scale network deployments (1500+ workstations)</strong>—complemented by creative excellence in 
                  Adobe Creative Suite for impactful digital campaigns.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["AWS Cloud", "Google Cloud", "CCNA", "Network Administration", "Cloud Operations", "IT Support", "Cybersecurity", "Serverless", "Load Balancing", "Databases", "Linux", "Cloud Security", "AI Orchestration", "Prompt Engineering", "Adobe Creative Suite"].map((tech) => (
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
                <p className="text-muted-foreground mb-6">Demonstrated proficiency across key IT and AI domains.</p>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground font-semibold">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;