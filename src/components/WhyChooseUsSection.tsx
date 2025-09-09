import { Shield, Clock, Users, Award, Heart, Lightbulb } from "lucide-react";
import whyChooseUsImage from "@/assets/why-choose-us.jpg";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Early Detection",
      description: "Identify potential health concerns before they become serious issues through advanced AI analysis"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Receive tailored insights and recommendations based on your unique health patterns and needs"
    },
    {
      icon: Users,
      title: "Breaking Taboos",
      description: "Join a supportive community that normalizes conversations about women's health and menstrual wellness"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your health data is encrypted, secure, and completely private with HIPAA-compliant protection"
    },
    {
      icon: Award,
      title: "Medical Accuracy",
      description: "Our AI is trained on extensive medical data and validated by healthcare professionals"
    },
    {
      icon: Lightbulb,
      title: "Educational Insights",
      description: "Learn about your body with easy-to-understand explanations and actionable health guidance"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose <span className="text-primary">HERHEALTH AI</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're more than just a health app - we're your partner in understanding and empowering your health journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-glow">
              <img
                src={whyChooseUsImage}
                alt="Empowering women's health through trust and innovation"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse delay-700"></div>
          </div>

          {/* Benefits Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="p-6 rounded-2xl bg-card shadow-card hover:shadow-soft transition-all duration-300 group cursor-pointer"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center group-hover:bg-primary-glow transition-colors duration-300">
                        <Icon size={24} className="text-primary" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;