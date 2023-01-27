/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
      },
      fontFamily: {
        ubuntu: ['ubuntu', 'sans-serif'],
        righteous: ['righteous', 'sans-serif'],
        body: ['ubuntu', 'sans-serif'],
        heading: ['righteous', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        cherryTheme: {
          primary: '#ff624b',
          secondary: '#4f46e5',
          accent: '#f87171',
          neutral: '#6b7280',
          'base-100': '#111827',
          'base-200': '#79869d',
          'base-content': 'rgb(191 203 227)',
          info: '#38bdf8',
          success: '#4ade80',
          warning: '#facc15',
          error: '#ef4444',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
