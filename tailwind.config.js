/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
        },
        backgroundSize: {
            '200%': '200%',
            '300%': '300%',
            '400%': '400%',
        },
        extend: {
            keyframes: {
                lefttoright: {
                    '0%': { 'background-position': 'left' },
                    '100%': { 'background-position': 'right' },
                },
            },
            animation: {
                'left-to-right': 'lefttoright 3s infinite alternate',
            },
        },
    },
    plugins: [],
};
