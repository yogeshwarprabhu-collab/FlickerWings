import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Contact Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Let's <span className="text-gradient">Collaborate</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Partner with FlickerWings for the next generation of innovation
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">flickerwings@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">+91 70942 01000</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Coimbatore,Tamil Nadu.</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Youtube className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="space-y-4">
              <Input 
                placeholder="Your Name" 
                className="bg-background border-border"
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-background border-border"
              />
              <Input 
                placeholder="Subject" 
                className="bg-background border-border"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={5}
                className="bg-background border-border"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-200 to-teal-300 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-white">FW</span>
              </div>
              <span className="text-xl font-bold text-gradient">FlickerWings</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 FlickerWings. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
