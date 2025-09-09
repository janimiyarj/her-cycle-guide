const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              About <span className="text-primary">HERHEALTH AI</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            We're revolutionizing women's healthcare by breaking the silence around menstrual health. 
            Too many symptoms of PCOD and PCOS go unnoticed due to lack of knowledge and social hesitation.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-4 p-6 rounded-2xl bg-card shadow-card hover:shadow-soft transition-all duration-300">
              <div className="w-16 h-16 bg-primary-soft rounded-2xl flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                Empower women with early awareness and actionable knowledge about their menstrual health through AI innovation.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-card shadow-card hover:shadow-soft transition-all duration-300">
              <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-accent rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every woman has access to personalized health insights and feels empowered to prioritize her wellbeing.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-card shadow-card hover:shadow-soft transition-all duration-300">
              <div className="w-16 h-16 bg-secondary-soft rounded-2xl flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-secondary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Our Impact</h3>
              <p className="text-muted-foreground">
                Breaking taboos, providing early detection, and creating a supportive community for women's health advocacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;