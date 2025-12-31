import picture from "../assets/picture.jpg";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export default function AboutMe() {
    // naslov
    useRevealOnScroll(".about-title");

    // paragrafi (SVAKI ponaosob)
    useRevealOnScroll(".about-paragraph");

    return (
        <section className="w-full pt-1 pb-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 id="about" className="text-3xl sm:text-4xl font-bold text-center mb-16 fade-in about-title">
                    About me
                </h2>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

                    {/* Left: Image */}
                    <div className="flex justify-center md:justify-start w-full md:w-1/3">
                        <div className="w-56 h-56 mt-14 sm:w-64 sm:h-64 rounded-full border-4 img-border overflow-hidden">
                            <img
                                src={picture}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="w-full md:w-2/3 space-y-6 text-base sm:text-lg">
                        {/* Paragraph 1 */}
                        <p className="slide-up about-paragraph flex items-center gap-3">
                            <span>👋</span>
                            <span className="flex-1">
                            Hi, I’m Maksim Dimitrijević, a Master’s student with a passion for <strong> software engineering </strong> and building impactful digital solutions.
                            </span>
                            </p>

                        {/* Paragraph 2 */}
                        <p className="slide-up about-paragraph flex items-center gap-3">
                            <span>🎓</span>
                            <span className="flex-1">
                            I completed my <strong>Bachelor's degree</strong> in Computer Science and am currently pursuing my <strong>Master’s degree</strong> in software engineering at the Faculty of Computing, focusing on modern software development practices.
                            </span>
                            </p>

                        {/* Paragraph 3 */}
                        <p className="slide-up about-paragraph flex items-center gap-3">
                            <span>💻</span>
                            <span className="flex-1">
                            I work as a <strong>freelance developer</strong>, collaborating on projects ranging from web sites to larger team-based projects at university, including a group of 25 people using SCRUM methodology.
                            </span>
                        </p>

                        {/* Paragraph 4 */}
                        <p className="slide-up about-paragraph flex items-center gap-3">
                            <span>🧠</span>
                            <span className="flex-1">
                                I'm experienced in full-stack web development, particularly with <strong>TypeScript</strong> and <strong>Java</strong>. <strong>ReactJS/NextJS</strong> is my frontend framework of choice, and I have worked with <strong>NodeJS</strong> and <strong>Spring Boot</strong> on backend projects. I also enjoy building scalable and maintainable applications for clients as a freelance developer.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
