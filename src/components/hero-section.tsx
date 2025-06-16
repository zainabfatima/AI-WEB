import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Accelerate Your Business with{" "}
              <span className="text-accent">Intelligent AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Custom AI application development and strategic consulting to drive
              innovation, optimize processes, and transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="border border-white hover:border-transparent bg-highlight hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105" 
                size="lg"
              >
                <Calendar className="mr-2" size={20} />
                Book a Free Consultation
              </Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
                size="lg"
              >
                <Play className="mr-2" size={20} />
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:block animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="AI and machine learning visualization with neural networks"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
