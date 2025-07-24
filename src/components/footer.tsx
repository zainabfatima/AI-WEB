import { Brain } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  const services = [
    "AI Strategy",
    "Custom Development",
    "AI Integration",
    "Consulting",
  ];

  const company = ["About Us", "Case Studies", "Blog", "Contact"];

  return (
    <footer className="bg-primary text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Brain className="mr-2 text-accent" size={32} />
              <span className="text-2xl font-bold text-white">AI Solutions</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming businesses through intelligent AI solutions. From
              strategy to execution, we're your trusted AI partner.
            </p>
            <p className="text-gray-400 mb-1">📧 zalasystems@gmail.com</p>
            <p className="text-gray-400 mb-1">📞 +1 (555) 123-4567 | +1 (703) 568-3666</p>
            <p className="text-gray-400 mb-1">📍 Remote & Global</p>
            <div className="flex mt-4 space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
