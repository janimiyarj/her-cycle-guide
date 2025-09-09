import { Camera, Brain, Heart, Smartphone } from "lucide-react";
import howItWorksImage from "@/assets/how-it-works.jpg";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Upload Image",
      description: "Safely capture and upload images using our secure, HIPAA-compliant platform",
      color: "primary"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI analyzes color, texture, and patterns to identify potential health indicators",
      color: "accent"
    },
    {
      icon: Heart,
      title: "Personalized Insights",
      description: "Receive detailed, personalized health insights and recommendations based on your analysis",
      color: "secondary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            How <span className="text-primary">It Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our revolutionary AI-powered platform makes understanding your menstrual health simple, 
            private, and empowering. Here's how we help you decode your body.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = {
                primary: "bg-primary-soft text-primary",
                accent: "bg-accent-soft text-accent", 
                secondary: "bg-secondary-soft text-secondary"
              };

              return (
                <div key={index} className="flex items-start gap-6 p-6 rounded-2xl bg-card shadow-card hover:shadow-soft transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${colorClasses[step.color as keyof typeof colorClasses]}`}>
                    <Icon size={32} />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        Step {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Visualization */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-glow">
              <img
                src={howItWorksImage}
                alt="AI-powered health analysis process visualization"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;