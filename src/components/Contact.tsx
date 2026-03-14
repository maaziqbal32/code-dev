import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "923096140401";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20am%20interested%20in%20AI%20Marketing%20Automation%20or%20Web%20Application%20Development.`;


const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message Sent",
      description:
        "Thank you for contacting us. Our team will respond shortly.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div ref={ref} className="grid md:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >

            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-5">
              Contact Us
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Let's Grow Your
              <br />
              <span className="italic font-normal">
                Business with AI
              </span>
            </h2>

            <p className="text-muted-foreground font-poppins leading-[1.8] mb-12 font-light">
              Looking to build a powerful web application or automate your
              marketing with AI? Our team helps startups and small businesses
              grow faster through smart technology solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-7">

              <div className="flex items-center font-poppins gap-5">
                <Mail className="text-primary" size={18} strokeWidth={1.5} />
                <span className="text-sm text-foreground font-light">
                  devcodes.system@gmail.com
                </span>
              </div>

              <div className="flex items-center font-poppins gap-5">
                <Phone className="text-primary" size={18} strokeWidth={1.5} />
                <span className="text-sm text-foreground font-light">
                  +92 336 8531533
                </span>
              </div>

              <div className="flex items-center font-poppins gap-5">
                <MapPin className="text-primary" size={18} strokeWidth={1.5} />
                <span className="text-sm text-foreground font-light">
                  Lahore, Pakistan
                </span>
              </div>

            </div>

            {/* WhatsApp Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: "#25D366" }}
            >

              <img className="h-8 w-8" src="whatsapp.png" alt="whatsapp" />
              Chat on WhatsApp
            </a>

          </motion.div>


          {/* RIGHT SIDE (FORM) */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {[
              { type: "text", placeholder: "Your Name", key: "name", required: true },
              { type: "email", placeholder: "Email Address", key: "email", required: true },
              { type: "tel", placeholder: "Phone Number", key: "phone", required: false },
            ].map((field) => (
              <input
                key={field.key}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.key as keyof typeof formData]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.key]: e.target.value })
                }
                className="w-full bg-white border border-border px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground/90 focus:outline-none focus:border-primary transition-colors duration-300 rounded-sm font-light"
              />
            ))}

            <textarea
              placeholder="Tell us about your project or business goals"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white border border-border px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground/90 focus:outline-none focus:border-primary transition-colors duration-300 resize-none rounded-sm font-light"
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(26,43,66,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full font-poppins px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 rounded-sm text-white"
              style={{ backgroundColor: "#1A2B42" }}
            >
              Send Message
            </motion.button>

          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;