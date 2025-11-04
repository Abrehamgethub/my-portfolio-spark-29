import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Creative Technologist & IT Consultant",
      company: "Freelance (Remote / Local SMEs)",
      location: "Addis Ababa, Ethiopia",
      period: "07/2024 – Present",
      achievements: [
        "Designed and optimized digital communication platforms for small businesses and institutions",
        "Delivered visual storytelling and multimedia content for campaigns, achieving 95% client satisfaction",
        "Provided ICT consulting for local entrepreneurs—digitalizing workflows and enhancing online presence",
        "Supported knowledge management and documentation using Notion, Odoo, and Microsoft 365 ecosystems"
      ],
      skills: ["Digital Strategy", "Multimedia Content", "IT Consulting", "Workflow Optimization", "Knowledge Management"]
    },
    {
      role: "IT Officer & Programming Instructor",
      company: "Ethiopian Education Initiatives (HaileManas Academy)",
      location: "Debrebirhan, Ethiopia",
      period: "02/2024 – 07/2024",
      achievements: [
        "Managed 350+ iPads and Mac devices through MDM with 99% uptime and secure Google Workspace integration",
        "Taught Python programming to over 350 students, emphasizing problem-solving and computational thinking",
        "Introduced automated IT ticketing and documentation systems, reducing resolution time by 30% and achieving 95% first-contact resolution"
      ],
      skills: ["MDM", "Python Programming", "Google Workspace", "IT Support", "Documentation"]
    },
    {
      role: "ICT Infrastructure & VAS Integration Engineer",
      company: "Hikma Electronics plc",
      location: "Addis Ababa, Ethiopia", 
      period: "07/2018 – 02/2024",
      achievements: [
        "Designed and maintained enterprise LAN/WAN systems for 20+ business clients, achieving 99.5% uptime",
        "Configured Windows-based servers, managed DHCP, DNS, and shared resource permissions across departments",
        "Implemented network monitoring and troubleshooting protocols that reduced downtime by 30%",
        "Documented system configurations, updates, and hardware inventory for IT audits",
        "Coordinated with vendors on hardware and network upgrades ensuring SLA compliance"
      ],
      skills: ["LAN/WAN Design", "Windows Server", "DHCP/DNS", "Network Monitoring", "Vendor Management", "Documentation"]
    },
    {
      role: "IT Supervisor",
      company: "Shemu Group",
      location: "Addis Ababa, Ethiopia / Online",
      period: "11/2022 – 07/2023 (Online) | 02/2018 – 07/2018 (Onsite)",
      achievements: [
        "Managed ERP and office network systems ensuring 98% operational uptime",
        "Diagnosed Windows OS and application issues, conducted system updates and driver management",
        "Provided user training and first-line support to 80+ employees across multiple departments"
      ],
      skills: ["ERP Systems", "Windows OS", "Network Management", "User Training", "Technical Support"]
    },
    {
      role: "IT Support Technician",
      company: "Net & Com plc",
      location: "Addis Ababa, Ethiopia",
      period: "06/2015 – 02/2018", 
      achievements: [
        "Installed and configured routers, switches, and wireless access points for enterprise clients including ECA and World Food Programme",
        "Deployed large-scale network infrastructure: 1,500 workstations, 50 printers, 50 communication rooms for major organizations",
        "Provided technical support for Windows server environments and network systems",
        "Maintained and troubleshot network connectivity issues ensuring high system availability"
      ],
      skills: ["Network Installation", "Routers & Switches", "Windows Server", "Technical Support", "Wireless Networks"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="bg-hero-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Over 9 years of experience in IT support, team leadership, and customer service
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className="bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{experience.role}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <span className="font-semibold text-foreground">{experience.company}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-hero-gradient rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;