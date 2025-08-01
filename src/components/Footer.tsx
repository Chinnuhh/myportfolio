import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-glow to-primary-glow bg-clip-text text-transparent">
                Looking for a Digital Marketer Who Gets Both Design and Growth?
              </span>
            </h3>
            <p className="text-background/80 max-w-2xl mx-auto mb-6">
              I merge creativity with data to craft user-first experiences that engage, convert, and make brands unforgettable — with people at the center and strategy at the core.
            </p>
            <p className="text-background/80 max-w-2xl mx-auto mb-6">
              Open to opportunities where creativity, growth, and purpose intersect.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('#', '_blank')}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              View Resume
            </Button>
          </div>
          
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60">
              © 2024 Digital Marketing Portfolio. Designed with passion for growth and innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;