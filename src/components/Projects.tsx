import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Data Center Design & Implementation",
      description: "Comprehensive data center solutions for major Ethiopian banks including Abay Bank, Addis International Bank, and United Bank. Achieved 15% energy reduction through optimized cooling and layout designs.",
      tags: ["Infrastructure", "Network Security", "Energy Optimization", "Project Management"],
      liveUrl: "#",
      githubUrl: "#",
      image: "🏢"
    },
    {
      title: "Network Infrastructure for International Organizations",
      description: "Large-scale network setup for ECA and World Food Program. Successfully installed network infrastructure for 1500 workstations, 50 printers, and 50 communication rooms within 3 weeks.",
      tags: ["Network Design", "VPN Implementation", "Large Scale Deployment"],
      liveUrl: "#",
      githubUrl: "#",
      image: "🌐"
    },
    {
      title: "Mobile Device Management System",
      description: "Managed over 350 iPad and Mac users through MDM systems at Ethiopian Education Initiatives, ensuring secure device performance and seamless Google Workspace integration.",
      tags: ["MDM", "Google Workspace", "iOS Management", "Security"],
      liveUrl: "#",
      githubUrl: "#",
      image: "📱"
    },
    {
      title: "Python Programming Education",
      description: "Developed and delivered comprehensive Python programming curriculum to high school students, equipping over 350 students with essential coding skills and technical foundation.",
      tags: ["Python", "Education", "Curriculum Development", "Student Training"],
      liveUrl: "#",
      githubUrl: "#",
      image: "🐍"
    },
    {
      title: "Windows Server Environment Optimization",
      description: "Directed implementation and performance tuning of Windows Server environments for multiple clients. Built new file servers and resolved chronic network failures for improved performance.",
      tags: ["Windows Server", "Active Directory", "Performance Tuning", "Disaster Recovery"],
      liveUrl: "#",
      githubUrl: "#",
      image: "🖥️"
    },
    {
      title: "Customer Support Team Leadership",
      description: "Led remote customer support teams at Hikma Electronics, managing KPIs and ensuring efficient resolution of customer inquiries across multiple platforms including voice, chat, and social media.",
      tags: ["Team Leadership", "Customer Support", "KPI Management", "Process Optimization"],
      liveUrl: "#",
      githubUrl: "#",
      image: "👥"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card-gradient shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="text-6xl mb-4 group-hover:animate-float">
                  {project.image}
                </div>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    className="bg-hero-gradient hover:shadow-medium transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;