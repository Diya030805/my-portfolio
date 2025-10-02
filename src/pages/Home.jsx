import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />

      <Navbar />
      <HeroSection />
      <AboutMe />
      
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
