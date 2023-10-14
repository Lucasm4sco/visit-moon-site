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
        'highlighted': '#889AC9',
        'gray-theme': '#464646'
      },
      animation: {
        // circles around the moon
        'circle-1': 'circle-1 18s linear infinite',
        'circle-2': 'circle-2 23s linear infinite',
        'circle-3': 'circle-3 30s linear infinite',
        // information about the moon
        'ballon': 'ballon .7s linear forwards',
        // text infinite animation
        'text-left-1': 'to-left-1 20s linear infinite',
        'text-left-2': 'to-left-2 20s 10s linear infinite',
        'text-right-1': 'to-right-1 20s linear infinite',
        'text-right-2': 'to-right-2 20s 10s linear infinite',
        // lines
        'width-full': 'width-full 1s linear forwards'
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
        // information about the moon
        'ballon': {
          '100%': { width: '85rem' }
        },
        // text infinite anim,ation
        'to-left-1': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'to-left-2': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' }
        },
        'to-right-1': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'to-right-2': {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        // lines
        'width-full': {
          '100%': { width: '100%' }
        },
      }
    },
  },
  plugins: [],
}
export default config
