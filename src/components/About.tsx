import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const skills = [
    { name: "LAN/WAN Configuration & Maintenance", level: "Expert", percentage: 95 },
    { name: "Windows Server & OS Administration", level: "Expert", percentage: 95 },
    { name: "Network Security & Firewalls", level: "Expert", percentage: 90 },
    { name: "DHCP / DNS / IP Configuration", level: "Advanced", percentage: 85 },
    { name: "User Support & Troubleshooting", level: "Advanced", percentage: 85 },
    { name: "System Documentation & Device Inventory", level: "Advanced", percentage: 80 },
    { name: "Backup, Recovery & Data Protection", level: "Advanced", percentage: 80 },
    { name: "Vendor Coordination & Incident Escalation", level: "Proficient", percentage: 75 },
    { name: "Cloud Services (AWS/GCP)", level: "Proficient", percentage: 70 },
    { name: "Linux Administration", level: "Proficient", percentage: 70 }
  ];

  return (
    <section id="about" className="py-20 bg-hero-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Tech Avatar Section - Optimized size */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start animate-fade-in">
              <div className="relative group w-full max-w-sm">
                {/* Animated gradient ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse"></div>
                
                {/* Secondary glow */}
                <div className="absolute -inset-1 bg-hero-gradient rounded-full blur-md opacity-50"></div>
                
                <div className="relative">
                  {/* Tech border effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 p-1">
                    <div className="w-full h-full rounded-full bg-background"></div>
                  </div>
                  
                  {/* Avatar image - responsive sizing */}
                  <img 
                    src={profilePhoto} 
                    alt="Abreham Kassahun - Tech Professional"
                    className="relative rounded-full w-full aspect-square object-cover shadow-elegant hover:scale-105 transition-all duration-500 border-4 border-background ring-2 ring-primary/20"
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

            {/* Content Section - More space */}
            <div className="lg:col-span-3 space-y-6 animate-fade-in">
              <div className="space-y-5">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  <strong>Results-driven System & Network Administrator</strong> with 9+ years of experience in IT infrastructure, 
                  system support, and network management. Proven expertise in LAN/WAN setup, Windows systems administration, and 
                  security configuration for enterprise environments. Adept at troubleshooting, user support, and coordinating with 
                  vendors to ensure high system availability and compliance.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Strong record of reducing downtime and improving network performance through proactive maintenance and monitoring. 
                  Successfully managed IT infrastructure for major financial institutions and international organizations. 
                  My technical depth spans <strong>enterprise network deployment (1,500+ workstations)</strong>, 
                  <strong>system administration (Windows Server, DHCP/DNS)</strong>, and <strong>security management 
                  (firewalls, access control, ISO 27001 compliance)</strong>—ensuring secure, documented, and highly available IT environments.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {["LAN/WAN Configuration", "Windows Server Admin", "DHCP/DNS/IP Config", "Network Security", "Firewalls", "System Documentation", "Backup & Recovery", "User Support", "CCNA", "Cisco", "Linux", "Cloud (AWS/GCP)", "Vendor Coordination", "ISO 27001"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3.5 py-1.5 bg-card rounded-full text-sm font-medium shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-card-gradient shadow-medium border-primary/20">
                <h3 className="text-xl font-bold mb-3">Skills & Expertise</h3>
                <p className="text-sm text-muted-foreground mb-5">Core competencies in IT infrastructure and system administration</p>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-muted-foreground font-semibold text-xs bg-primary/10 px-2.5 py-1 rounded-full">{skill.level}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-hero-gradient h-full rounded-full transition-all duration-1000 ease-out hover:shadow-soft"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
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