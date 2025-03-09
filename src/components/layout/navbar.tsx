import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = ["about", "services", "case-studies", "testimonials", "contact"];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStateRefresh = useCallback((id: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }, []);

  return (
    <nav className={cn("fixed top-0 z-50 w-full transition-all duration-300 bg-[#F0F1F1] backdrop-blur-md shadow-sm")}>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="29.5 29.5 141 141"
              viewBox="29.5 29.5 141 141"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
              data-type="shape"
              role="img"
              aria-label="Homepage"
            >
              <g>
                <path d="M104 33.5v26.6a4 4 0 0 1-8 0V33.5a4 4 0 0 1 8 0zm-4 102.4a4 4 0 0 0-4 4v26.6a4 4 0 0 0 8 0v-26.6a4 4 0 0 0-4-4zM55.812 50.156a4 4 0 1 0-5.656 5.656l18.819 18.819c.78.781 1.805 1.172 2.828 1.172s2.048-.391 2.828-1.172a4 4 0 0 0 0-5.656L55.812 50.156zm75.212 75.212a4 4 0 1 0-5.656 5.656l18.819 18.819c.78.781 1.805 1.172 2.828 1.172s2.048-.391 2.828-1.172a4 4 0 0 0 0-5.656l-18.819-18.819zM64.1 100a4 4 0 0 0-4-4H33.5a4 4 0 0 0 0 8h26.6a4 4 0 0 0 4-4zm102.4-4h-26.6a4 4 0 0 0 0 8h26.6a4 4 0 0 0 0-8zm-97.524 29.368-18.819 18.819a4 4 0 1 0 5.656 5.656l18.819-18.819a4 4 0 1 0-5.656-5.656zm59.22-49.564a3.987 3.987 0 0 0 2.828-1.172l18.819-18.819a4 4 0 1 0-5.656-5.656l-18.819 18.819a4 4 0 0 0 2.828 6.828z"></path>
              </g>
            </svg>
            <h6 className="text-xl font cursor-pointer" onClick={() => handleStateRefresh("/")}>
              RL Digital
            </h6>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((item) => (
              <h6
                key={item}
                className="text-foreground/80 hover:text-foreground cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => handleStateRefresh(item)}
                tabIndex={0}
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
              aria-label="Toggle menu"
              role="button"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              {NAV_LINKS.map((item) => (
                <motion.h6
                  key={item}
                  onClick={() => handleStateRefresh(item)}
                  className="text-foreground/80 text-4xl hover:text-foreground cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  tabIndex={0}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.h6>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
