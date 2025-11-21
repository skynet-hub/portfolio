import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-linear-to-r from-gray-100 to-blue-200 min-h-screen w-full">
      {/*NavBar Section */}
      <NavBar />
      {/* Main content with animations */}
      <main className="min-h-screen">
        <HeroSection />
        
        {/* Other sections with scroll animations */}
        <section className="min-h-screen py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
            {/*  about content here */}
          </div>
        </section>

        <section className="min-h-screen py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Tech Stack</h2>
            {/* about content here */}
          </div>
        </section>

        <section className="min-h-screen py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">My Projects</h2>
            {/* projects content here */}
          </div>
        </section>

        <section className="min-h-screen py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
            {/* Tech Stack content here */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;