import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack"; 
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import CursorSpotlight from "./components/CursorSpotlight";
import ChatBot from "./components/ChatBot";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen w-full">
      <CursorSpotlight />
      <NavBar />
      <main>
        <HeroSection />

        <div className="relative h-px mx-8 md:mx-24"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" /></div>
        <section id="about"><AboutMe /></section>

        <div className="relative h-px mx-8 md:mx-24"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" /></div>
        <section id="tech-stack"><TechStack /></section>

        <div className="relative h-px mx-8 md:mx-24"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" /></div>
        <section id="projects"><Projects /></section>

        <div className="relative h-px mx-8 md:mx-24"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" /></div>
        <section id="contact"><Contact /></section>

        <section><Footer /></section>
      </main>
      <ChatBot />
      <ToastContainer />
    </div>
  );
}

export default App;