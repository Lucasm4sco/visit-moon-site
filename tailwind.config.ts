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
        'highlighted': '#889AC9'
      },
      animation: {
        'circle-1': 'circle-1 18s linear infinite',
        'circle-2': 'circle-2 23s linear infinite',
        'circle-3': 'circle-3 30s linear infinite'
      },
      keyframes: {
        'circle-1': {
          '100%': { transform: 'rotate(-630deg) translate(1980%)' }
        },
        'circle-2': {
          '100%': { transform: 'rotate(-540deg) translate(1980%)' }
        },
        'circle-3': {
          '100%': { transform: 'rotate(-450deg) translate(1980%)' }
        }
      }
    },
  },
  plugins: [],
}
export default config
