import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import ProjectsSection from "./components/projects/ProjectSection";
import SkillsSection from "./components/skills/SkillsSection";
import AOS from "aos";
import Accordion from "./components/Accordion/Accordion";

AOS.init({
  delay: 100
});
function App() {
  return (
    <main >
      <Navbar />
      <div className="app-container">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Accordion />
        <ContactSection />
        <Footer />
      </div>

    </main>
  );
}

export default App;
