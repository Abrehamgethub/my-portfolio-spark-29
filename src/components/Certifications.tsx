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

  const categories = [
    { id: "all", label: "All", icon: Sparkles, count: certifications.length },
    { id: "cloud", label: "Cloud Computing", icon: Cloud, count: certifications.filter(c => c.category === "cloud").length },
    { id: "ai", label: "AI & ML", icon: Brain, count: certifications.filter(c => c.category === "ai").length },
    { id: "creative", label: "Creative & Video", icon: Video, count: certifications.filter(c => c.category === "creative").length },
    { id: "networking", label: "Networking", icon: Network, count: certifications.filter(c => c.category === "networking").length },
    { id: "it", label: "IT & Security", icon: Shield, count: certifications.filter(c => c.category === "it").length },
    { id: "finance", label: "Finance", icon: DollarSign, count: certifications.filter(c => c.category === "finance").length },
    { id: "blockchain", label: "Blockchain", icon: DollarSign, count: certifications.filter(c => c.category === "blockchain").length },
    { id: "business", label: "Business", icon: Users, count: certifications.filter(c => c.category === "business").length }
  ];

  const filteredCertifications = selectedCategory === "all" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

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
              { label: "Total Certifications", value: certifications.length, icon: Award, color: "text-primary" },
              { label: "Cloud & DevOps", value: certifications.filter(c => c.category === "cloud").length, icon: Cloud, color: "text-blue-500" },
              { label: "AI & Emerging Tech", value: certifications.filter(c => c.category === "ai" || c.category === "blockchain").length, icon: Brain, color: "text-purple-500" },
              { label: "Creative Suite", value: certifications.filter(c => c.category === "creative").length, icon: Video, color: "text-pink-500" }
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
                const IconComponent = cert.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-card-gradient shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-primary/10 hover:border-primary/30 group animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-accent/50 group-hover:bg-accent transition-colors">
                          <IconComponent className={`w-6 h-6 ${cert.color}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base mb-2 leading-tight group-hover:text-primary transition-colors">
                            {cert.title}
                          </CardTitle>
                          <p className="text-primary font-medium text-sm mb-2">{cert.provider}</p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {cert.date}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    {(cert.description || cert.skills || cert.credentialId) && (
                      <CardContent className="pt-0">
                        {cert.description && (
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            {cert.description}
                          </p>
                        )}
                        {cert.skills && cert.skills.length > 0 && (
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
                        {cert.credentialId && (
                          <p className="text-xs text-muted-foreground">
                            ID: {cert.credentialId}
                          </p>
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