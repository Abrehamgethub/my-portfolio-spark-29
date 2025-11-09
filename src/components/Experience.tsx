import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase, TrendingUp, Users, Award, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Freelance IT Support Field Engineer (Contract)",
      company: "AVASO Technology Solutions",
      location: "Addis Ababa, Ethiopia",
      period: "November 2025 – Present",
      achievements: [
        "Providing on-site and remote IT support services for AVASO clients",
        "Troubleshooting hardware and software issues in enterprise environments",
        "Supporting network device configurations, workstation setups, and field replacements",
        "Coordinating directly with the Global Field Service (GFS) Team for ticket assignments and reporting",
        "Maintaining strong communication and customer service during client engagements",
        "Completing activity documentation and ensuring customer sign-off after each job"
      ],
      skills: ["Field Support", "Hardware Troubleshooting", "Network Configuration", "Client Relations", "Documentation", "Remote Support"]
    },
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

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Timeline connector */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent group-hover:from-primary group-hover:via-primary group-hover:to-primary/30 transition-all duration-500" />
              
              {/* Content */}
              <div className="pl-8 pb-8">
                {/* Header Section */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-hero-gradient p-3 rounded-xl shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{experience.role}</h3>
                    <p className="text-lg font-semibold bg-hero-gradient bg-clip-text text-transparent mb-3">{experience.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-medium">{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="bg-gradient-to-br from-card via-card/50 to-transparent rounded-lg p-5 border border-primary/10 group-hover:border-primary/30 transition-all duration-300 shadow-soft">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-sm uppercase tracking-wide">Key Achievements & Impact</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3 group/item">
                        <div className="mt-1.5">
                          <div className="w-2 h-2 rounded-full bg-hero-gradient group-hover/item:scale-125 transition-transform duration-300" />
                        </div>
                        <span className="text-muted-foreground leading-relaxed flex-1 group-hover/item:text-foreground transition-colors">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Section */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground">Core Technologies & Skills</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Separator line for non-last items */}
              {index < experiences.length - 1 && (
                <div className="ml-8 border-t border-dashed border-muted-foreground/20 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;