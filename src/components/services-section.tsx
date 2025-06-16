import { Lightbulb, Code, Check } from "lucide-react";

export default function ServicesSection() {
  const consultingFeatures = [
    "AI Readiness Assessment",
    "Use Case Identification & Prioritization",
    "Cost-Benefit Analysis",
    "Technology Stack Planning",
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* AI Strategy & Consulting */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="bg-accent/10 p-3 rounded-xl mr-4">
                <Lightbulb className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                AI Strategy & Consulting
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              We assess your business challenges, identify high-impact AI
              opportunities, and develop a practical roadmap to success.
            </p>
            <ul className="space-y-3 text-gray-600">
              {consultingFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-accent mr-3" size={16} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Custom AI Development */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="bg-highlight/10 p-3 rounded-xl mr-4">
                <Code className="text-highlight" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                Custom AI Application Development
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Tailored, scalable AI solutions built for your business goals. We
              specialize in developing end-to-end AI applications that deliver
              measurable outcomes.
            </p>
            <p className="text-gray-600">
              Our custom solutions integrate seamlessly with your
              infrastructure, comply with industry standards, and adapt to
              evolving business environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
