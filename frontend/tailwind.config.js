/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mouse': "url('./assets/keys.jpg')"
    },
    }    
  },
  plugins: [],
}

