import { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import LightGradientBackground from "../components/LightGradientBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);

    const observer = new MutationObserver(() => {
      const updatedDark = document.documentElement.classList.contains("dark");
      setDarkMode(updatedDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <ThemeToggle setDarkMode={setDarkMode} />

      {/* Render only one background */}
      {darkMode ? (
        <StarBackground />
      ) : (
        <div className="block dark:hidden">
          <LightGradientBackground />
        </div>
      )}

      <Navbar />
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
