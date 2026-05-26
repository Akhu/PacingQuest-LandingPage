/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

// "Dawn / Healing" palette — warm, restorative, body-centred rather than clinical.
// The legacy indigo/purple/amber utility names are intentionally remapped to warm
// hues so the whole site shifts to a sunrise feel without touching every component:
//   indigo -> terracotta (brand)   purple -> warm rose/coral   amber -> honey/gold
//   gray/slate -> warm stone (text)   sage -> restorative green accent
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        title: ['Fraunces', ...defaultTheme.fontFamily.serif],
        prosetitle: ['Fraunces', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Brand — terracotta / warm clay
        indigo: {
          50: '#fdf5f0',
          100: '#fbe7d9',
          200: '#f6cab1',
          300: '#eea582',
          400: '#e57f55',
          500: '#d96535',
          600: '#c14f26',
          700: '#a03e20',
          800: '#7f3320',
          900: '#682c1d',
          950: '#39140c',
        },
        primary: {
          50: '#fdf5f0',
          100: '#fbe7d9',
          200: '#f6cab1',
          300: '#eea582',
          400: '#e57f55',
          500: '#d96535',
          600: '#c14f26',
          700: '#a03e20',
          800: '#7f3320',
          900: '#682c1d',
          950: '#39140c',
        },
        // Secondary — warm rose / coral
        purple: {
          50: '#fdf3f1',
          100: '#fbe2dd',
          200: '#f8c8bf',
          300: '#f1a293',
          400: '#e87765',
          500: '#dc5642',
          600: '#c63e2c',
          700: '#a52f22',
          800: '#882a20',
          900: '#712820',
          950: '#3d100b',
        },
        // Warmth — honey / gold
        amber: {
          50: '#fdf7ec',
          100: '#faebc9',
          200: '#f4d78f',
          300: '#eebb59',
          400: '#e7a233',
          500: '#d9881d',
          600: '#bd6915',
          700: '#9c4d15',
          800: '#7f3e17',
          900: '#6a3416',
          950: '#3d1b09',
        },
        // Restorative accent — soft sage green
        sage: {
          50: '#f2f6f1',
          100: '#e1ebdf',
          200: '#c3d8c1',
          300: '#9bbd99',
          400: '#6e9c6f',
          500: '#4f8051',
          600: '#3c663f',
          700: '#315234',
          800: '#29432c',
          900: '#233726',
          950: '#0f1d12',
        },
        // Text neutrals — warm stone instead of cold gray/slate
        gray: {
          50: '#faf7f3',
          100: '#f3ede4',
          200: '#e6dccf',
          300: '#d2c3b1',
          400: '#b29f8b',
          500: '#8b7a69',
          600: '#6e6052',
          700: '#564a40',
          800: '#3c342d',
          900: '#29231e',
          950: '#181410',
        },
        slate: {
          50: '#faf7f3',
          100: '#f3ede4',
          200: '#e6dccf',
          300: '#d2c3b1',
          400: '#b29f8b',
          500: '#8b7a69',
          600: '#6e6052',
          700: '#564a40',
          800: '#3c342d',
          900: '#29231e',
          950: '#181410',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
