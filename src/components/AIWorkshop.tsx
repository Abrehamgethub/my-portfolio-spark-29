import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, MapPin, Users, Lightbulb, Award } from "lucide-react";

const AIWorkshop = () => {
  const workshopDetails = {
    title: "AI Workshop & Hackathon – Orchestrating Multi-AI Collaboration",
    date: "September 20, 2025",
    location: "ALX Capstone Hub, Ethiopia",
    facilitator: "Elvis Melia",
    teammate: "Nahom",
    focus: "AI at Work: Managing Teams of Large Language Models (LLMs)"
  };

  const aiSystems = [
    { name: "Gemini", role: "Research & Analysis", color: "text-blue-500" },
    { name: "ChatGPT", role: "System Design", color: "text-green-500" },
    { name: "DeepSeek", role: "Solution Validation", color: "text-purple-500" },
    { name: "v0 AI", role: "Web App Development", color: "text-orange-500" }
  ];

  const activities = [
    "Built and tested structured workflows to coordinate multiple AI systems",
    "Assigned specific roles to each AI: research, system design, solution validation",
    "Orchestrated AI collaboration where each system built upon others' outputs",
    "Used v0 AI to develop a functional web application demo",
    "Delivered a polished 3-minute CEO-style pitch presentation"
  ];

  const deliverables = [
    {
      title: "Multi-AI Workflow",
      description: "Structured coordination system for managing AI collaborators",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "MVP Prototype",
      description: "Drone-assisted delivery solution for Addis Ababa using web app demo",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      title: "Executive Pitch",
      description: "3-minute CEO-style presentation showcasing technical innovation",
      icon: <Trophy className="w-5 h-5" />
    }
  ];

  const skills = [
    "AI Orchestration",
    "System Design", 
    "App Prototyping",
    "Technical Pitching",
    "Multi-AI Coordination",
    "Strategic Teamwork"
  ];

  return (
    <section id="ai-workshop" className="py-20 bg-hero-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI Projects & <span className="bg-hero-gradient bg-clip-text text-transparent">Hackathons</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Orchestrating Multi-AI Collaboration for Innovation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Workshop Card */}
          <Card className="bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 mb-12">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-4">{workshopDetails.title}</CardTitle>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    I participated in a full-day workshop and hackathon facilitated by <strong>{workshopDetails.facilitator}</strong>, 
                    focused on <em>{workshopDetails.focus}</em>. Paired with my teammate <strong>{workshopDetails.teammate}</strong>, 
                    we built and tested structured workflows to coordinate multiple AI systems, developing an innovative 
                    drone-assisted delivery solution for Addis Ababa through strategic AI orchestration.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {workshopDetails.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {workshopDetails.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Activities */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Key Activities
                  </h4>
                  <ul className="space-y-3">
                    {activities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-hero-gradient rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Skills Demonstrated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Systems Used */}
          <Card className="bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 mb-12">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <div className="text-2xl">🤖</div>
                AI Systems & Role Assignment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {aiSystems.map((system, index) => (
                  <div key={index} className="bg-secondary/20 rounded-lg p-4 text-center">
                    <h5 className={`font-semibold mb-2 ${system.color}`}>{system.name}</h5>
                    <p className="text-sm text-muted-foreground">{system.role}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Each AI system was strategically assigned specific roles, working collaboratively to build upon each other's outputs
              </p>
            </CardContent>
          </Card>

          {/* Project Images */}
          <Card className="bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 mb-12">
            <CardHeader>
              <CardTitle className="text-xl text-center">Project Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-secondary/20 rounded-lg p-8 mb-3 flex items-center justify-center min-h-32">
                    <span className="text-4xl">🏆</span>
                  </div>
                  <p className="text-sm font-medium">Certificate of Completion</p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary/20 rounded-lg p-8 mb-3 flex items-center justify-center min-h-32">
                    <span className="text-4xl">👥</span>
                  </div>
                  <p className="text-sm font-medium">Team Photo with Elvis & Nahom</p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary/20 rounded-lg p-8 mb-3 flex items-center justify-center min-h-32">
                    <span className="text-4xl">📱</span>
                  </div>
                  <p className="text-sm font-medium">Web App Demo Screenshot</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Visual documentation of the hackathon experience and deliverables
              </p>
            </CardContent>
          </Card>

          {/* Deliverables */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {deliverables.map((deliverable, index) => (
              <Card 
                key={index}
                className="bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4 text-primary">
                    {deliverable.icon}
                  </div>
                  <CardTitle className="text-lg">{deliverable.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {deliverable.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recognition */}
          <Card className="bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center justify-center gap-4">
                <Trophy className="w-8 h-8 text-primary" />
                <CardTitle className="text-xl">Recognition & Achievement</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed">
                <strong>Certificate of Completion</strong> - Recognized for exceptional skills in AI orchestration, 
                strategic multi-system coordination, and technical leadership in managing collaborative AI workflows. 
                This achievement demonstrates my ability to orchestrate AI systems as collaborators, not just tools, 
                and deliver innovative solutions through human-AI teamwork in fast-paced environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIWorkshop;