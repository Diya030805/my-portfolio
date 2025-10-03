import React, { useState } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import { cn } from "../lib/utils";

export default function ContactSection() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c1cab04e-2b52-4e4e-829f-0bab4a545043");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    diyaghosh030805@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 90738-80321
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Kolkata , West Bengal, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
             <a 
                href="https://www.linkedin.com/in/diya-ghosh030508" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border-2 border-primary/50 text-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <Linkedin className="h-6 w-6 relative z-10 group-hover:text-white transition-colors duration-300" />
              </a>
                
               <a 
                href="https://www.instagram.com/diyaghosh0305?igsh=MXQxOXN0aXdrbWF0MA==&utm_source=ig_contact_invite " 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border-2 border-primary/50 text-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <Instagram className="h-6 w-6 relative z-10 group-hover:text-white transition-colors duration-300" />
              </a>
            <a 
                href="https://github.com/Diya030805" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border-2 border-primary/50 text-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <Github className="h-6 w-6 relative z-10 group-hover:text-white transition-colors duration-300" />
              </a>
              </div>
            </div>
          </div>

        <div className="bg-card p-8 rounded-lg shadow-xs">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name..."
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                autoComplete="off"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>

            <button
              type="submit"
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
          <span>{result}</span>
        </div>

        </div>
      </div>
    </section>
  );
};


































