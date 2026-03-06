import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-20">

          {/* Logo & About */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold text-background">
              Growth<span className="text-primary">AI</span>
            </Link>

            <p className="font-body text-xs sm:text-sm text-background/40 mt-5 leading-[1.8] font-light">
              We help startups and small businesses grow with powerful web
              applications and AI marketing automation solutions.
            </p>
          </div>


          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs sm:text-sm  uppercase tracking-[0.2em] text-background/60 mb-6 font-semibold">
              Navigation
            </h4>

            <div className="space-y-4">
              {["Home", "About", "Services", "Testimonials", "Contact"].map((item) => (
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


          {/* Services */}
          <div>
            <h4 className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] text-background/60 mb-6 font-semibold">
              Services
            </h4>

            <div className="space-y-4">
              {[
                "Web Application Development",
                "AI Marketing Automation",
                "Startup Growth Solutions",
                "Business Process Automation",
              ].map((item) => (
                <p key={item} className="font-body text-sm text-background/40 font-light">
                  {item}
                </p>
              ))}
            </div>
          </div>


          {/* Contact */}
          <div>
            <h4 className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] text-background/60 mb-6 font-semibold">
              Contact
            </h4>

            <div className="space-y-4 font-body text-sm text-background/40 font-light">
              <p>hello@growthai.com</p>
              <p>+92 336 8531533</p>
              <p>Lahore, Pakistan</p>
            </div>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="font-body text-xs sm:text-sm text-background/30 tracking-wide">
            © {new Date().getFullYear()} GrowthAI. All rights reserved.
          </p>

          <div className="flex gap-8">
            <span className="font-body text-xs sm:text-sm text-background/30 tracking-wide">
              Privacy Policy
            </span>

            <span className="font-body text-xs sm:text-sm text-background/30 tracking-wide">
              Terms of Service
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;