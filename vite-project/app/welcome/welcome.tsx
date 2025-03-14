import { useState } from "react";
import { FloatingIcons } from "../welcome/floatingIcon";
import { SocialLinks } from "../welcome/socialLinks";
import { ContactForm } from "../welcome/contactForm";

export function Welcome() {
  const [showForm, setShowForm] = useState(false);

  // Add another section for additional information and resume!
  
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-600 text-white overflow-hidden">
      <FloatingIcons />
      <div className="text-center relative z-10">
        <SocialLinks />
        <div className="p-6 md:p-12 max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight leading-snug md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-teal-400 to-purple-400">
            Hi, I am Jivan Bal
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-300">Software Engineer</p>
          <p className="mt-5 text-lg md:text-xl text-gray-200">Crafting code with creativity, one bug at a time.</p>
          <button className="cursor-pointer mt-10 px-8 py-4 bg-gradient-to-r from-pink-600 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-xl transform transition duration-300 hover:scale-105" onClick={() => setShowForm(true)}>
            Let's Connect
          </button>
        </div>
      </div>
      {showForm && <ContactForm setShowForm={setShowForm} />}
    </main>
  );
}
