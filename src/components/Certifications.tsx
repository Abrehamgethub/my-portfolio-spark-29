import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, BookOpen, Shield, ExternalLink, Cloud, Video, Brain, Network, DollarSign, Users, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const certifications = [
    // Google Cloud
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      provider: "Google Cloud",
      date: "Oct 2025",
      credentialId: "19273711",
      category: "cloud",
      icon: Cloud,
      color: "text-blue-500"
    },
    {
      title: "Implementing Cloud Load Balancing for Compute Engine",
      provider: "Google Cloud",
      date: "Oct 2025",
      credentialId: "19240576",
      category: "cloud",
      icon: Cloud,
      color: "text-blue-500"
    },
    {
      title: "Prompt Design in Vertex AI Skill Badge",
      provider: "Google Cloud",
      date: "Oct 2025",
      category: "ai",
      icon: Brain,
      color: "text-purple-500"
    },
    {
      title: "Prepare Data for ML APIs on Google Cloud Skill Badge",
      provider: "Google Cloud",
      date: "Oct 2025",
      category: "ai",
      icon: Brain,
      color: "text-purple-500"
    },
    {
      title: "Set Up an App Dev Environment on Google Cloud Skill Badge",
      provider: "Google Cloud",
      date: "Oct 2025",
      category: "cloud",
      icon: Cloud,
      color: "text-blue-500"
    },
    
    // Adobe Creative Suite
    {
      title: "Adobe Premiere Pro - Advanced Training",
      provider: "Bring Your Own Laptop",
      date: "May 2025",
      category: "creative",
      skills: ["Adobe Premiere Pro", "Video Editing", "Storytelling", "Video Color Grading", "Motion Graphics", "Sound Sync & Voiceover"],
      description: "Advanced skills in Adobe Premiere Pro CC including productivity workflow, Lumetri Color, color grading, video masks, motion graphics, multi-cam editing, and audio meters.",
      icon: Video,
      color: "text-pink-500"
    },
    {
      title: "After Effects CC - Animated Infographic Training",
      provider: "Bring Your Own Laptop",
      date: "May 2025",
      category: "creative",
      skills: ["After Effects"],
      description: "Creating animated infographics including animated charts, graphs, percentage counters, voice overs, puppet tool, motion blur, and camera techniques.",
      icon: Video,
      color: "text-pink-500"
    },
    {
      title: "Adobe Premiere Pro CC - Essentials Training",
      provider: "Bring Your Own Laptop",
      date: "Apr 2025",
      category: "creative",
      skills: ["Color Correction", "Video Transitions", "Animation", "Motion Graphics", "Special Effects"],
      description: "Essential skills in Adobe Premiere Pro CC including color correction, transitions, animation, and HD/4K video production.",
      icon: Video,
      color: "text-pink-500"
    },

    // AI & Emerging Tech
    {
      title: "ALX AI Starter Kit",
      provider: "ALX Africa",
      date: "Apr 2025",
      category: "ai",
      description: "Deep understanding of common AI buzzwords, trends, and concepts for real-world AI applications.",
      icon: Brain,
      color: "text-purple-500"
    },
    {
      title: "AWS Educate Introduction to Generative AI",
      provider: "Amazon Web Services",
      date: "Aug 2025",
      category: "ai",
      icon: Brain,
      color: "text-purple-500"
    },

    // Microsoft & Business
    {
      title: "Learning Microsoft 365 Copilot and Business Chat",
      provider: "LinkedIn",
      date: "Feb 2025",
      category: "business",
      skills: ["Office 365", "Microsoft Copilot"],
      icon: Users,
      color: "text-green-500"
    },

    // Blockchain & Crypto
    {
      title: "Cryptocurrency Deep Dive",
      provider: "Binance Academy",
      date: "Mar 2024",
      credentialId: "c0278878f49f97dcf4ac7f0f8397d3faa7d44bd596f5ad1ec8439bcc69a8b782",
      category: "blockchain",
      icon: DollarSign,
      color: "text-yellow-500"
    },
    {
      title: "Blockchain Deep Dive",
      provider: "Binance Academy",
      date: "Feb 2024",
      credentialId: "1e839545417d6049dc9c377d126226182a829ea964c0a4655f8c38c0df7e81a5",
      category: "blockchain",
      icon: DollarSign,
      color: "text-yellow-500"
    },

    // Customer Service
    {
      title: "Building Rapport with Customers",
      provider: "LinkedIn",
      date: "Oct 2023",
      category: "business",
      skills: ["Customer Service"],
      icon: Users,
      color: "text-green-500"
    },
    {
      title: "Creating Positive Conversations with Challenging Customers",
      provider: "LinkedIn",
      date: "Oct 2023",
      category: "business",
      skills: ["Customer Service"],
      icon: Users,
      color: "text-green-500"
    },
    {
      title: "Customer Service Foundations",
      provider: "LinkedIn",
      date: "Oct 2023",
      category: "business",
      skills: ["Customer Service", "Customer Support"],
      icon: Users,
      color: "text-green-500"
    },

    // Google IT Support
    {
      title: "Google IT Support Specialization",
      provider: "Coursera",
      date: "Jul 2023",
      credentialId: "BUGBQL87JN5K",
      category: "it",
      skills: ["Customer Service", "Network Administration", "IT Operations"],
      icon: Shield,
      color: "text-red-500"
    },
    {
      title: "IT Security: Defense against the digital dark arts",
      provider: "Coursera",
      date: "Jul 2023",
      credentialId: "NDLYAHYFLAL9",
      category: "it",
      icon: Shield,
      color: "text-red-500"
    },
    {
      title: "System Administration and IT Infrastructure Services",
      provider: "Coursera",
      date: "Jun 2023",
      credentialId: "8BE3FZRTNPRY",
      category: "it",
      icon: Shield,
      color: "text-red-500"
    },
    {
      title: "Operating Systems and You: Becoming a Power User",
      provider: "Coursera",
      date: "May 2023",
      credentialId: "2QKER6P3DQLL",
      category: "it",
      icon: Shield,
      color: "text-red-500"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      provider: "Coursera",
      date: "Mar 2023",
      credentialId: "23LG8EN9Z6CH",
      category: "networking",
      icon: Network,
      color: "text-cyan-500"
    },
    {
      title: "Technical Support Fundamentals",
      provider: "Coursera",
      date: "Feb 2023",
      credentialId: "DG3HZRW3A9H7",
      category: "it",
      icon: Shield,
      color: "text-red-500"
    },

    // AWS
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      provider: "Amazon Web Services",
      date: "Apr 2023",
      category: "cloud",
      icon: Cloud,
      color: "text-orange-500"
    },

    // Docker & Containers
    {
      title: "Learning Docker Compose",
      provider: "LinkedIn",
      date: "Jun 2023",
      category: "it",
      icon: Shield,
      color: "text-red-500"
    },
    {
      title: "Using Docker and .NET Core",
      provider: "LinkedIn",
      date: "May 2023",
      category: "it",
      icon: Shield,
      color: "text-red-500"
    },

    // Azure
    {
      title: "Azure Active Directory: Basics",
      provider: "LinkedIn",
      date: "May 2023",
      category: "cloud",
      icon: Cloud,
      color: "text-blue-500"
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900) Cert Prep: 1 Cloud Concepts",
      provider: "LinkedIn",
      date: "May 2023",
      category: "cloud",
      icon: Cloud,
      color: "text-blue-500"
    },

    // Corporate Finance
    {
      title: "Capital IQ Fundamentals",
      provider: "Corporate Finance Institute",
      date: "Oct 2022",
      credentialId: "60502393",
      category: "finance",
      icon: DollarSign,
      color: "text-emerald-500"
    },
    {
      title: "Corporate Finance Fundamentals",
      provider: "Corporate Finance Institute",
      date: "Oct 2022",
      credentialId: "60248325",
      category: "finance",
      icon: DollarSign,
      color: "text-emerald-500"
    },
    {
      title: "Excel Fundamentals – Formulas for Finance",
      provider: "Corporate Finance Institute",
      date: "Oct 2022",
      credentialId: "60024385",
      category: "finance",
      icon: DollarSign,
      color: "text-emerald-500"
    },
    {
      title: "Reading Financial Statements",
      provider: "Corporate Finance Institute",
      date: "Oct 2022",
      credentialId: "59660158",
      category: "finance",
      icon: DollarSign,
      color: "text-emerald-500"
    },

    // Cisco
    {
      title: "Cybersecurity Essentials",
      provider: "Cisco Networking Academy",
      date: "Sep 2017",
      category: "networking",
      icon: Network,
      color: "text-cyan-500"
    },
    {
      title: "Introduction to Cybersecurity",
      provider: "Cisco",
      date: "Jun 2016",
      category: "networking",
      icon: Network,
      color: "text-cyan-500"
    },
    {
      title: "Linux Essentials",
      provider: "Cisco",
      date: "May 2016",
      category: "it",
      icon: Shield,
      color: "text-red-500"
    },
    {
      title: "Cisco CCNA - Switching & Routing",
      provider: "Cisco",
      date: "Feb 2016",
      category: "networking",
      icon: Network,
      color: "text-cyan-500"
    }
  ];

  const education = [
    {
      degree: "B.Sc. in Information Technologies",
      specialization: "Software Engineering",
      institution: "Adama Science and Technology University",
      period: "Sep 2009 – Oct 2014",
      icon: "🎓"
    },
    {
      degree: "Cisco Certified Network Associate (CCNA)",
      specialization: "",
      institution: "Addis Ababa University, School of Commerce Cisco Local Academy", 
      period: "Feb 2016 – Jan 2017",
      icon: "🌐"
    }
  ];

  // Credly Badges
  const credlyBadges = [
    {
      title: "Prompt Design in Vertex AI Skill Badge",
      issuer: "Google Cloud",
      date: "Oct 2025",
      image: "https://images.credly.com/images/cef82b2e-970a-4318-8e59-c3e26b7f5c19/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Expertise in designing effective prompts for AI models using Google Cloud's Vertex AI platform",
      category: "ai"
    },
    {
      title: "Prepare Data for ML APIs on Google Cloud Skill Badge",
      issuer: "Google Cloud",
      date: "Oct 2025",
      image: "https://images.credly.com/images/68756311-9319-4eeb-a2b7-76defc8dd8a2/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Skills in preparing and processing data for machine learning APIs on Google Cloud Platform",
      category: "ai"
    },
    {
      title: "Set Up an App Dev Environment on Google Cloud Skill Badge",
      issuer: "Google Cloud",
      date: "Oct 2025",
      image: "https://images.credly.com/images/42326d44-14ff-4eda-b9c5-7d8f12919253/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Proficiency in configuring and managing application development environments on Google Cloud",
      category: "cloud"
    },
    {
      title: "Implement Load Balancing on Compute Engine Skill Badge",
      issuer: "Google Cloud",
      date: "Oct 2025",
      image: "https://images.credly.com/images/eea11cba-2a98-4bbe-bad2-447878dd34a2/image.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Practical skills in implementing and configuring load balancing solutions on Google Compute Engine",
      category: "cloud"
    },
    {
      title: "AWS Educate Introduction to Generative AI",
      issuer: "Amazon Web Services",
      date: "Aug 2025",
      image: "https://images.credly.com/images/e50c657a-edd9-4c93-b1cf-2b6634b54abf/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Foundational knowledge of generative AI concepts, applications, and AWS services supporting AI/ML workloads",
      category: "ai"
    },
    {
      title: "AWS Educate Getting Started with Serverless",
      issuer: "Amazon Web Services",
      date: "Aug 2025",
      image: "https://images.credly.com/images/25108813-2dd7-45f7-8158-65689b8526b5/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Understanding of serverless computing concepts and AWS Lambda functions",
      category: "cloud"
    },
    {
      title: "AWS Educate Getting Started with Security",
      issuer: "Amazon Web Services",
      date: "Aug 2025",
      image: "https://images.credly.com/images/fc6fa322-80f4-45a5-9def-91e9bcfde837/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Fundamentals of cloud security, AWS security services, and best practices",
      category: "it"
    },
    {
      title: "AWS Educate Getting Started with Cloud Ops",
      issuer: "Amazon Web Services",
      date: "Aug 2025",
      image: "https://images.credly.com/images/4251ab91-6d67-47da-801c-855c0bbc6cc3/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Cloud operations, monitoring, and management using AWS services",
      category: "cloud"
    },
    {
      title: "Lifelong Learning 2025",
      issuer: "Certiprof",
      date: "Jul 2025",
      image: "https://images.credly.com/images/1f70513f-98d2-4b61-b8d7-c509b9090478/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Commitment to continuous learning and professional development",
      category: "business"
    },
    {
      title: "AWS Educate Getting Started with Databases",
      issuer: "Amazon Web Services",
      date: "Jun 2025",
      image: "https://images.credly.com/images/a08cf90b-9838-4f6c-82bd-8db85fb89dd5/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Database concepts and AWS database services including RDS and DynamoDB",
      category: "cloud"
    },
    {
      title: "AWS Educate Getting Started with Networking",
      issuer: "Amazon Web Services",
      date: "Jun 2025",
      image: "https://images.credly.com/images/f5095707-7683-4886-940c-3e8e4a2085ca/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Networking fundamentals and AWS VPC, subnets, and routing concepts",
      category: "networking"
    },
    {
      title: "AWS Educate Getting Started with Compute",
      issuer: "Amazon Web Services",
      date: "May 2025",
      image: "https://images.credly.com/images/7b08cc0e-064b-407d-b70e-323509c3e474/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Foundational compute concepts and AWS EC2 instances, autoscaling, and load balancing",
      category: "cloud"
    },
    {
      title: "AWS Educate Getting Started with Storage",
      issuer: "Amazon Web Services",
      date: "May 2025",
      image: "https://images.credly.com/images/3b1b42e6-dfc2-492b-90df-8058096cb93d/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Storage fundamentals and AWS S3, EBS, and storage optimization strategies",
      category: "cloud"
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services",
      date: "May 2025",
      image: "https://images.credly.com/images/e51a8579-188d-4363-8ed1-12ad164ef57b/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Introduction to cloud computing concepts and AWS core services",
      category: "cloud"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "Dec 2023",
      image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Foundational cybersecurity concepts, threats, and protection strategies",
      category: "it"
    },
    {
      title: "Google IT Support Professional Certificate",
      issuer: "Coursera",
      date: "Jul 2023",
      image: "https://images.credly.com/images/fb97a12f-c0f1-4f37-9b7d-4a830199fe84/GCC_badge_IT_Support_1000x1000.png",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Comprehensive IT support skills including troubleshooting, customer service, and system administration",
      category: "it"
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.credly.com/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob",
      credlyUrl: "https://www.credly.com/users/abreham-kassahun/badges",
      description: "Practical cloud skills through hands-on AWS scenarios and solutions",
      category: "cloud"
    }
  ];

  // Combine certifications and credly badges
  const allCertifications = [...certifications, ...credlyBadges];

  const categories = [
    { id: "all", label: "All", icon: Sparkles, count: allCertifications.length },
    { id: "cloud", label: "Cloud Computing", icon: Cloud, count: allCertifications.filter(c => c.category === "cloud").length },
    { id: "ai", label: "AI & ML", icon: Brain, count: allCertifications.filter(c => c.category === "ai").length },
    { id: "creative", label: "Creative & Video", icon: Video, count: allCertifications.filter(c => c.category === "creative").length },
    { id: "networking", label: "Networking", icon: Network, count: allCertifications.filter(c => c.category === "networking").length },
    { id: "it", label: "IT & Security", icon: Shield, count: allCertifications.filter(c => c.category === "it").length },
    { id: "finance", label: "Finance", icon: DollarSign, count: allCertifications.filter(c => c.category === "finance").length },
    { id: "blockchain", label: "Blockchain", icon: DollarSign, count: allCertifications.filter(c => c.category === "blockchain").length },
    { id: "business", label: "Business", icon: Users, count: allCertifications.filter(c => c.category === "business").length }
  ];

  const filteredCertifications = selectedCategory === "all" 
    ? allCertifications 
    : allCertifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 bg-hero-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="bg-hero-gradient bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Committed to continuous learning with <span className="text-primary font-semibold">{certifications.length}+ certifications</span> spanning cloud computing, AI/ML, cybersecurity, creative production, and emerging technologies
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in">
            {[
              { label: "Total Certifications", value: allCertifications.length, icon: Award, color: "text-primary" },
              { label: "Cloud & DevOps", value: allCertifications.filter(c => c.category === "cloud").length, icon: Cloud, color: "text-blue-500" },
              { label: "AI & Emerging Tech", value: allCertifications.filter(c => c.category === "ai" || c.category === "blockchain").length, icon: Brain, color: "text-purple-500" },
              { label: "Creative Suite", value: allCertifications.filter(c => c.category === "creative").length, icon: Video, color: "text-pink-500" }
            ].map((stat, index) => (
              <Card key={index} className="bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-1">
                    {stat.value}+
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education Section */}
          <div className="mb-16 animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="bg-card-gradient shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-primary/10 hover:border-primary/30 group"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{edu.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">{edu.degree}</CardTitle>
                        {edu.specialization && (
                          <Badge variant="secondary" className="mb-2">{edu.specialization}</Badge>
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

          {/* Certifications with Category Filter */}
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold">Professional Certifications</h3>
              </div>
              <Badge variant="outline" className="text-lg px-4 py-2">
                {filteredCertifications.length} certifications
              </Badge>
            </div>

            {/* Category Filters */}
            <div className="mb-8 overflow-x-auto pb-2">
              <div className="flex gap-2 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                      selectedCategory === cat.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-card hover:bg-accent border border-border"
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    <span className="font-medium">{cat.label}</span>
                    <Badge 
                      variant="secondary" 
                      className={selectedCategory === cat.id ? "bg-primary-foreground/20" : ""}
                    >
                      {cat.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCertifications.map((cert, index) => {
                return (
                  <Card 
                    key={index}
                    className="bg-card-gradient shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-primary/10 hover:border-primary/30 group animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        {'image' in cert ? (
                          <div className="flex-shrink-0">
                            <img 
                              src={cert.image} 
                              alt={cert.title}
                              className="w-16 h-16 object-contain rounded-lg"
                              onError={(e) => {
                                e.currentTarget.src = '/placeholder.svg';
                              }}
                            />
                          </div>
                        ) : 'icon' in cert ? (
                          <div className="p-3 rounded-lg bg-accent/50 group-hover:bg-accent transition-colors flex-shrink-0">
                            <cert.icon className={`w-6 h-6 ${'color' in cert ? cert.color : 'text-primary'}`} />
                          </div>
                        ) : null}
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-base mb-2 leading-tight group-hover:text-primary transition-colors">
                            {cert.title}
                          </CardTitle>
                          <p className="text-primary font-medium text-sm mb-2">
                            {'issuer' in cert ? cert.issuer : 'provider' in cert ? cert.provider : ''}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {cert.date}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    {(cert.description || ('skills' in cert && cert.skills) || ('credentialId' in cert && cert.credentialId) || ('credlyUrl' in cert && cert.credlyUrl)) && (
                      <CardContent className="pt-0">
                        {cert.description && (
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            {cert.description}
                          </p>
                        )}
                        {'skills' in cert && cert.skills && cert.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {cert.skills.slice(0, 3).map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {cert.skills.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{cert.skills.length - 3}
                              </Badge>
                            )}
                          </div>
                        )}
                        {'credentialId' in cert && cert.credentialId && (
                          <p className="text-xs text-muted-foreground mb-2">
                            ID: {cert.credentialId}
                          </p>
                        )}
                        {'credlyUrl' in cert && cert.credlyUrl && (
                          <a
                            href={cert.credlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-xs font-medium transition-all group-hover:gap-3"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Verify on Credly
                          </a>
                        )}
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;