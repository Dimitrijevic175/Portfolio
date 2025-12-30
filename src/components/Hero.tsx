import { Linkedin, Github, Mail, ChevronDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <div className="typewriter">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans mb-4 pb-1 text-primary dark:text-secondary">
                    Maksim Dimitrijević
                </h2>
            </div>
            <p className=" sm:text-xl lg:text-2xl mb-6 text-[var(--muted-text)] subtitle-animate">
                Computer Science + Software Engineering @ Faculty of Computing
            </p>
            <div className="flex space-x-4 subtitle-animate">
                <a
                    href="https://www.linkedin.com/in/maksim-dimitrijevi%C4%87-33025332a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--muted-text)] hover:text-primary transition-colors"
                >
                    <Linkedin size={28} />
                </a>

                <a
                    href="https://github.com/Dimitrijevic175"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--muted-text)] hover:text-primary transition-colors"
                >
                    <Github size={28} />
                </a>

                <a
                    href="mailto:maksimdimitrijevic@gmail.com"
                    className="text-[var(--muted-text)] hover:text-primary transition-colors"
                >
                    <Mail size={28} />
                </a>
            </div>

            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
            >
                <span>Resume</span>
                <ArrowUpRight size={20} />
            </a>






            <div className="flex flex-col items-center animate-chevron mt-3">
                <ChevronDown size={32} className="text-blue-500" />
                <ChevronDown size={32} className="text-blue-500" />
                <ChevronDown size={32} className="text-blue-500" />
            </div>

        </section>
    );
}
