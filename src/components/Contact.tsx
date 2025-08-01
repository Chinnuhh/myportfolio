import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with the pre-filled message.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to discuss opportunities and collaborations? Let's connect!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <Card className="shadow-card border-border/50 text-center cursor-pointer hover:shadow-elegant transition-all duration-300" onClick={() => window.location.href = 'mailto:connectwithsravani@gmail.com'}>
              <CardContent className="pt-6 px-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📧</span>
                </div>
                <p className="font-medium text-foreground mb-2">Email</p>
                <p className="text-muted-foreground text-sm break-words">connectwithsravani@gmail.com</p>
              </CardContent>
            </Card>
            
            {/* Phone */}
            <Card className="shadow-card border-border/50 text-center cursor-pointer hover:shadow-elegant transition-all duration-300" onClick={() => window.location.href = 'tel:+919888596888'}>
              <CardContent className="pt-6 px-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <p className="font-medium text-foreground mb-2">Phone</p>
                <p className="text-muted-foreground">+91 98885 96888</p>
              </CardContent>
            </Card>
            
            {/* Website */}
            <Card className="shadow-card border-border/50 text-center cursor-pointer hover:shadow-elegant transition-all duration-300" onClick={() => window.open('https://pixelique.com', '_blank')}>
              <CardContent className="pt-6 px-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌐</span>
                </div>
                <p className="font-medium text-foreground mb-2">Website</p>
                <p className="text-muted-foreground">pixelique.com</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://www.linkedin.com/in/sravanibadana/', '_blank')}
              >
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('#', '_blank')}
              >
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;