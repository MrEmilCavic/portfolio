/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/{component-library-name}/src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fd7d40', 
        'secondary': '#1f395a', 
        'accent': '#02878c', 
        'bgdark': '#056573',
        'bglight': '#ffe9ad', 
        'text-primary': '#ffeaa7', 
        'text-secondary': '#c0dcac',
      },
      fontFamily: {
        'sans': ['Nunito Sans','Roboto', 'Arial', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
      fontSize: {
        '10xl': '10rem',
      },
      backgroundImage: {
        'large': "url('./util/bglarge.webp')",
        'medium': "url('./util/bgmedium.webp')",
        'small': "url('./util/bgsmall.webp')",
      },
      spacing: {
        '128': '32rem', 
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem', 
      },
      boxShadow: {
        'inner': 'inset 0 0 15px rgba(0, 0, 0, 0.1)', 
      },
      transitionDuration: {
        '2000': '2000ms',
        '2500': '2500ms',
      },
      blur: {
        'xxl' : '50px',
      },
    },
  },
  plugins: [],
}

