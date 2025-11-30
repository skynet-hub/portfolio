import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack"; 
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-linear-to-r from-gray-100 to-blue-200 min-h-screen w-full">
      {/*NavBar Section */}
      <NavBar />
      {/* Main content with animations */}
      <main>
        <HeroSection />
        
        {/* About Section - only takes needed space */}
        <section id="about">
          <AboutMe />
        </section>

        {/* Tech Stack Section - only takes needed space */}
        <section id="tech-stack">
          <TechStack />
        </section>

        {/* Projects Section - only takes needed space */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact Section - only takes needed space */}
        <section id="contact">
          <Contact />
        </section>

        <section>
          <Footer />
        </section>  
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;