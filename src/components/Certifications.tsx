import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, BookOpen, Shield, ExternalLink } from "lucide-react";

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

  const credlyBadges = [
    {
      title: "AWS Educate Introduction to Generative AI",
      issuer: "Amazon Web Services Training and Certification",
      date: "Aug 14, 2025",
      image: "https://images.credly.com/images/4b68a030-53d0-414b-be57-b1837bc3b3e6/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Foundational knowledge of generative AI concepts, applications, and AWS services supporting AI/ML workloads"
    },
    {
      title: "AWS Educate Getting Started with Serverless",
      issuer: "Amazon Web Services Training and Certification", 
      date: "Aug 13, 2025",
      image: "https://images.credly.com/images/629a2bb9-14a6-47b3-b17e-f1056b1404d0/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Understanding of serverless computing concepts and AWS Lambda functions"
    },
    {
      title: "AWS Educate Getting Started with Security",
      issuer: "Amazon Web Services Training and Certification",
      date: "Aug 11, 2025", 
      image: "https://images.credly.com/images/80845928-d1f8-4549-ae9d-27676fba897e/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Fundamentals of cloud security, AWS security services, and best practices"
    },
    {
      title: "AWS Educate Getting Started with Cloud Ops",
      issuer: "Amazon Web Services Training and Certification",
      date: "Aug 10, 2025",
      image: "https://images.credly.com/images/01c3b0d4-a225-483b-a762-460473658c1a/image.png", 
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Cloud operations, monitoring, and management using AWS services"
    },
    {
      title: "Lifelong Learning 2025",
      issuer: "Certiprof",
      date: "Jul 10, 2025",
      image: "https://images.credly.com/images/1f70513f-98d2-4b61-b8d7-c509b9090478/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges", 
      description: "Commitment to continuous learning and professional development"
    },
    {
      title: "AWS Educate Getting Started with Databases",
      issuer: "Amazon Web Services Training and Certification",
      date: "Jun 7, 2025",
      image: "https://images.credly.com/images/6f135924-7645-4bd2-ab68-3bc0b49c7e27/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Database concepts and AWS database services including RDS and DynamoDB"
    },
    {
      title: "AWS Educate Getting Started with Networking",
      issuer: "Amazon Web Services Training and Certification", 
      date: "Jun 3, 2025",
      image: "https://images.credly.com/images/979e42e2-1d32-4d21-97ea-53d991ea50fb/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Networking fundamentals and AWS VPC, subnets, and routing concepts"
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services Training and Certification",
      date: "May 27, 2025", 
      image: "https://images.credly.com/images/8d67bbf4-128b-4141-b5f1-1bc61bbfbaa6/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Introduction to cloud computing concepts and AWS core services"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "Dec 13, 2023",
      image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Foundational cybersecurity concepts, threats, and protection strategies"
    },
    {
      title: "Google IT Support Professional Certificate",
      issuer: "Coursera",
      date: "Jul 24, 2023",
      image: "https://images.credly.com/images/fb97a12f-c0f1-4f37-9b7d-4a830199fe84/GCC_badge_IT_Support_1000x1000.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Comprehensive IT support skills including troubleshooting, customer service, and system administration"
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner", 
      issuer: "Amazon Web Services Training and Certification",
      date: "2023",
      image: "https://images.credly.com/images/2784d0d8-327c-406f-971e-9f0e15097003/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Practical cloud skills through hands-on AWS scenarios and solutions"
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
            Committed to continuous learning through professional certifications spanning cloud computing, cybersecurity, network administration, and emerging technologies
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

          {/* Digital Badges Section */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Digital Badges</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {credlyBadges.map((badge, index) => (
                <Card 
                  key={index}
                  className="bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <img 
                        src={badge.image} 
                        alt={badge.title}
                        className="w-20 h-20 object-contain rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <CardTitle className="text-lg mb-2 leading-tight">{badge.title}</CardTitle>
                    <p className="text-primary font-medium mb-2">{badge.issuer}</p>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      {badge.date}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {badge.description}
                    </p>
                    <a
                      href={badge.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors group-hover:gap-3"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify on Credly
                    </a>
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