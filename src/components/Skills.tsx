import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Marketing & Growth",
      icon: "📈",
      skills: [
        "Performance Marketing", "Campaign Strategy", "Retargeting", 
        "Email & SMS Marketing", "Funnel Building", "SEO/SEM", 
        "Social Media Strategy", "Brand Positioning", "CRM", 
        "Analytics & Optimization"
      ]
    },
    {
      title: "Design & Content Creation",
      icon: "🎨",
      skills: [
        "UX/UI", "Brand Identity", "Logo Design", "Packaging", 
        "Landing Pages", "Web Design", "Figma", "Canva", 
        "Adobe XD", "Notion Design", "Visual Storytelling", 
        "Creative Copywriting", "Content Strategy"
      ]
    },
    {
      title: "Platforms & Tools",
      icon: "🛠️",
      skills: [
        "Google Ads", "Meta Ads", "Campaign Manager 360", 
        "Google Analytics", "WordPress", "Wix", "Hostinger", 
        "Shopify", "Trello", "Notion", "Zapier", "Webflow", 
        "ChatGPT", "Durable", "Bolt", "Lovable", "MS Excel"
      ]
    },
    {
      title: "Soft Skills",
      icon: "🧠",
      skills: [
        "Storytelling", "Strategic Thinking", "Growth Mindset", 
        "Visual Communication", "Cross-functional Collaboration", 
        "Problem Solving"
      ]
    }
  ];

  const certifications = [
    {
      title: "Google Digital Marketing & E-commerce Professional Certificate",
      issuer: "Google Digital Academy (via Coursera)",
      date: "Jun 2025",
      description: "8-course program covering SEO, Ads, Analytics, Shopify, Email Marketing & more"
    },
    {
      title: "Campaign Manager 360 Certification Exam",
      issuer: "Google Skillshop",
      date: "Jun 2025 – Jun 2026",
      credentialId: "146825662"
    },
    {
      title: "Fundamentals of Digital Marketing",
      issuer: "Google Digital Academy (Skillshop)",
      date: "Jun 2025"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Skills & Expertise
          </h2>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-3xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg leading-tight text-foreground">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                    <p className="text-muted-foreground mb-3">{cert.date}</p>
                    {cert.description && (
                      <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                    )}
                    {cert.credentialId && (
                      <p className="text-xs text-muted-foreground">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
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

export default Skills;