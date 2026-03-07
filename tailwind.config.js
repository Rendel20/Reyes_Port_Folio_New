/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation: {
                spin_slow: 'spin 6s linear infinite'
            },
            colors: {
                lightHover: '#d4edda',
                darkHover: '#1a3a2e',
                darkTheme: '#0d1f12',
                accent: '#10b981',
                accentCyan: '#06b6d4',
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
                'green': '0 0 24px rgba(16, 185, 129, 0.25)',
                'green-glow': '0 0 40px rgba(6, 182, 212, 0.15)',
            }
        },
    },
    darkMode: 'selector',
    plugins: [],
}