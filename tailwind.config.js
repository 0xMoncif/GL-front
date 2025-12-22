/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'unbounded': ['Unbounded', 'sans-serif'], // Add your custom font
        'red-hat': ['Red Hat Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

