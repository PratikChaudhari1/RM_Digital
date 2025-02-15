import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStateRefresh = (id: any) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        "bg-[#F0F1F1] backdrop-blur-md shadow-sm"
      )}
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h6
              className="text-xl font cursor-pointer"
              onClick={() => handleStateRefresh("/")}
            >
              R—M Digital
            </h6>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              "about",
              "services",
              "case-studies",
              "testimonials",
              "contact",
            ].map((item) => (
              <h6
                key={item}
                className="text-foreground/80 hover:text-foreground cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => handleStateRefresh(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </h6>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 h-screen left-0 w-full bg-[#F0F1F1] shadow-lg"
          >
            <div className="flex flex-col text-center space-y-4 py-6">
              {[
                "about",
                "services",
                "case-studies",
                "testimonials",
                "contact",
              ].map((item) => (
                <>
                  <motion.h6
                    key={item}
                    onClick={() => handleStateRefresh(item)}
                    className="text-foreground/80 text-4xl hover:text-foreground cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.h6>
                  <hr className="border-black" />
                </>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
