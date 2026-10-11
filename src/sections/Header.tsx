"use client"
/* import { Menu, X } from "lucide-react"; */
import { useEffect, useState } from "react";

export const Header = () => {
const [menuOpen, setMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  const sectionsIds = [
    "home",
    "projects",
    "testimonials",
    "about",
    "contact",
  ];

  const observer = new IntersectionObserver((entries) => {
    const visibleSections = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visibleSections.length > 0)
    {setActiveSection(visibleSections[0].target.id);
    }
  },
  {
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0,
  }
);

sectionsIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});

return () => observer.disconnect();
}, [])

  return ( <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#home" className={`nav-item ${
        activeSection === "home" ? "bg-white !text-slate-900" : ""
      }`}>Home</a>
      <a href="#projects" onClick={() => setActiveSection("projects")} className={`nav-item ${
        activeSection === "projects" ? "bg-white !text-slate-900" : ""
      }`}>Projects</a>
      <a href="#testimonials" onClick={() => setActiveSection("testimonials")} className={`nav-item ${
        activeSection === "testimonials" ? "bg-white !text-slate-900" : ""
      }`}>Testimonials</a>
      <a href="#about" onClick={() => setActiveSection("about")} className={`nav-item ${
        activeSection === "about" ? "bg-white !text-slate-900" : ""
      }`}>About</a>
      <a href="#contact" onClick={() => setActiveSection("contact")} className={`nav-item ${
        activeSection === "contact" ? "bg-white !text-slate-900" : ""
      }`}>Contact</a>
    </nav>
  </div>
  );
};
