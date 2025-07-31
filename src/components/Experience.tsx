import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "Pixelique Designs",
      position: "Founder & Digital Marketer",
      date: "July 2023 - Present",
      location: "Remote",
      website: "https://pixeliquedesign.com/",
      type: "Freelance",
      highlights: [
        "Helped 20+ early-stage businesses build complete digital presence from logo and brand identity to web design, UGC, social content, and e-commerce marketing",
        "Designed conversion-focused websites using WordPress, Hostinger, and Wix with SEO, analytics, and email automations",
        "Managed Google Ads campaigns, executed Instagram marketing, and designed UGC-led influencer strategies that reached millions",
        "Created monthly content calendars, blog posts, packaging, mockups, and email flows for product- and service-based brands",
        "Built custom Notion workspaces for content pipelines, campaign tracking, and marketing automation",
        "Developed storytelling-first marketing strategies for social media, email newsletters, and landing pages—driving engagement, brand recall, and conversions"
      ]
    },
    {
      company: "DXC Technology",
      position: "Associate Professional Software Engineer",
      date: "March 2023 - November 2024",
      location: "Bangalore",
      type: "Full-time",
      highlights: [
        "Managed infrastructure operations across 8 global data centers, leading the build, configuration, and decommissioning of over 800 physical and virtual servers (Windows + VMware)",
        "Partnered with 16 cross-functional teams to create and maintain standardized documentation for virtual server builds, improving deployment consistency, compliance, and efficiency across regions",
        "Developed comprehensive VM templates detailing OS configuration, networking, resource allocation, security protocols, and backup/recovery workflows—now part of internal best practices",
        "Administered a hybrid infrastructure of 10,000+ physical and virtual servers, using VMware vCenter and ESXi to ensure performance, stability, and uptime across critical systems",
        "Orchestrated the migration and management of 7,000+ VMs within high-availability clusters, minimizing downtime during patching, snapshot recovery, and maintenance",
        "Supported both on-prem and cloud-based Windows Server environments, executing firmware/BIOS upgrades, remediation planning, and lifecycle management for optimal efficiency"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {exp.position}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <h3 className="text-xl font-semibold text-primary">
                          {exp.company}
                        </h3>
                        {exp.website && (
                          <a 
                            href={exp.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent/80 font-medium"
                          >
                            Visit Website →
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                      <p className="text-muted-foreground font-medium">{exp.date}</p>
                      <p className="text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;