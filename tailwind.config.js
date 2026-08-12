import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        display: ['"IBM Plex Sans Condensed"', '"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        mono:    ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        border: 'hsl(var(--border))',
        'border-strong': 'hsl(var(--border-strong))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary:   { DEFAULT: 'hsl(var(--primary))',   foreground: 'hsl(var(--primary-foreground))', deep: 'hsl(var(--primary-deep))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        destructive:{DEFAULT: 'hsl(var(--destructive))',foreground:'hsl(var(--destructive-foreground))'},
        muted:     { DEFAULT: 'hsl(var(--muted))',     foreground: 'hsl(var(--muted-foreground))' },
        accent:    { DEFAULT: 'hsl(var(--accent))',    foreground: 'hsl(var(--accent-foreground))' },
        popover:   { DEFAULT: 'hsl(var(--popover))',   foreground: 'hsl(var(--popover-foreground))' },
        card:      { DEFAULT: 'hsl(var(--card))',      foreground: 'hsl(var(--card-foreground))' },
        ink: 'hsl(var(--ink))',
        'ink-foreground': 'hsl(var(--ink-foreground))',
        'ink-mist': 'hsl(var(--ink-mist))',
        tick: 'hsl(var(--tick))',
        brass: 'hsl(var(--brass))',
        'brass-lit': 'hsl(var(--brass-lit))',
      },
      borderRadius: { lg: '0px', md: '0px', sm: '0px' },
      transitionTimingFunction: { editorial: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up':   { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: { 'accordion-down': 'accordion-down 0.2s ease-out', 'accordion-up': 'accordion-up 0.2s ease-out' },
    },
  },
  plugins: [tailwindcssAnimate],
};
