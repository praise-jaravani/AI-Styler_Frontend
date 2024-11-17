/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      scale: ['group-hover', 'hover-ready:group-hover'],
      opacity: ['group-hover', 'hover-ready:group-hover'],
      transform: ['group-hover', 'hover-ready:group-hover'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

