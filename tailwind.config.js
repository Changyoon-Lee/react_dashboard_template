/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // class를 활용하여 darkmode 적용을 위함
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                ping: {
                    '75%, 100%': {
                        transform: 'scale(1.1)',
                        opacity: 0
                    }
                }
            },
        },
    },
    plugins: [],
}