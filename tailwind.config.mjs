/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["JetBrains Mono", "Helvetica", "sans-serif"],
        },
        container: {
            padding: "1rem",
        },
        extend: {
            colors: {
                "bg-primary": "#1e1e2e",
                "primary-color": "#cdd6f4",
            },
        },
    },
    plugins: [],
};
