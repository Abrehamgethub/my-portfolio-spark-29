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
      title: "Google Cloud Fundamentals: Core Infrastructure",
      provider: "Google Cloud",
      period: "2024 – 2025",
      icon: "☁️",
      description: "Core infrastructure components, computing services, storage options, and networking in Google Cloud Platform"
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
      title: "Prompt Design in Vertex AI Skill Badge",
      issuer: "Google Cloud",
      date: "Oct 31, 2025",
      image: "https://images.credly.com/images/cef82b2e-970a-4318-8e59-c3e26b7f5c19/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Expertise in designing effective prompts for AI models using Google Cloud's Vertex AI platform"
    },
    {
      title: "Prepare Data for ML APIs on Google Cloud Skill Badge",
      issuer: "Google Cloud",
      date: "Oct 29, 2025",
      image: "https://images.credly.com/images/68756311-9319-4eeb-a2b7-76defc8dd8a2/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Skills in preparing and processing data for machine learning APIs on Google Cloud Platform"
    },
    {
      title: "Set Up an App Dev Environment on Google Cloud Skill Badge",
      issuer: "Google Cloud",
      date: "Oct 22, 2025",
      image: "https://images.credly.com/images/42326d44-14ff-4eda-b9c5-7d8f12919253/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Proficiency in configuring and managing application development environments on Google Cloud"
    },
    {
      title: "Implement Load Balancing on Compute Engine Skill Badge",
      issuer: "Google Cloud",
      date: "Oct 17, 2025",
      image: "https://images.credly.com/images/eea11cba-2a98-4bbe-bad2-447878dd34a2/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Practical skills in implementing and configuring load balancing solutions on Google Compute Engine"
    },
    {
      title: "AWS Educate Introduction to Generative AI",
      issuer: "Amazon Web Services Training and Certification",
      date: "Aug 14, 2025",
      image: "https://images.credly.com/images/e50c657a-edd9-4c93-b1cf-2b6634b54abf/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Foundational knowledge of generative AI concepts, applications, and AWS services supporting AI/ML workloads"
    },
    {
      title: "AWS Educate Getting Started with Serverless",
      issuer: "Amazon Web Services Training and Certification", 
      date: "Aug 13, 2025",
      image: "https://images.credly.com/images/25108813-2dd7-45f7-8158-65689b8526b5/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Understanding of serverless computing concepts and AWS Lambda functions"
    },
    {
      title: "AWS Educate Getting Started with Security",
      issuer: "Amazon Web Services Training and Certification",
      date: "Aug 11, 2025", 
      image: "https://images.credly.com/images/fc6fa322-80f4-45a5-9def-91e9bcfde837/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Fundamentals of cloud security, AWS security services, and best practices"
    },
    {
      title: "AWS Educate Getting Started with Cloud Ops",
      issuer: "Amazon Web Services Training and Certification",
      date: "Aug 10, 2025",
      image: "https://images.credly.com/images/4251ab91-6d67-47da-801c-855c0bbc6cc3/blob", 
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
      image: "https://images.credly.com/images/a08cf90b-9838-4f6c-82bd-8db85fb89dd5/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Database concepts and AWS database services including RDS and DynamoDB"
    },
    {
      title: "AWS Educate Getting Started with Networking",
      issuer: "Amazon Web Services Training and Certification", 
      date: "Jun 3, 2025",
      image: "https://images.credly.com/images/f5095707-7683-4886-940c-3e8e4a2085ca/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Networking fundamentals and AWS VPC, subnets, and routing concepts"
    },
    {
      title: "AWS Educate Getting Started with Compute",
      issuer: "Amazon Web Services Training and Certification",
      date: "May 31, 2025",
      image: "https://images.credly.com/images/7b08cc0e-064b-407d-b70e-323509c3e474/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Foundational compute concepts and AWS EC2 instances, autoscaling, and load balancing"
    },
    {
      title: "AWS Educate Getting Started with Storage",
      issuer: "Amazon Web Services Training and Certification",
      date: "May 30, 2025",
      image: "https://images.credly.com/images/3b1b42e6-dfc2-492b-90df-8058096cb93d/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Storage fundamentals and AWS S3, EBS, and storage optimization strategies"
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services Training and Certification",
      date: "May 27, 2025", 
      image: "https://images.credly.com/images/e51a8579-188d-4363-8ed1-12ad164ef57b/blob",
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
      image: "https://images.credly.com/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob",
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