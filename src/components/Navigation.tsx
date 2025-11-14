import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Solutions", href: "#solutions" },
    { label: "Technology", href: "#technology" },
    { label: "Awards", href: "#awards" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-200 to-teal-300 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-white">FW</span>
            </div>
            <span className="text-2xl font-bold text-gradient">FlickerWings</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
