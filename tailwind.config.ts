import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // primary: '#2563eb',
        // secondary: {
        //   '600': '#475569',
        //   '600-dark': '#94a3b8',
        //   '700': '#334155',
        //   '700-dark': '#cbd5e1',
        //   '900': '#0f172a',
        //   '900-dark': '#f1f5f9',
        // },
        // muted: '#64748b',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
