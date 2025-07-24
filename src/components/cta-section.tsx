import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle} from '@/components/ui/dialog';
import { Calendar } from "lucide-react";

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
            <BookConsultationForm />
            {/* <Button
              variant="outline"
              className="border-2 border-white text-primary hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors"
           >
              <Download className="mr-2" size={20} />
              AI Strategy Guide
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}



const BookConsultationForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStatus("");
      setFormData({ name: "", email: "", message: "" });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {

      console.log("Form Data Submitted:", formData);
      // await formSubmission(formData);
      setStatus("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Failed to send.");
    }
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        <Calendar className="mr-2" size={20} />
        Book Free Consultation
      </Button>

      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
          <DialogContent className='bg-white'>
            <DialogHeader className="border-b border-gray-300 pb-4">
              <DialogTitle className="text-lg font-semibold">Book a Free Consultation</DialogTitle>
            </DialogHeader>
            {status && (
              <Alert variant={status.includes("Failed") ? "error" : "success"} className="px-2 py-4">
                <p className="text-sm">{status}</p>
              </Alert>
            )}
            <h4 className="text-lg font-bold">Contact us on:</h4>
            <p className="text-black mb-1">📧 zalasystems@gmail.com</p>
            <p className="text-black mb-1">📞 +1 (555) 123-4567 | +1 (703) 568-3666</p>
            <p className="text-black mb-1">📍 Remote & Global</p>
            <form onSubmit={handleSubmit} className="hidden py-4 bg-white rounded max-w-md w-full space-y-4">
              <input
                name="name"
                placeholder="Enter Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full text-sm p-2 border rounded-lg"
              />
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full text-sm p-2 border rounded-lg"
              />
            <textarea name="message" placeholder="Enter Your Message" rows={5} required value={formData.message} onChange={handleChange} className="w-full text-sm p-2 border rounded-lg" />
            <div className="flex gap-2 justify-end">
              <button type="button" className="text-gray-500 hover:bg-gray-100 hover:text-black rounded-lg px-6 py-2 transition-colors" onClick={() => setIsOpen(false)}>Cancel</button>
              <button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
                >Send</button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    )}
  </>);
}

