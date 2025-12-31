import {useRevealOnScroll} from "../hooks/useRevealOnScroll.ts";

const Skills = () => {
    const languageSkills = [
        { name: 'English', level: 'Full Professional Proficiency', flag: '🇬🇧' },
        { name: 'Russian', level: 'Professional Working Proficiency', flag: '🇷🇺' },
        { name: 'German', level: 'Elementary Proficiency', flag: '🇩🇪' },
        { name: 'Serbian', level: 'Native Proficiency', flag: '🇷🇸' }
    ];

    const frameworks = [
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
    ];

    const databases = [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' }
    ];

    const tools = [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Postman', icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
        {name: 'Claude', icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23CC9B7A"%3E%3Cpath d="M17.3 7.6c-.4-.8-1-1.4-1.7-1.8-.7-.4-1.5-.6-2.4-.6-1.3 0-2.4.4-3.3 1.3-.9.8-1.3 1.9-1.3 3.2 0 .8.2 1.5.5 2.1.3.6.8 1.1 1.4 1.5.6.4 1.3.5 2 .5.9 0 1.7-.2 2.3-.7.6-.5 1-1.1 1.2-1.9h-2.8c-.1.3-.3.5-.6.6-.3.2-.6.2-1 .2-.6 0-1-.2-1.4-.5-.3-.3-.5-.8-.5-1.4h6.2v-.7c0-1-.2-1.8-.6-2.6zm-5.8 1.1c.1-.5.3-.9.6-1.2.4-.3.8-.5 1.3-.5.5 0 .9.2 1.2.5.3.3.5.7.5 1.2h-3.6zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/%3E%3C/svg%3E'},
        { name: 'Gemini', icon: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
        { name: 'ChatGPT', icon: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png' },
        {
            name: 'SCRUM',
            icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23009FDA"%3E%3Cpath d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.47l7 3.5v6.85l-7-3.5V9.47zm16 0v6.85l-7 3.5v-6.85l7-3.5z"/%3E%3C/svg%3E'
        },
        {
            name: 'Kanban',
            icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234A90E2"%3E%3Cpath d="M4 3h6v18H4V3zm8 0h6v10h-6V3zm8 0h6v14h-6V3z"/%3E%3C/svg%3E'
        }
    ];
    useRevealOnScroll(".skills-title");
    return (
        <div id="skills" className="w-full py-12 px-4 bg-background dark:bg-foreground">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl fade-in font-bold  text-center mb-12 font-sans text-foreground dark:text-background skills-title">
                    Skills
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Card 1: Languages & Frameworks */}
                    <div className="cards rounded-lg shadow-md p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                            {/* Languages Section */}
                            <div className="flex flex-col">
                                <h2 className="text-xl font-bold mb-4 font-sans text-foreground dark:text-background">
                                    Languages
                                </h2>
                                <div className="space-y-3">
                                    {languageSkills.map((lang, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <span className="text-xl mt-0.5">{lang.flag}</span>
                                            <div>
                                                <div className="text-sm font-semibold font-sans text-foreground dark:text-background">
                                                    {lang.name}
                                                </div>
                                                <div className="text-xs font-sans text-gray-600 dark:text-gray-400">
                                                    {lang.level}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600"></div>
                            <div className="md:hidden w-full h-px bg-gray-300 dark:bg-gray-600"></div>

                            {/* Frameworks Section */}
                            <div className="flex flex-col">
                                <h2 className="text-xl font-bold mb-4 font-sans text-foreground dark:text-background">
                                    Frameworks
                                </h2>
                                <div className="space-y-3">
                                    {frameworks.map((framework, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <img
                                                src={framework.icon}
                                                alt={framework.name}
                                                className="w-5 h-5"
                                            />
                                            <span className="text-sm font-sans text-foreground dark:text-background">
                        {framework.name}
                      </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Databases & Other Tools */}
                    <div className="cards rounded-lg shadow-md p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                            {/* Databases Section */}
                            <div className="flex flex-col">
                                <h2 className="text-xl font-bold mb-4 font-sans text-foreground dark:text-background">
                                    Databases
                                </h2>
                                <div className="space-y-3">
                                    {databases.map((db, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <img
                                                src={db.icon}
                                                alt={db.name}
                                                className="w-5 h-5"
                                            />
                                            <span className="text-sm font-sans text-foreground dark:text-background">
                        {db.name}
                      </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600"></div>
                            <div className="md:hidden w-full h-px bg-gray-300 dark:bg-gray-600"></div>

                            {/* Other Tools Section */}
                            <div className="flex flex-col">
                                <h2 className="text-xl font-bold mb-4 font-sans text-foreground dark:text-background">
                                    Other Tools
                                </h2>
                                <div className="space-y-3">
                                    {tools.map((tool, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <img
                                                src={tool.icon}
                                                alt={tool.name}
                                                className="w-5 h-5"
                                            />
                                            <span className="text-sm font-sans text-foreground dark:text-background">
                        {tool.name}
                      </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;