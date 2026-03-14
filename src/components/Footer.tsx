import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const handleNavClick = (href: string) => {
    // Handle home navigation
    if (href === "/" || href === "/#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Extract section ID from href
    const id = href.replace("/#", "");

    // If on homepage, scroll directly
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If not on homepage, navigate to homepage first (router-dom Link handles this)
  };

  return (
    <footer className="bg-foreground py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-10">

          {/* Logo & About */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold text-background">
              Code<span className="text-primary">Dev</span>
            </Link>

            <p className="font-body text-xs sm:text-base text-background/90 mt-5 leading-[1.8] font-light">
              We help startups and small businesses grow with powerful web
              applications and AI marketing automation solutions.
            </p>
          </div>


          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs sm:text-base  uppercase tracking-[0.2em] text-background mb-6 font-semibold">
              Navigation
            </h4>

            <div className="space-y-2">
              {["Home", "About", "Services", "Testimonials", "Contact"].map((item) => {
                const href = item === "Home" ? "/" : `/#${item.toLowerCase()}`;
                return (
                  <Link
                    key={item}
                    to={href}
                    onClick={() => handleNavClick(href)}
                    className="block font-body text-base text-background/70 hover:text-primary transition-colors duration-300 font-light"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>


          {/* Services */}
          <div>
            <h4 className="font-body text-xs sm:text-base uppercase tracking-[0.2em] text-background mb-6 font-semibold">
              Services
            </h4>

            <div className="space-y-4">
              {[
                "Web Application Development",
                "AI Marketing Automation",
                "Startup Growth Solutions",
                "Business Process Automation",
              ].map((item) => (
                <p key={item} className="font-body text-base text-background/70 font-light">
                  {item}
                </p>
              ))}
            </div>
          </div>


          {/* Contact */}
          <div>
            <h4 className="font-body text-xs sm:text-base uppercase tracking-[0.2em] text-background mb-6 font-semibold">
              Contact
            </h4>

            <div className="space-y-4 font-body text-base text-background/70 font-light">
              <p>devcodes.system@gmail.com</p>
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