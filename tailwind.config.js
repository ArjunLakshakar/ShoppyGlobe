
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // your custom breakpoint
        'xsm':'570px',
        'llg': '1220px'
      },
    },
  },
  plugins: [],
}
