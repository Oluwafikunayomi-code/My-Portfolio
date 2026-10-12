"use client"
import { Menu, X } from "lucide-react";
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

  return ( <div className="fixed top-3 left-0 z-50 flex w-full justify-center px-4">
    {/* Desktop Navigation */}
    <nav className="hidden min-[425px]:flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
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
    {/* Mobile Navigation */}
<div className="relative flex w-full justify-end min-[425px]:hidden">
  <button
    type="button"
    onClick={() => setMenuOpen((open) => !open)}
    aria-label={menuOpen ? "Close menu" : "Open menu"}
    aria-expanded={menuOpen}
    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-slate-950/90 text-white shadow-lg backdrop-blur-xl transition active:scale-95"
  >
    {menuOpen ? <X size={22} /> : <Menu size={22} />}
  </button>

  {/* Mobile Dropdown */}
  <nav
    aria-label="Mobile navigation"
    className={`absolute right-0 top-14 w-64 rounded-3xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
      menuOpen
        ? "visible translate-y-0 opacity-100"
        : "invisible -translate-y-3 opacity-0 pointer-events-none"
    }`}
  >
    {[
      { name: "Home", id: "home" },
      { name: "Projects", id: "projects" },
      { name: "Testimonials", id: "testimonials" },
      { name: "About", id: "about" },
      { name: "Contact", id: "contact" },
    ].map((link) => (
      <a
        key={link.id}
        href={`#${link.id}`}
        onClick={() => setMenuOpen(false)}
        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition-colors ${
          activeSection === link.id
            ? "bg-white !text-slate-900"
            : "text-white/70 hover:bg-white/10 hover:text-white"
        }`}
      >
        <span className="flex items-center gap-3">
          {link.name}
        </span>

      </a>
    ))}

    <div className="mt-2 border-t border-white/10 px-4 py-3">
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="flex items-center gap-2 text-sm text-white/60 hover:text-white"
      >
        Let's work together
      </a>
    </div>
  </nav>
</div>
  </div>
  );
};
