import { useState, useEffect } from "react";

export const useDarkMode = () => {
    // inicijalizuj stanje iz localStorage ili sistemske preferencije
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme === "dark") return true;
            if (savedTheme === "light") return false;

            // fallback na sistemsku preferencu
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    // efekat za dodavanje/uklanjanje klase i čuvanje u localStorage
    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    // toggle funkcija
    const toggleDarkMode = () => setIsDark(prev => !prev);

    return [isDark, toggleDarkMode] as const;
};