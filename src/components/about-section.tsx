import { Settings, Building, Rocket } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Settings,
      title: "Deep Technical Expertise",
      description:
        "Comprehensive knowledge across machine learning, NLP, computer vision & generative AI",
      gradient: "from-blue-50 to-indigo-50",
      color: "text-accent",
    },
    {
      icon: Building,
      title: "Industry Experience",
      description:
        "Proven success spanning healthcare, finance, logistics, retail, and SaaS",
      gradient: "from-purple-50 to-pink-50",
      color: "text-highlight",
    },
    {
      icon: Rocket,
      title: "Agile Development",
      description:
        "Scalable development with full-stack integration and rapid deployment",
      gradient: "from-cyan-50 to-blue-50",
      color: "text-accent",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-6">About Us</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a team of AI experts, developers, and strategists dedicated
            to helping businesses harness the transformative power of artificial
            intelligence. Whether you're just starting your AI journey or
            seeking to scale existing systems, we bring clarity, execution, and
            innovation to every step.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} p-8 rounded-2xl border border-secondary animate-slide-up hover:shadow-lg transition-shadow`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`${feature.color} text-4xl mb-4`}>
                <feature.icon size={40} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
