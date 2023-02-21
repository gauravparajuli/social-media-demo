/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                socialBg: '#F5F7FB',
                socialBlue: '#218DFA',
            },
        },
    },
    plugins: [
        'postcss-import',
        'tailwindcss/nesting',
        'tailwindcss',
        'autoprefixer',
    ],
}