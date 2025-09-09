import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-soft opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Take Control of 
              <br />
              <span className="text-primary-glow">Your Health Journey?</span>
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Join thousands of women who've already discovered the power of AI-driven health insights. 
              Your journey to better health starts with understanding your body.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-10 py-6 bg-white text-primary hover:bg-white/95 shadow-glow hover:shadow-soft transition-all duration-300 rounded-2xl"
            >
              <ArrowRight className="mr-2" size={20} />
              Start Your Analysis
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-6 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-2xl"
            >
              <MessageCircle className="mr-2" size={20} />
              Talk to Our Team
            </Button>
          </div>

          {/* Contact options */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>hello@herhealthai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={18} />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="pt-8">
            <p className="text-white/60 text-sm">
              🔒 HIPAA Compliant • 🛡️ Bank-Level Security • 💖 Trusted by 10,000+ Women
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;