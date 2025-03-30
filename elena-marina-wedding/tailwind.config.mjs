import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // You can define custom elegant colors here if needed
        // Example:
        // 'primary': '#FAF0E6', // Linen
        // 'secondary': '#8B4513', // Saddle Brown 
      }
    },
  },
  plugins: [],
} 