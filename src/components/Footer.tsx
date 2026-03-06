import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-20">
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold text-background">
              AMZY<span className="text-primary">.</span>
            </Link>
            <p className="font-body text-xs text-background/40 mt-5 leading-[1.8] font-light">
              Designing tomorrow's spaces today. Premium architecture and design studio.
            </p>
          </div>

          <div>
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-background/60 mb-6 font-semibold">
              Navigation
            </h4>
            <div className="space-y-4">
              {["Projects", "About", "Services", "Process", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/#${item.toLowerCase()}`}
                  className="block font-body text-sm text-background/40 hover:text-primary transition-colors duration-300 font-light"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-background/60 mb-6 font-semibold">
              Services
            </h4>
            <div className="space-y-4">
              {["Architectural Design", "Interior Design", "Construction Management", "Renovation"].map((item) => (
                <p key={item} className="font-body text-sm text-background/40 font-light">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-background/60 mb-6 font-semibold">
              Contact
            </h4>
            <div className="space-y-4 font-body text-sm text-background/40 font-light">
              <p>studio@amzy.com</p>
              <p>+92 (336) 8531533</p>
              <p>42 Design Avenue<br />New York, NY 10013</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] text-background/30 tracking-wide">
            © {new Date().getFullYear()} AMZY Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="font-body text-[10px] text-background/30 tracking-wide">Privacy Policy</span>
            <span className="font-body text-[10px] text-background/30 tracking-wide">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
