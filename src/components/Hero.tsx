import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="block text-white">
              Sravani Badana
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-6 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Proven ability to build conversion-driven marketing strategies, design user-first web experiences, 
            and simplify complex ideas through storytelling and content.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary font-semibold px-8 py-4 text-lg hover:bg-white/90"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;