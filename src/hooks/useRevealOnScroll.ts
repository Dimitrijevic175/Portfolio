import { useEffect } from "react";

export function useRevealOnScroll(selector: string) {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target); // animira se samo jednom
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [selector]);
}
