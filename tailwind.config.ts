/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#1E40AF',
                secondary: '#FBBF24',
                accent: '#EF4444',
                background: '#F3F4F6',
                foreground: '#111827',
            },
            fontFamily: {
                sans: ['"Nunito Sans"', 'ui-sans-serif', 'system-ui'], // Nunito Sans globalno
            },
        },
    },
    plugins: [],
};
