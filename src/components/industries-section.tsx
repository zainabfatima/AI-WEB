import { Heart, TrendingUp, ShoppingCart, Truck, Laptop } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Predictive diagnostics, medical image analysis, patient triage bots",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      title: "Finance",
      description:
        "Fraud detection, risk modeling, customer insight automation",
      color: "text-accent",
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-Commerce",
      description:
        "Recommendation engines, inventory forecasting, dynamic pricing",
      color: "text-accent",
    },
    {
      icon: Truck,
      title: "Logistics",
      description:
        "Route optimization, demand prediction, warehouse automation",
      color: "text-accent",
    },
    {
      icon: Laptop,
      title: "SaaS & Tech",
      description:
        "LLM-powered features, intelligent automation, user behavior modeling",
      color: "text-accent",
    },
  ];

  return (
    <section id="industries" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600">
            Specialized AI solutions across key industry verticals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-secondary hover:shadow-xl transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${industry.color} text-3xl mb-4`}>
                <industry.icon size={32} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
