import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero';
import './index.css';

function App() {
    const [dark, setDark] = useDarkMode();

    return (
        <div className={dark ? 'dark' : ''}>
            <div className="min-h-screen font-sans bg-background dark:bg-foreground text-foreground dark:text-background">
                <Navbar dark={dark} setDark={setDark} />
                <main className="scroll-smooth">
                    <Hero />
                    {/* Ostale sekcije: About, Skills, Projects, Contact */}
                </main>
            </div>
        </div>
    );
}

export default App;
