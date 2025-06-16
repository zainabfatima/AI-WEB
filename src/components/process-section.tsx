export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "AI Discovery Session",
      description:
        "Uncover high-impact opportunities to apply AI within your organization. We assess business processes, evaluate technical feasibility, estimate ROI, and prioritize use cases for maximum strategic value.",
      color: "bg-accent",
    },
    {
      number: 2,
      title: "AI Scoping Programme",
      description:
        "Develop a comprehensive AI strategy tailored to your business goals. We identify potential risks, ensure regulatory compliance, and deliver a detailed roadmap to guide your AI transformation.",
      color: "bg-accent",
    },
    {
      number: 3,
      title: "Proof of Concept (PoC)",
      description:
        "Quickly validate the viability of an AI solution with a lean, functional prototype. This phase demonstrates technical feasibility and business value before committing to full-scale development.",
      color: "bg-accent",
    },
  ];

  return (
    <section id="process" className="py-20 gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">From Strategy to Execution</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our team of AI experts will guide you through every stage—from
            identifying opportunities to full-scale implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                <div className="flex items-center mb-6">
                  <div
                    className={`${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4`}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-200">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
