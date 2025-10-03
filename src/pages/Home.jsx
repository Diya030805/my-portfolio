import { useEffect } from "react";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    // Force dark mode on mount
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Always render star background */}
      <StarBackground />

      <Navbar />
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}