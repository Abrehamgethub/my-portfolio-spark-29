import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const technicalSkills = [
    {
      category: "IT Support & Troubleshooting",
      items: ["Windows, macOS, Linux user support", "Hardware diagnostics", "System performance optimization"]
    },
    {
      category: "Networking",
      items: ["TCP/IP, DNS, DHCP", "LAN/WAN setup, Wi-Fi configuration", "Router & switch configuration"]
    },
    {
      category: "Systems & Tools",
      items: ["Active Directory, Microsoft 365", "ServiceNow / Jira ticketing systems", "Remote support tools (TeamViewer, AnyDesk)"]
    },
    {
      category: "Field Service Operations",
      items: ["On-site hardware replacement", "Desktop/laptop build & imaging", "Printer / network device installation"]
    },
    {
      category: "Scripting & Automation",
      items: ["Python scripting for routine IT tasks", "Bash & command-line operations"]
    },
    {
      category: "Security & Access Control",
      items: ["User access provisioning", "Password policy enforcement", "Endpoint security practices"]
    }
  ];

  const softSkills = [
    "Clear and empathetic communication",
    "Problem-solving under time constraints",
    "Customer service and user training",
    "Team collaboration with remote coordination",
    "Documentation and activity reporting accuracy"
  ];

  const toolsPlatforms = [
    { category: "Remote Support", tools: "TeamViewer, AnyDesk, RDP" },
    { category: "Ticketing & ITSM", tools: "ServiceNow, Jira, Freshservice" },
    { category: "Systems", tools: "Windows 10/11, macOS, Linux (Ubuntu)" },
    { category: "Networking", tools: "Cisco basics, MikroTik, Ubiquiti" },
    { category: "Cloud Productivity", tools: "Microsoft 365, Google Workspace" },
    { category: "Scripting", tools: "Python, Bash, Shell" }
  ];

  return (
    <section id="about" className="pt-8 pb-16 bg-hero-gradient-subtle">
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

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Profile Picture + Professional Text */}
            <div className="space-y-6 animate-fade-in">
              {/* Tech Avatar Section */}
              <div className="flex justify-center lg:justify-start">
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

              {/* Professional Text and Tech Badges */}
              <div className="space-y-5">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I am a <strong>Technical Systems Engineer</strong> specializing in network infrastructure, digital workflow automation, and AI-assisted system integration. Over the past 9+ years, I've delivered secure enterprise networks for financial institutions, led IT service operations across educational and corporate environments, and developed AI-powered tools and digital platforms that streamline operations and improve user experience.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I am passionate about building systems that are scalable, efficient, and aligned with real business impact. I enjoy bridging technical implementation with operational strategy—and helping teams adopt smarter and more sustainable digital practices.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {["Network Infrastructure", "System Integration", "AI Automation", "Cloud Solutions", "Security Management", "Digital Transformation", "Workflow Optimization", "Technical Leadership"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3.5 py-1.5 bg-card rounded-full text-sm font-medium shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Skills & Expertise */}
            <div className="animate-fade-in space-y-6">
              {/* Technical Skills */}
              <div className="bg-card-gradient border border-primary/20 rounded-xl p-6 shadow-elegant relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Technical Skills</h3>
                    <p className="text-sm text-muted-foreground">Core competencies</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {technicalSkills.map((skill, index) => (
                    <div key={skill.category} className="group">
                      <h4 className="font-semibold text-sm text-primary mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {skill.category}
                      </h4>
                      <div className="pl-4 space-y-1">
                        {skill.items.map((item, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                            • {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-card-gradient border border-primary/20 rounded-xl p-6 shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Soft Skills</h3>
                  </div>
                </div>
                <div className="grid gap-2">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="bg-card-gradient border border-primary/20 rounded-xl p-6 shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Tools & Platforms</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {toolsPlatforms.map((platform, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 pb-3 border-b border-border/30 last:border-0 last:pb-0">
                      <span className="font-semibold text-sm text-primary min-w-[140px]">{platform.category}</span>
                      <span className="text-sm text-muted-foreground">{platform.tools}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;