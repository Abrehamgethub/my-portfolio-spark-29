import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "IT Officer/Programming Instructor",
      company: "Ethiopian Education Initiatives",
      location: "Debrebirhan, Ethiopia",
      period: "02/2024 – Present",
      achievements: [
        "Managed over 350 iPad and Mac users through Mobile Device Management (MDM)",
        "Delivered Python programming classes to high school students",
        "Handled support tickets efficiently via multiple channels",
        "Ensured secure device performance and Google Workspace integration"
      ],
      skills: ["MDM", "Python", "Google Workspace", "Customer Support"]
    },
    {
      role: "Customer Support Team Lead",
      company: "Hikma Electronics plc",
      location: "Addis Ababa, Ethiopia", 
      period: "07/2018 – 02/2024",
      achievements: [
        "Led a team of remote customer support associates",
        "Ensured timely resolution across multiple platforms",
        "Set and tracked key performance indicators (KPIs)",
        "Optimized workflows and provided team training"
      ],
      skills: ["Team Leadership", "KPI Management", "Customer Support", "Process Optimization"]
    },
    {
      role: "IT Support Technician",
      company: "Net&Com plc",
      location: "Addis Ababa, Ethiopia",
      period: "06/2015 – 02/2018", 
      achievements: [
        "Implemented Windows server environments for educational institutions and banks",
        "Troubleshot Tier I and II issues for live services",
        "Optimized data center equipment, reducing energy consumption by 15%",
        "Resolved technical issues for multiple employees daily"
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

        <div className="max-w-4xl mx-auto space-y-8">
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