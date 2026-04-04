import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soluna-green': '#2A4535',
        'soluna-green-hover': '#345542',
        'soluna-cream': '#F7F4E9',
        'soluna-gold': '#F2CE6E',
        'soluna-sage': '#859D82',
        'soluna-oak': '#C09D71',
        'soluna-black': '#1A1A1A',
        'soluna-charcoal': '#2C2C2C',
        'soluna-white': '#FCFCFC',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.3em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
