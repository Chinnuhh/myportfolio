const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-glow to-primary-glow bg-clip-text text-transparent">
                Let's Create Something Amazing
              </span>
            </h3>
            <p className="text-background/80 max-w-2xl mx-auto">
              Ready to transform your digital presence? I specialize in building conversion-driven 
              marketing strategies and user-first experiences that drive real results.
            </p>
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