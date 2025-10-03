import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

// Utility function to merge classnames
const cn = (...classes) => classes.filter(Boolean).join(' ');

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-lg"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between px-4">
          <a
            className="text-xl font-bold text-primary flex items-center relative z-[60]"
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
          >
            <span className="relative z-10">
              <span className="text-foreground">Diya</span> Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={cn(
                  "transition-all duration-300 font-medium",
                  item.name === "Contact"
                    ? "px-5 py-2 ml-2 rounded-full border border-primary text-white hover:bg-primary hover:scale-110"
                    : "text-foreground/80 hover:text-primary transition-colors"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground relative z-[60] hover:bg-foreground/5 rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-500 ease-in-out",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-background z-[45] md:hidden",
          "shadow-2xl transition-all duration-500 ease-in-out",
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        )}
      >
        <div className="flex flex-col pt-24 px-8 space-y-1">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={cn(
                "text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 py-4 px-4 rounded-lg text-lg font-medium border-b border-foreground/5 last:border-0",
                "transform transition-all duration-500 ease-in-out",
                isMenuOpen 
                  ? "translate-x-0 opacity-100" 
                  : "translate-x-8 opacity-0"
              )}
              style={{
                transitionDelay: isMenuOpen ? `${key * 80 + 100}ms` : `${(navItems.length - key - 1) * 50}ms`
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}