import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Education
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:opacity-90"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className={isScrolled ? 'text-foreground' : 'text-white'}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;