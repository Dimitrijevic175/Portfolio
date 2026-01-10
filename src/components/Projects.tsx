import econstruction from '../assets/e-construction1.jpg';
import bank1 from '../assets/bank1.png';
import erp from '../assets/erp.jpg';
import {Github} from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.ts";



export default function Projects() {
    const projects = [
        {
            title: 'Crypto Bank',
            image: bank1,
            tags: ['REACT', 'VITE', 'TYPESCRIPT'],
            description:
                'A secure and user-friendly cryptocurrency exchange platform enabling account management, real-time trading and portfolio tracking, developed as a university project.',
            type:"Web App",
            github: "https://github.com/Dimitrijevic175/Banka-2-Frontend"
        },
        {
            title: 'E-Construction',
            image: econstruction,
            tags: ['REACT NATIVE', 'REACT QUERY'],
            description:
                'A cross-platform mobile app connecting construction workers with job opportunities and clients with skilled professionals.',
            type:"Mobile App",
            github: "https://github.com/Dimitrijevic175/e-construction-mobile-app"
        },
        {
            title: 'ERP System',
            image: erp,
            tags: ['JAVA', 'SPRING BOOT', 'POSTGRESQL'],
            description:
                'Enterprise Resource Planning system covering inventory, procurement and sales.',
            type: "Microservices",
            github: "https://github.com/Dimitrijevic175/ERP"
        },
    ];
    useRevealOnScroll(".project-title");
    return (
        <section id="projects" className="relative py-20 px-4 scroll-mt-20 md:scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h1 className="text-4xl font-bold  text-center mb-12 font-sans mb-16 fade-in project-title">
                    Featured Projects
                </h1>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`
                        project-cards rounded-3xl p-4 bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col
                  
                    `}
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-2xl mb-4 aspect-[16/7]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Type */}
                            <p className="text-sm text-blue-500 font-bold mb-1">
                                {project.type}
                            </p>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="
                                    text-xs
                                    px-3 py-1 rounded-full
                                    bg-[var(--muted-text)/10]
                                    text-blue-500
                                    backdrop-blur-sm
                                    border border-blue-500
                                "
                                    >
                                {tag}
                            </span>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-sm text-[var(--muted-text)] mb-4 leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            {/* Button */}
                            <div className="mt-auto">
                                <a
                                    href={project.github}  // link do GitHub repoa
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-btn"
                                >
                                    <span>Explore Repo</span>
                                    <Github className="w-4 h-4" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
