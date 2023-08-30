import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        eiko: ['var(--font-eiko)'],
        untitledsans: ['var(--font-utsans)'],

      },
      colors: {
        customGray: '#7C7C7C',
      },
      fontSize: {
        '5xl': '3rem', // Change the font size to your desired size
        '4xl': '2.5rem',
        '3xl': '2rem',
        '2xl': '1.5rem',
        'text-base': '1rem',
      },
      lineHeight: {
        '5xl': '3.425rem',  // Change the line height to your desired value
        '4xl': '3.425rem ',  // Change the line height to your desired value
        '3xl': '3.425rem ',  // Change the line height to your desired value
        '2xl': '3.425rem ',  // Change the line height to your desired value
        'text-base': '3.425rem',  // Change the line height to your desired value


      },
      margin: {
        'custom-top': '27rem', // Your custom margin value
      },
    },
  },
  plugins: [],
}
export default config
