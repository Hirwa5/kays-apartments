/** @type {import('tailwindcss').Config} */
// Design tokens carried over from the BAGIRE frontend.
// Colour names were renamed so they describe what they are:
//   ink    = main dark text   (was "ivory" in BAGIRE)
//   canvas = page background  (was "basalt" in BAGIRE)
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        surface: '#F6F7F9',
        'surface-2': '#EEF0F3',
        hairline: '#E1E4EA',
        ink: '#1E2530',
        muted: '#6B7480',
        rule: 'rgba(30,37,48,0.08)',
        accent: '#475569',
        'accent-soft': '#5B6E8C',
        gold: '#B8863A',
        'gold-soft': '#C9A25C',
        'gold-deep': '#7A5A1E',
        whatsapp: '#25D366',
        'whatsapp-dark': '#1DA851',
        badge: '#E5383B'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        soft: '0 12px 28px rgba(30,37,48,0.10)',
        glass: '0 8px 32px rgba(30,37,48,0.12)',
        dialog: '0 24px 80px rgba(30,37,48,0.30)',
        panel: '0 1px 3px rgba(27,30,38,0.04), 0 4px 16px rgba(27,30,38,0.03)'
      },
      borderRadius: {
        DEFAULT: '10px',
        '2xl': '16px',
        '3xl': '24px'
      },
      transitionTimingFunction: {
        'in-out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      keyframes: {
        'hero-progress': {
          from: { width: '0%' },
          to: { width: '100%' }
        }
      },
      animation: {
        // duration is set on the element to match heroSlideInterval
        'hero-progress': 'hero-progress 5s linear forwards'
      }
    }
  },
  plugins: []
};
