import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      age: "28",
      location: "New York",
      rating: 5,
      text: "HERHEALTH AI helped me understand patterns I never noticed before. The early detection gave me the confidence to seek proper medical care when I needed it most.",
      avatar: "SJ"
    },
    {
      name: "Priya Sharma", 
      age: "32",
      location: "Mumbai",
      rating: 5,
      text: "Finally, a platform that doesn't make me feel embarrassed about discussing my period. The personalized insights have been life-changing for managing my PCOS.",
      avatar: "PS"
    },
    {
      name: "Maria Rodriguez",
      age: "25",
      location: "Mexico City", 
      rating: 5,
      text: "The AI analysis caught something my regular doctor missed. I'm so grateful for this technology and the supportive community of women using it.",
      avatar: "MR"
    }
  ];

  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Community <span className="text-primary">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of women who've taken control of their health journey with HERHEALTH AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card shadow-card hover:shadow-soft transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow">
                <Quote size={20} className="text-primary-foreground" />
              </div>

              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Age {testimonial.age} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">10,000+</div>
            <div className="text-muted-foreground">Women Empowered</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-accent">95%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-secondary">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">4.8★</div>
            <div className="text-muted-foreground">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;