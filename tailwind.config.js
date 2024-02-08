/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primaryMarineBlue: 'hsl(213, 96%, 18%)',
      primaryPurplishBlue: 'hsl(243, 100%, 62%)',
      primaryPastelBlue: 'hsl(228, 100%, 84%)',
      primaryLightBlue: 'hsl(206, 94%, 87%)',
      primaryStrawberryRed: 'hsl(354, 84%, 57%)',
      neutralCoolGray: 'hsl(231, 11%, 63%)',
      neutralLightGray: 'hsl(229, 24%, 87%)',
      neutralMagnolia: 'hsl(217, 100%, 97%)',
      neutralAlabaster: 'hsl(231, 100%, 99%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  plugins: [],
};
