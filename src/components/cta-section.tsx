import { Button } from "@/components/ui/button";
import { Calendar, Download } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 gradient-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Build Smarter Together
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ready to transform your business with AI? Start with a free
            consultation to explore the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <Calendar className="mr-2" size={20} />
              Book Free Consultation
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-primary hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors"
           >
              <Download className="mr-2" size={20} />
              Download AI Strategy Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
