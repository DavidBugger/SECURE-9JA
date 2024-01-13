/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content:[  
  './templates/**/*.html',
  './node_modules/flowbite/**/*.js'
],
  
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... other shades of blue
          800: '#004085',
          900: '#001429',
        },
        // Example of defining a custom background color
        darkBlue: '#001429',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

