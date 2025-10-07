import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Data Center Modernization",
      organization: "Hikma Electronics",
      timeline: "2019–2023",
      description: "Led comprehensive modernization initiative including optimized cabling infrastructure, server virtualization, and enhanced cooling systems.",
      impact: "40% improvement in uptime",
      tags: ["Infrastructure", "Virtualization", "Data Center Design", "Performance Optimization"],
      icon: "🏢"
    },
    {
      title: "Banking Network Rollout",
      organization: "Net & Com",
      timeline: "2016–2018",
      description: "Deployed enterprise-grade secure network infrastructure including VPNs, Windows Servers, and Cisco firewalls for major Ethiopian financial institutions.",
      impact: "Secured networks for 5+ major banks",
      tags: ["Network Security", "VPN", "Cisco Firewalls", "Enterprise Deployment"],
      icon: "🏦"
    },
    {
      title: "ERP Support & Optimization",
      organization: "Shemu Group",
      timeline: "2018",
      description: "Administered ERP system user roles, workflows, and data compliance protocols to streamline business operations.",
      impact: "25% reduction in operational errors",
      tags: ["ERP Administration", "Process Optimization", "Data Compliance", "Workflow Management"],
      icon: "⚙️"
    },
    {
      title: "ICT Automation",
      organization: "Ethiopian Education Initiatives",
      timeline: "2024",
      description: "Implemented automated ticketing system and comprehensive technical documentation library to enhance IT service delivery.",
      impact: "30% improvement in IT response time",
      tags: ["IT Automation", "Ticketing Systems", "Documentation", "Service Optimization"],
      icon: "🚀"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable impact through enterprise IT infrastructure and automation solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl group-hover:animate-float">
                    {project.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.timeline}
                  </Badge>
                </div>
                
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                
                <CardDescription className="flex items-center gap-2 text-base">
                  <Building2 className="w-4 h-4" />
                  {project.organization}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">{project.impact}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="outline"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
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