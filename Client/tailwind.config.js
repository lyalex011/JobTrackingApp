/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',


"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}

