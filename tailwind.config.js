/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
            },
            colors: {
                'neon-blue': '#00f3ff',
                'neon-purple': '#bc13fe',
                'dark-bg': '#0a0a0a',
                'card-bg': '#121212',
            },
        },
    },
    plugins: [],
}
