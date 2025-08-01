import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const achievements = [
    "Founded Pixelique Designs, a creative web studio, and delivered 12+ paid projects in 8 months, covering branding, web design, and marketing systems",
    "Drove 3M+ organic views through UGC-led Instagram campaigns, reels, and storytelling-first content strategies",
    "Spearheaded cross-team collaboration at DXC Technology, creating documentation systems that improved VM deployment efficiency across 8 global data centers",
    "Recognized for seamless transition from tech to digital marketing, self-learning design, automation, and strategy to build a personal brand and client base",
    "Helped early-stage Indian brands improve conversion rates and build cohesive digital presence with SEO-backed websites and content workflows"
  ];

  const campusRoles = [
    { role: "Class Representative", description: "Served consistently from Grade 3 through graduation, demonstrating long-term leadership and peer trust", icon: "🎓" },
    { role: "President – Women's Association", description: "Led gender equality initiatives, organized awareness campaigns, and campus-wide workshops", icon: "👩‍💼" },
    { role: "Anti-Ragging Squad", description: "Played an active role in maintaining a safe and inclusive environment on campus", icon: "🚫" },
    { role: "Selected for AIESEC", description: "Represented college in this prestigious global youth leadership platform focused on cross-cultural exchange and impact", icon: "🌍" },
    { role: "University Innovation Fellow (UIF)", description: "Nominated for Stanford d.school–led program fostering innovation and entrepreneurial mindset", icon: "🚀" },
    { role: "Campus Ambassador", description: "Represented the institution at inter-college events, fostering partnerships and student engagement", icon: "📣" },
    { role: "Event Organizer", description: "Proactively organized college fests, branding campaigns, tech events, and student-led initiatives", icon: "🎤" }
  ];

  const interests = [
    "Visual Storytelling & Digital Aesthetics",
    "Brand Psychology & Consumer Behavior", 
    "Content Creation & UGC",
    "AI-Powered Creativity",
    "Drawing & Sketching",
    "Social Work & Volunteering",
    "Wellness, Skincare & Personal Growth"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Education & Achievements
          </h2>
          
          {/* Education */}
          <Card className="shadow-card mb-12 border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Bachelor of Technology (B.Tech)
              </CardTitle>
              <p className="text-lg text-primary font-semibold">
                Adithya Institute of Technology and Management
              </p>
              <p className="text-muted-foreground">2019 - 2022</p>
            </CardHeader>
          </Card>


          {/* Campus Roles */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-foreground">Key Campus Roles & Activities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {campusRoles.map((role, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <span className="text-2xl">{role.icon}</span>
                      {role.role}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Highlights & Impact */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-foreground">Highlights & Impact</h3>
            <Card className="shadow-card border-border/50">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground">Interests & Passions</h3>
            <Card className="shadow-card border-border/50">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-accent/10 text-accent hover:bg-accent/20 transition-colors text-sm py-2 px-4"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;