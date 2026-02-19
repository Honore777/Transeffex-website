/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideDown: 'slideDown 0.5s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      colors: {
        // Bright, High-Contrast Professional Colors
        primary: '#0891B2',      // Bright Cyan
        secondary: '#1F2937',    // Dark Charcoal
        accent: '#06B6D4',       // Vibrant Cyan
        light: '#FFFFFF',        // Pure White
        tech: {
          darkBg: '#0F172A',     // Very Dark Navy
          brightBlue: '#0284C7',  // Bright Blue
          brightCyan: '#0891B2',  // Bright Cyan
          vibrantCyan: '#06B6D4',  // Vibrant Cyan
          white: '#FFFFFF',       // Pure White
          darkGray: '#1F2937',    // Dark Gray
          lightGray: '#F0F9FF',   // Very Light Blue
          black: '#000000',       // Pure Black
        }
      }
    },
  },
  plugins: [],
}
