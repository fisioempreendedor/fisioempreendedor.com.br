import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {},
        },
        dark: {
          colors: {
            background: '#111010',
            primary: '#ffffff',
            secondary: '#FBBC00',
            foreground: '#d4d4d4',
          },
          layout: {},
        }
      }
    })
  ]
}
export default config