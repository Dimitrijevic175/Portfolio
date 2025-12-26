export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans mb-4 text-primary dark:text-secondary">
                Zdravo, ja sam Maksim
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-foreground dark:text-background">
                Frontend developer | React & Tailwind entuzijasta
            </p>
            <button className="px-6 py-3 bg-primary dark:bg-secondary text-background dark:text-foreground font-bold rounded hover:opacity-80 transition">
                Pogledaj moje projekte
            </button>
        </section>
    );
}
