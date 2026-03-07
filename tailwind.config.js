import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "#1e3b8a",
                secondary: "#64748b",
                "non-active": "#94a3b8",
                input: "#f8fafc",
                dark: "#0f172a",
                "background-light": "#f6f6f8",
                "background-dark": "#0f172a",
                "border-light": "#e2e8f0",
            },
        },
    },

    plugins: [forms],
};
