import type { Config } from "tailwindcss";

const config: Config = {
    // 1. Enable Class-based Dark Mode
    darkMode: "class",

    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                levi: {
                    // Dark Mode Colors
                    black: "#050505",
                    dark: "#0F0F0F",

                    // Brand Colors (Work on both)
                    red: "#FF4D4D",
                    orange: "#FF8534",

                    // Light Mode Colors (New!)
                    paper: "#F5F5F7",    // Soft grey/white for backgrounds
                    ink: "#1A1A1A",      // Soft black for text
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;