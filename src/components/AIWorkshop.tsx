import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, MapPin, Users, Lightbulb, Award } from "lucide-react";

const AIWorkshop = () => {
  const workshopDetails = {
    title: "AI Workshop & Hackathon – Managing Teams of LLMs",
    date: "September 20, 2025",
    location: "ALX Capstone Hub, Ethiopia",
    facilitator: "Elvis Melia",
    teammate: "Nahom",
    focus: "AI at Work: Managing Teams of Large Language Models (LLMs)"
  };

  const activities = [
    "Experimented with 7+ AI systems and selected the top 3 performing models",
    "Managed AI systems like a team of engineers with structured workflows",
    "Wrote comprehensive structured prompts for complex problem-solving",
    "Facilitated AI systems to critique and build on each other's solutions",
    "Developed CEO-style pitch presentations for technical solutions"
  ];

  const deliverables = [
    {
      title: "Prototype Solution",
      description: "Developed a working prototype using managed AI teams",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      title: "Structured Workflow",
      description: "Created systematic approach for managing multiple LLMs",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "3-Minute Pitch",
      description: "Delivered executive-level presentation of our solution",
      icon: <Trophy className="w-5 h-5" />
    }
  ];

  const skills = [
    "AI Project Management",
    "LLM Coordination",
    "Prompt Engineering",
    "Team Collaboration",
    "Innovation Strategy",
    "Technical Presentations"
  ];

  return (
    <section id="ai-workshop" className="py-20 bg-hero-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI Workshop & <span className="bg-hero-gradient bg-clip-text text-transparent">Hackathon</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Managing Teams of Large Language Models for Innovation
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
                    I participated in a full-day AI workshop and hackathon led by <strong>{workshopDetails.facilitator}</strong>, 
                    focused on <em>{workshopDetails.focus}</em>. Working alongside my teammate <strong>{workshopDetails.teammate}</strong>, 
                    we explored cutting-edge approaches to managing multiple AI systems collaboratively.
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
                <strong>Certificate of Completion</strong> - Recognized for exceptional skills in AI project management, 
                collaborative innovation, and technical leadership in managing teams of Large Language Models. 
                This achievement highlights my ability to coordinate complex AI workflows and deliver impactful solutions 
                in fast-paced, collaborative environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIWorkshop;