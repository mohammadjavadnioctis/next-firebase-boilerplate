import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        primary: {
          DEFAULT: "#1D2E66",
          // 50: "#FFFFFF",
          // 100: "#F9F7FF",
          // 200: "#DED0FC",
          // 300: "#C2A9FA",
          // 400: "#A783F8",
          // 500: "#8B5CF6",
          // 600: "#6527F3",
          // 700: "#4A0CD6",
          // 800: "#3709A1",
          // 900: "#25066C",
        },
        accent: {
          DEFAULT: "#E22D3A",
          // 50: "#FFFFFF",
          // 100: "#FEFCF8",
          // 200: "#F9EED5",
          // 300: "#F3E0B1",
          // 400: "#EED28E",
          // 500: "#E9C46A",
          // 600: "#E2B139",
          // 700: "#C6951D",
          // 800: "#957016",
          // 900: "#644B0F",
        },
        subtitle: {
          DEFAULT: "#7C7C7C"
        },
        'grass-green': {
          DEFAULT: "#90B46D"
        },
        'light-blue': {
          DEFAULT: "#6479BF"
        },
        darkColors: {
          DEFAULT: '#181a1b',
          400: '#1d1f20',
          900: '#1d1f20'
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    
        fontFamily: {
          vazirmatn: ['var(--font-vazirmatn)'],
          sans: ['Vazirmatn', 'sans-serif', ...defaultTheme.fontFamily.sans],
  
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}
export default config
