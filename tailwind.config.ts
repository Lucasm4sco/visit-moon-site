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
        // circles around the moon
        'circle-1': 'circle-1 18s linear infinite',
        'circle-2': 'circle-2 23s linear infinite',
        'circle-3': 'circle-3 30s linear infinite',
        // menu hamburguer
        'span-1': 'span-1 .2s forwards'
      },
      keyframes: {
        // circles around the moon
        'circle-1': {
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(-630deg)' }
        },
        'circle-2': {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(-540deg)' }
        },
        'circle-3': {
          '0%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(-450deg)' }
        },
        // menu hamburguer
        'span-1': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(45deg)', top: '18px' }
        }
      }
    },
  },
  plugins: [],
}
export default config
