import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                levi: {
                    black: "#050505",
                    dark: "#0F0F0F",
                    red: "#FF4D4D",
                    orange: "#FF8534",
                    white: "#EDEDED",
                },
            },
            fontFamily: {
                // Set Inter as the default for both "sans" and "serif" classes 
                // to override the previous Greek style.
                sans: ['var(--font-inter)', 'sans-serif'],
                serif: ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;