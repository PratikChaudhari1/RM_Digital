import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { MeteorsWrapper } from "../ui/Metors";

export function Footer() {
  const handleStateRefresh = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MeteorsWrapper id="footer">
      <footer className="pt-16 pb-8 w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">RM__DIGITAL</h3>
              <p className="text-muted-foreground">
                Digital Strategies for the AI Age.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleStateRefresh("about")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("services")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("case-studies")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("about")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("contact")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleStateRefresh("services")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    SEO - Get Found
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("services")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Email Marketing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("services")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Website Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("services")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Logo Design
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    29, Modi St, Borabazar Mumbai, Maharashtra 400001
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">8850104037</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">7710860727</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">xyz@outlook.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} RM__DIGITAL. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </MeteorsWrapper>
  );
}
