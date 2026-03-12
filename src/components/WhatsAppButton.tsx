import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "923368531533";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20AMZY%20Studio%2C%20I%27m%20interested%20in%20discussing%20a%20project.`;

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl"
      style={{ backgroundColor: "#25D366" }}
    >
      <img className="h-12 w-12" src="/whatsapp.png" alt="WhatsApp" />
    </motion.a>
  );
};

export default WhatsAppButton;
