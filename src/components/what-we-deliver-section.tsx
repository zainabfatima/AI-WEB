export default function WhatWeDeliverSection() {
  const deliverables = [
    {
      emoji: "⚙️",
      title: "End-to-End AI Model Development",
      description:
        "We design, train, and deploy AI models purpose-built for your unique use cases with full-lifecycle optimization.",
      features: [
        "Problem framing and use case design",
        "Data preparation & feature engineering",
        "Model training, validation, and tuning",
        "Deployment pipelines for real-time inference",
        "Governance and compliance practices",
      ],
      gradient: "from-blue-50 to-indigo-100",
    },
    {
      emoji: "🧠",
      title: "LLM Applications",
      description:
        "Unlock advanced language models to automate complex tasks, generate content, or create intelligent assistants.",
      features: [
        "Custom GPT/LLM fine-tuning",
        "AI copilots for internal tools",
        "Retrieval-Augmented Generation (RAG)",
        "Document processing and extraction",
        "Multilingual understanding",
      ],
      gradient: "from-purple-50 to-pink-100",
    },
    {
      emoji: "👁️‍🗨️",
      title: "Computer Vision & NLP",
      description:
        "Combining vision and language models to transform unstructured data into actionable intelligence.",
      features: [
        "Object detection & image classification",
        "Facial recognition & scene understanding",
        "Named entity recognition & sentiment analysis",
        "Audio transcription & speech-to-text",
        "Multi-modal applications",
      ],
      gradient: "from-green-50 to-emerald-100",
    },
    {
      emoji: "📈",
      title: "Predictive Analytics & Forecasting",
      description:
        "Intelligent systems that anticipate trends and provide decision-makers with forward-looking insights.",
      features: [
        "Time-series forecasting",
        "Customer behavior prediction",
        "Risk scoring & fraud detection",
        "Recommendation engines",
        "Personalization models",
      ],
      gradient: "from-cyan-50 to-blue-100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-6">
            What We Deliver
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive AI solutions across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl border border-secondary animate-slide-up hover:shadow-lg transition-shadow`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                {item.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
