import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Creative Technologist & IT Consultant",
      company: "Self-Employed",
      location: "Addis Ababa, Ethiopia",
      period: "01/2024 – Present",
      achievements: [
        "Delivered comprehensive video editing and motion graphics services for 15+ digital campaigns across creative and corporate sectors",
        "Provided specialized IT consulting including network administration, cybersecurity assessments, and infrastructure optimization for Ethiopian businesses",
        "Created engaging video content using Adobe Premiere Pro and After Effects with 95% client satisfaction rate",
        "Built strategic client relationships spanning creative agencies, educational institutions, and technology companies",
        "Integrated creative storytelling with technical expertise to deliver unique, measurable digital solutions"
      ],
      skills: ["Video Editing", "Motion Graphics", "Adobe Creative Suite", "IT Consulting", "Project Management"]
    },
    {
      role: "IT Officer/Programming Instructor",
      company: "Ethiopian Education Initiatives",
      location: "Debrebirhan, Ethiopia",
      period: "02/2024 – Present",
      achievements: [
        "Managed 350+ iPad and Mac users through Mobile Device Management (MDM), achieving 99% uptime and seamless Google Workspace integration",
        "Delivered comprehensive Python programming curriculum to high school students, equipping 350+ students with foundational coding skills",
        "Reduced IT response time by 30% through automated ticketing system and technical documentation library implementation",
        "Handled 50+ support tickets weekly across multiple channels with 95% first-contact resolution rate"
      ],
      skills: ["MDM", "Python", "Google Workspace", "Customer Support"]
    },
    {
      role: "ICT Infrastructure & Security Engineer",
      company: "Hikma Electronics plc",
      location: "Addis Ababa, Ethiopia", 
      period: "07/2018 – 02/2024",
      achievements: [
        "Designed and maintained secure IT infrastructure including firewalls, servers, and access control systems for 20+ enterprise clients, achieving 99.5% uptime",
        "Implemented comprehensive data protection measures: end-to-end encryption, automated backup policies, and disaster recovery protocols—reducing data loss incidents by 85%",
        "Conducted quarterly vulnerability assessments and coordinated patch management across 200+ servers and applications, maintaining zero critical breaches",
        "Supported internal and external audits by documenting security controls aligned with ISO 27001 standards, ensuring full compliance across 6 consecutive audits",
        "Led incident response for network outages, malware infections, and unauthorized access attempts, achieving average containment time of under 30 minutes with 100% recovery rate"
      ],
      skills: ["Network Security", "Infrastructure Design", "ISO 27001", "Vulnerability Assessment", "Incident Response", "Data Protection", "Disaster Recovery"]
    },
    {
      role: "IT Supervisor",
      company: "Shemu Group",
      location: "Addis Ababa, Ethiopia",
      period: "02/2018 – 07/2018",
      achievements: [
        "Administered Microsoft Dynamics 365 ERP system, managing user access roles, data accuracy, and system workflows resulting in 25% reduction in operational errors",
        "Provided ICT troubleshooting for business-critical systems and office networks, maintaining 98% system availability",
        "Maintained comprehensive reporting and system documentation ensuring full regulatory compliance and audit readiness",
        "Streamlined workflow processes through ERP optimization, improving data processing efficiency by 20%"
      ],
      skills: ["Microsoft Dynamics 365", "ERP Administration", "ICT Support", "System Documentation", "Compliance"]
    },
    {
      role: "IT Support Technician",
      company: "Net&Com plc",
      location: "Addis Ababa, Ethiopia",
      period: "06/2015 – 02/2018", 
      achievements: [
        "Implemented enterprise-grade Windows server environments for 5+ major Ethiopian banks and educational institutions, securing networks for thousands of users",
        "Deployed large-scale network infrastructure for ECA and World Food Program: 1,500 workstations, 50 printers, 50 communication rooms—completed within 3-week deadline",
        "Troubleshot Tier I and II issues for live services, maintaining 97% uptime for business-critical systems",
        "Optimized data center equipment through improved cooling systems and layout designs, reducing energy consumption by 15% and improving performance"
      ],
      skills: ["Windows Server", "Network Infrastructure", "Data Center Management", "Energy Optimization"]
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