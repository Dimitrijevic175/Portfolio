import { useState } from 'react';
import {SunIcon, MoonIcon} from 'lucide-react';

interface NavbarProps {
    dark: boolean;
    setDark: (value: boolean) => void;
}

export default function Navbar({ dark, setDark }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: 'About Me', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="flex justify-between items-center p-4 shadow-md sticky top-0 z-50">
            {/* Desktop layout */}
            <div className="hidden md:flex items-center justify-between w-full">
                {/* Logo */}
                <h1 className="text-2xl font-bold font-sans text-blue-700 dark:text-yellow-400">
                    Maksim
                </h1>

                {/* Links right */}
                <ul className="flex space-x-6 font-medium">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="nav-link"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Dark mode button */}
                <button onClick={() => setDark(!dark)}>
                    {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile layout */}
            <div className="flex md:hidden w-full justify-between items-center">
                {/* Hamburger menu left */}
                <button
                    className="px-3 py-1 rounded border border-gray-400 dark:border-gray-600"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Logo center */}
                <h1 className="text-2xl font-bold font-sans text-blue-700 dark:text-yellow-400">
                    Maksim
                </h1>

                {/* Dark mode button right */}
                <button onClick={() => setDark(!dark)}>
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
                                className="nav-link"
                                onClick={() => setMenuOpen(false)}
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
