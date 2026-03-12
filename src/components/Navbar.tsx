import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--border)/0.5)]"
          : "bg-gray-600"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">

          {/* LOGO SECTION */}
          <Link to="/" className="flex flex-col items-center gap-1 group">
            <img
              src="/cd-final.png"
              alt="devcode logo"
              className="h-16 sm:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-poppins">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-foreground hover:text-primary hover:border-b hover:border-primary"
                    : "text-white hover:text-primary hover:border-b hover:border-primary "
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/#contact"
              onClick={() => handleNavClick("/#contact")}
              className={`ml-4 px-6 py-3.5 text-xs font-semibold tracking-[0.1em] rounded-sm transition-all duration-300 ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md"
                  : "bg-white text-black hover:bg-white/90 hover:shadow-md hover:text-white hover:bg-black"
              }`}
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-black"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-white hover:text-primary transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/#contact"
                onClick={() => handleNavClick("/#contact")}
                className="mt-3 px-5 py-3.5 text-xs font-semibold rounded-sm text-center bg-white text-black hover:bg-white/90 transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;