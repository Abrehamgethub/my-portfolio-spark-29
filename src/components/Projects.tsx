import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, ExternalLink, Github, Calendar, Award, Zap } from "lucide-react";

const Projects = () => {
  const keyProjects = [
    {
      title: "Data Center Modernization",
      organization: "Hikma Electronics",
      timeline: "2019–2023",
      description: "Led comprehensive data center transformation initiative for major Ethiopian banks including Abay Bank, Addis International Bank, and United Bank. Architected optimized cabling infrastructure, implemented server virtualization, and redesigned cooling systems to dramatically improve operational efficiency.",
      impact: "40% improvement in uptime • 15% energy reduction",
      tags: ["Infrastructure", "Virtualization", "Data Center Design", "Performance Optimization"],
      icon: "🏢",
      type: "key"
    },
    {
      title: "Banking Network Rollout",
      organization: "Net & Com",
      timeline: "2016–2018",
      description: "Architected and deployed enterprise-grade secure network infrastructure including VPNs, Windows Servers, and Cisco firewall configurations for 5+ major Ethiopian financial institutions. Ensured compliance with banking security standards while maintaining zero-downtime implementation.",
      impact: "Secured networks for 5+ major banks • 97% uptime maintained",
      tags: ["Network Security", "VPN", "Cisco Firewalls", "Enterprise Deployment"],
      icon: "🏦",
      type: "key"
    },
    {
      title: "ERP Support & Optimization",
      organization: "Shemu Group",
      timeline: "2018",
      description: "Administered Microsoft Dynamics 365 ERP system, managing user access roles, workflows, and data compliance protocols. Optimized business processes through strategic system configuration and comprehensive staff training programs.",
      impact: "25% reduction in operational errors • 20% efficiency gain",
      tags: ["ERP Administration", "Process Optimization", "Data Compliance", "Workflow Management"],
      icon: "⚙️",
      type: "key"
    },
    {
      title: "ICT Automation & Service Optimization",
      organization: "Ethiopian Education Initiatives",
      timeline: "2024",
      description: "Implemented automated ticketing system and comprehensive technical documentation library to transform IT service delivery for 350+ users. Streamlined support workflows, knowledge management, and first-contact resolution processes.",
      impact: "30% improvement in IT response time • 95% first-contact resolution",
      tags: ["IT Automation", "Ticketing Systems", "Documentation", "Service Optimization"],
      icon: "🚀",
      type: "key"
    },
    {
      title: "Multi-AI Orchestration & Hackathon",
      organization: "ALX Capstone Hub",
      timeline: "September 2025",
      description: "Orchestrated collaboration between Gemini, ChatGPT, DeepSeek, and v0 AI to develop Ye'brr—a drone-assisted delivery solution for Addis Ababa. Built structured workflows where each AI system performed distinct roles (research, design, validation, development), culminating in a functional web app prototype and executive pitch.",
      impact: "Award-winning solution • 3-minute CEO pitch • Full MVP delivered",
      tags: ["AI Orchestration", "System Design", "Hackathon", "MVP Development", "Strategic Teamwork"],
      icon: "🤖",
      type: "key"
    }
  ];

  const featuredProjects = [
    {
      title: "Digital Campaign Video Content",
      description: "Professional video editing and motion graphics projects for 15+ digital campaigns across creative and corporate sectors. Delivering engaging visual content using Adobe Premiere Pro and After Effects with 95% client satisfaction rate, integrating modern design principles with compelling storytelling for measurable campaign impact.",
      tags: ["Video Editing", "Motion Graphics", "Adobe Premiere Pro", "After Effects", "Creative Direction"],
      liveUrl: "https://www.behance.net/abrehamkassahun",
      githubUrl: "#",
      image: "🎬",
      type: "featured"
    },
    {
      title: "Enterprise IT Consulting Services",
      description: "Strategic IT consulting solutions including network administration, cybersecurity assessments, and infrastructure optimization for businesses across Ethiopia. Delivered comprehensive technology roadmaps, security audits, and implementation strategies that drive operational efficiency and reduce IT costs.",
      tags: ["IT Consulting", "Network Administration", "Cybersecurity", "Infrastructure Design"],
      liveUrl: "#",
      githubUrl: "#",
      image: "💼",
      type: "featured"
    },
    {
      title: "Data Center Design & Implementation",
      description: "Enterprise-grade data center solutions for major Ethiopian banks including Abay Bank, Addis International Bank, and United Bank. Architected comprehensive infrastructure delivering 40% uptime improvement and 15% energy reduction through optimized cooling systems, strategic layout designs, and advanced cabling infrastructure.",
      tags: ["Infrastructure", "Network Security", "Energy Optimization", "Project Management"],
      liveUrl: "#",
      githubUrl: "#",
      image: "🏢",
      type: "featured"
    },
    {
      title: "Network Infrastructure for International Organizations",
      description: "Large-scale enterprise network deployment for ECA (Economic Commission for Africa) and World Food Program. Successfully architected and installed secure network infrastructure for 1,500 workstations, 50 printers, and 50 communication rooms within aggressive 3-week deadline, ensuring zero business disruption.",
      tags: ["Network Design", "VPN Implementation", "Large Scale Deployment"],
      liveUrl: "#",
      githubUrl: "#",
      image: "🌐",
      type: "featured"
    },
    {
      title: "Mobile Device Management System",
      description: "Implemented and managed comprehensive MDM system for 350+ iPad and Mac users at Ethiopian Education Initiatives. Achieved 99% uptime and seamless Google Workspace integration while ensuring secure device performance, automated software updates, and compliance with educational technology policies.",
      tags: ["MDM", "Google Workspace", "iOS Management", "Security"],
      liveUrl: "#",
      githubUrl: "#",
      image: "📱",
      type: "featured"
    },
    {
      title: "Python Programming Education Platform",
      description: "Developed and delivered comprehensive Python programming curriculum to high school students, equipping over 350 students with essential coding skills and technical foundation through interactive learning methods.",
      tags: ["Python", "Education", "Curriculum Development", "Student Training"],
      liveUrl: "https://www.youtube.com/@abrehamkassahun917/playlists",
      githubUrl: "#",
      image: "🐍",
      type: "featured"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Key Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Key <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering measurable impact through enterprise IT infrastructure and automation solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-7xl mx-auto auto-rows-fr">
            {keyProjects.map((project, index) => (
              <Card 
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br from-card via-card to-card/50 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-1 border border-primary/10 hover:border-primary/30 ${
                  index === 4 ? 'lg:col-span-2 lg:row-span-1 md:col-span-2' : ''
                }`}
              >
                {/* Gradient accent on top */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-hero-gradient" />
                
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs gap-1 bg-primary/10">
                      <Calendar className="w-3 h-3" />
                      {project.timeline}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  
                  <CardDescription className="flex items-center gap-1.5 text-sm">
                    <Building2 className="w-3.5 h-3.5" />
                    {project.organization}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-start gap-2 p-2.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-primary leading-tight">{project.impact}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge 
                        key={tag}
                        variant="outline"
                        className="text-xs px-2 py-0.5 bg-background/50 hover:bg-primary/10 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-0.5 bg-muted">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Projects Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of creative and technical projects showcasing diverse skills
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-card-gradient shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-1 border border-primary/10 hover:border-primary/30"
              >
                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-hero-gradient opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                
                <CardHeader className="relative">
                  <div className="mb-3 flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </span>
                  </div>
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium hover:bg-secondary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.liveUrl !== "#" && (
                      <Button 
                        size="sm"
                        className="flex-1 bg-hero-gradient hover:shadow-medium transition-all duration-300 h-9"
                        onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        View
                      </Button>
                    )}
                    {project.githubUrl !== "#" && (
                      <Button 
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 h-9"
                        onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                      >
                        <Github className="w-3.5 h-3.5 mr-1.5" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;