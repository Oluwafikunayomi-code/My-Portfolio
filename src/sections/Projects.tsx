import Image from "next/image";
import ttechElectrical from "@/assets/images/ttech-electrical.jpg";
import virtualR from "@/assets/images/virtual-R.jpg";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Ttech Electrical",
    year: "2026",
    title: "Client Facing Solar Company Website",
    results: [
      { title: "Enhanced user experience" },
      { title: "Made past project visible" },
      { title: "Enhanced responsiveness of site" },
    ],
    link: "https://ttechelectrical.com.ng/",
    image: ttechElectrical,
  },
  {
    company: "Practice-project",
    year: "2026",
    title: "Virtual R game landing page",
    results: [
      { title: "Enhanced user experience" },
      { title: "Enhanced user interface" },
      { title: "Increased visibility" },
    ],
    link: "https://virtualr-main-nu.vercel.app",
    image: virtualR,
  },
  /* {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  }, */
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24" >
    <div className="container">
      <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how i transformed concepts into engaging digital experiences." />
      <div className="flex flex-col md:mt-20 mt-10 gap-20">
        {portfolioProjects.map(project => (
          <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none">
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`,
              }}>
              </div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:mb-9">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 gap-2    inline-flex font-bold uppercase   tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
            
                  <h3 className="font-serif text-2xl  mt-2     md:mt-5 md:text-4xl">{project.  title}</h3>
                  <hr className="border-t-2 border-white/ 5    mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4  mt-4     md:mt-5">
                  {project.results.map(result => (
                    <li key={result.title} className="flex gap-2 text-sm     md:text-base text-white/50">
                      <CheckCircleIcon className="size-5    md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
              <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center
              justify-center gap-2 mt-8">
                <span>View Live Site</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
            </div>
            <div>
            <Image 
              src={project.image}
              alt={project.title} 
              className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:w-auto rounded-md lg:rounded-lg" />
              </div>
          </div>    
          </div>
        ))}
      </div>
    </div>
  </section>;
};
