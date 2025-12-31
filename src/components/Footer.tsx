import React from 'react';
import { Linkedin, Github, Mail, ChevronUp, SunIcon, MoonIcon } from 'lucide-react';

interface FooterProps {
    dark: boolean;
    setDark: (dark: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ dark, setDark }) => {
    const scrollToTop = () => {
        const start = window.scrollY; // trenutna pozicija
        const duration = 800; // trajanje animacije u ms
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1); // 0 -> 1
            const easeOut = 1 - Math.pow(1 - progress, 3); // cubic easing
            window.scrollTo(0, start * (1 - easeOut));

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }else {
                // kada animacija završi, obriši hash iz URL-a
                history.replaceState(null, '', window.location.pathname);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    return (
        <footer className="w-full py-8 px-4 bg-background dark:bg-foreground border-t border-gray-300 dark:border-gray-700">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Copyright Text */}
                <div className="text-sm font-sans text-foreground dark:text-background text-center md:text-left">
                    © 2026 Maksim Dimitrijević – made with ❤️ using ReactJS
                </div>

                {/* Social Icons & Actions */}
                <div className="flex items-center gap-4">
                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/maksim-dimitrijevi%C4%87-33025332a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-hover"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5 text-foreground dark:text-background" />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/dimitrijevic175"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-hover"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5 text-foreground dark:text-background" />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:maksimdimitrijevic@gmail.com"
                        className="nav-hover"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5 text-foreground dark:text-background" />
                    </a>

                    {/* Scroll to Top */}
                    <button
                        onClick={scrollToTop}
                        className="nav-hover p-2 rounded-full border-2 border-foreground dark:border-background"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp className="w-5 h-5 text-foreground dark:text-background" />
                    </button>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDark(!dark)}
                        className="nav-hover p-2 rounded-full border-2 border-foreground dark:border-background"
                        aria-label="Toggle dark mode"
                    >
                        {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;