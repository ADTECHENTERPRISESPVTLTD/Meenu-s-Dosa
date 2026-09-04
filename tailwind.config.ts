import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#D94801',
          'orange-hover': '#BF3D00',
          'orange-light': '#FFF0E6',
          gold: '#F59E0B',
          'gold-light': '#FEF3C7',
          cream: '#FFF8ED',
          'cream-dark': '#FDF2DE',
          'cream-card': '#FFFDF9',
          brown: '#241A14',
          'brown-light': '#4A3B32',
          'brown-muted': '#78685E',
          green: '#2F6B3C',
          'green-light': '#EBF7EE',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -1px rgba(36, 26, 20, 0.06), 0 1px 3px -1px rgba(36, 26, 20, 0.04)',
        'warm-md': '0 6px 18px -2px rgba(36, 26, 20, 0.08), 0 3px 6px -2px rgba(36, 26, 20, 0.05)',
        'warm-lg': '0 12px 28px -4px rgba(36, 26, 20, 0.12), 0 6px 10px -3px rgba(36, 26, 20, 0.06)',
        'warm-xl': '0 20px 40px -6px rgba(36, 26, 20, 0.16)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
