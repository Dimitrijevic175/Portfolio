import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero';
import './index.css';
import AboutMe from "./components/AboutMe.tsx";
import Skills from "./components/Skills.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    const [dark, setDark] = useDarkMode();

    return (
        <div className={dark ? 'dark' : ''}>
            <div className="min-h-screen font-sans bg-background dark:bg-foreground text-foreground dark:text-background">
                <Navbar dark={dark} setDark={setDark} />
                <main className="scroll-smooth">
                    <Hero />
                    <AboutMe />
                    <Skills />
                    <Contact />
                    {/* Ostale sekcije: About, Skills, Projects, Contact */}
                </main>
                <Footer dark={dark} setDark={setDark} />
            </div>
        </div>
    );
}

export default App;
