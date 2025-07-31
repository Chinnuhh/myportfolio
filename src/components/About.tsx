const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            About Me
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-xl mb-6">
              I'm a versatile digital marketing strategist and brand designer with a unique background that bridges 
              technical infrastructure management and creative marketing excellence.
            </p>
            <p className="text-lg mb-6">
              My journey began in enterprise software engineering at DXC Technology, where I managed infrastructure 
              operations across 8 global data centers and administered over 10,000 servers. This technical foundation 
              gave me a deep understanding of systems, processes, and scalable solutions.
            </p>
            <p className="text-lg mb-6">
              Driven by passion for creativity and human-centered design, I transitioned into digital marketing and 
              founded <strong>Pixelique Designs</strong> – a creative web studio where I've helped 20+ early-stage 
              businesses build complete digital presences.
            </p>
            <p className="text-lg">
              I specialize in integrating brand psychology, automation tools, and design thinking into scalable 
              growth systems. My approach is always <strong>human-first</strong>, focusing on storytelling and 
              authentic connections that drive real business results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;