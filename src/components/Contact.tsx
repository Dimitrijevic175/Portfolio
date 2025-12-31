import {useRevealOnScroll} from "../hooks/useRevealOnScroll.ts";

const Contact = () => {
    useRevealOnScroll(".contact-title");
    return (
        <div id="contact" className="w-full py-32 px-4 bg-background dark:bg-foreground">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl fade-in font-bold text-center mb-12 font-sans text-foreground dark:text-background contact-title">
                    Contact me
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {/* Personal Email Card */}
                    <div className="cards rounded-lg shadow-md p-8 text-center">
                        <h2 className="text-sm font-bold mb-4 font-sans uppercase tracking-wider inline-block px-3 py-1 rounded" style={{ backgroundColor: '#002100', color: '#90c2ab' }}>
                            Personal
                        </h2>
                        <a
                        href="mailto:maksimdimitrijevic@gmail.com"
                        className="font-sans text-lg underline decoration-1 underline-offset-4 inline-block px-3 py-1 rounded"
                        >
                        maksimdimitrijevic@gmail.com
                    </a>
                </div>

                {/* Academic Email Card */}
                <div className="cards rounded-lg shadow-md p-8 text-center">
                    <h2 className="text-sm font-bold mb-4 font-sans uppercase tracking-wider inline-block px-3 py-1 rounded" style={{ backgroundColor: '#231000', color: '#f6ae98' }}>
                        Academic
                    </h2>
                    <a
                    href="mailto:mdimitrijevi125m3@raf.rs"
                    className="font-sans text-lg underline decoration-1 underline-offset-4 inline-block px-3 py-1 rounded"
                    >
                    mdimitrijevi125m3@raf.rs
                </a>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;