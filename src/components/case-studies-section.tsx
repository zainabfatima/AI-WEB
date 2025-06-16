import { Wrench, Scale } from "lucide-react";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      icon: Wrench,
      category: "LOGISTICS",
      categoryColor: "text-accent",
      categoryBg: "bg-accent/20",
      title: "Predictive Maintenance Platform",
      description:
        "Reduced unplanned downtime by 35% through real-time equipment failure prediction using time-series AI models.",
      metric: "35% Reduction",
      metricLabel: "in unplanned downtime",
      metricColor: "text-accent",
      gradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: Scale,
      category: "LEGAL TECH",
      categoryColor: "text-highlight",
      categoryBg: "bg-highlight/20",
      title: "Custom GPT-Based Assistant",
      description:
        "Accelerated contract review workflows by 60% using a fine-tuned LLM and document processing pipeline.",
      metric: "60% Faster",
      metricLabel: "contract review process",
      metricColor: "text-highlight",
      gradient: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-6">Case Studies</h2>
          <p className="text-xl text-gray-600">
            Real-world impact across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${study.gradient} p-8 rounded-2xl border border-secondary animate-slide-up hover:shadow-lg transition-shadow`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`${study.categoryBg} p-2 rounded-lg mr-3`}>
                  <study.icon className={study.categoryColor} size={20} />
                </div>
                <span
                  className={`text-sm font-medium ${study.categoryColor}`}
                >
                  {study.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {study.title}
              </h3>
              <p className="text-gray-600 mb-4">{study.description}</p>
              <div className={`text-2xl font-bold ${study.metricColor}`}>
                {study.metric}
              </div>
              <div className="text-sm text-gray-500">{study.metricLabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
