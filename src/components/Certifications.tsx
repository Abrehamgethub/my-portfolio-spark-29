import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, BookOpen } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Google IT Support Professional Certificate",
      provider: "Coursera",
      period: "Nov 2022 – Jul 2023",
      icon: "🏅",
      description: "Technical Support Fundamentals, Computer Networking, Operating Systems, System Administration, IT Security"
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      provider: "Cisco Networking Academy", 
      period: "Feb 2016 – May 2017",
      icon: "🌐",
      description: "Routing, switching, VLANs, IP addressing, subnetting, and advanced networking concepts"
    },
    {
      title: "Cybersecurity Fundamentals & Operations",
      provider: "Cisco Networking Academy",
      period: "Sep 2016 – Jul 2017", 
      icon: "🛡️",
      description: "Threat detection, defense mechanisms, global implications of cyber threats, and industry best practices"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      provider: "AWS Skill Builder",
      period: "Jan 2023 – Mar 2023",
      icon: "☁️", 
      description: "Foundational knowledge of cloud computing principles and AWS services"
    },
    {
      title: "Azure Active Directory: Basic",
      provider: "LinkedIn Learning",
      period: "Apr 2023 – May 2023",
      icon: "🔐",
      description: "Identity management and security features in Microsoft Azure AD"
    },
    {
      title: "Zendesk Customer Service Professional", 
      provider: "LinkedIn Learning",
      period: "Sep 2023 – Oct 2023",
      icon: "🎧",
      description: "Ticket management, customer engagement strategies, and leveraging Zendesk tools"
    },
    {
      title: "NDG Linux Unhatched and Essentials",
      provider: "Cisco Networking Academy",
      period: "Apr 2023 – Jul 2023",
      icon: "🐧",
      description: "Linux operating systems, command-line interface operations and basic scripting"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      specialization: "Software Engineering",
      institution: "Adama Science and Technology University",
      period: "Sep 2009 – Oct 2014",
      icon: "🎓"
    },
    {
      degree: "Computer Maintenance and Networking",
      specialization: "",
      institution: "D.M.A Technology Institute", 
      period: "Mar 2012 – Sep 2012",
      icon: "🔧"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-hero-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="bg-hero-gradient bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in IT and customer service
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{edu.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{edu.degree}</CardTitle>
                        {edu.specialization && (
                          <p className="text-primary font-medium mb-2">{edu.specialization}</p>
                        )}
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Professional Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{cert.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                        <p className="text-primary font-medium mb-2">{cert.provider}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                          <Calendar className="w-4 h-4" />
                          {cert.period}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;