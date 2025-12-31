import {useEffect, useState} from 'react';
import {SunIcon, MoonIcon} from 'lucide-react';

interface NavbarProps {
    dark: boolean;
    setDark: (value: boolean) => void;
}

const links = [
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar({ dark, setDark }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(link => link.href.replace('#', ''));
            const scrollPosition = window.scrollY + 100; // offset za navbar

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(`#${sectionId}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Pozovi odmah da se setuje početna vrednost

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTopSlow = () => {
        const start = window.scrollY;
        const duration = 1000; // 1 sekunda
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            window.scrollTo(0, start * (1 - easeOut));

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            } else {
                // kada animacija završi, obriši hash iz URL-a
                history.replaceState(null, '', window.location.pathname);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    const scrollToSection = (href: string) => {
        // Zatvori meni ako je otvoren
        setMenuOpen(false);

        // Ukloni # iz href-a da dobiješ ID
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (!targetElement) return;

        const start = window.scrollY;
        const targetPosition = targetElement.offsetTop - 80; // 80px offset za navbar
        const distance = targetPosition - start;
        const duration = 1000; // 1 sekunda
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            window.scrollTo(0, start + distance * easeOut);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            } else {
                // Kada animacija završi, postavi hash u URL
                history.replaceState(null, '', href);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    return (
        <nav className="navbar flex justify-between items-center p-4 shadow-md sticky top-0 z-50">
            {/* Desktop layout */}
            <div className="hidden md:flex items-center justify-between w-full">
                {/* Logo levo */}
                <h1
                    className="text-l font-bold font-sans nav-hover cursor-pointer"
                    onClick={scrollToTopSlow}
                >
                    Maksim Dimitrijević
                </h1>

                {/* Desna strana: linkovi + dark mode dugme */}
                <div className="flex items-center space-x-6">
                    <ul className="flex space-x-6 font-medium">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`nav-link ${activeSection === link.href ? 'underline decoration-2 underline-offset-4' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Dark mode dugme */}
                    <button onClick={() => setDark(!dark)} className="nav-hover">
                        {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                    </button>
                </div>
            </div>


            {/* Mobile layout */}
            <div className="flex md:hidden w-full justify-between items-center">
                {/* Hamburger menu left */}
                <button
                    className="px-3 py-1 rounded border border-gray-400 dark:border-gray-600 nav-hover"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Logo center */}
                <h1 className="text-l font-bold font-sans nav-hover">
                    Maksim Dimitrijević
                </h1>

                {/* Dark mode button right */}
                <button onClick={() => setDark(!dark)} className="nav-hover">
                    {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile menu dropdown */}
            {menuOpen && (
                <ul className="mobile-menu absolute top-16 left-0 w-full flex flex-col p-4 space-y-2 shadow-md md:hidden">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`nav-link ${activeSection === link.href ? 'underline decoration-2 underline-offset-4' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
