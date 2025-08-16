import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "Network Administration", level: 95 },
    { name: "Customer Support", level: 98 },
    { name: "Cybersecurity", level: 85 },
    { name: "Python Programming", level: 80 },
    { name: "Windows Server", level: 90 },
    { name: "Team Leadership", level: 92 }
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
                I'm an experienced IT support professional with a robust background in customer 
                service, project management, and technical support. With over 9 years of experience, 
                I've proven my track record of leading teams to deliver exceptional customer 
                experiences and resolve complex technical issues efficiently.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently serving as an IT Officer and Programming Instructor at Ethiopian Education 
                Initiatives, where I manage over 350 iPad and Mac users through MDM systems and 
                deliver Python programming instruction to high school students.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Network Administration", "Cybersecurity", "Python", "MDM", "Windows Server", "Active Directory", "Zendesk", "AWS", "Azure"].map((tech) => (
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