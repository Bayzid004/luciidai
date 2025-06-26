/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xs: '280px', // little devices, phones
      sm: '640px', // tablets & small desktops
      md: '768px', // medium devices (tablets in landscape)
      lg: '1024px', // laptops, standard desktops
      xl: '1280px', // larger desktops
      '2xl': '1536px' // big screens, but under your max width
    },
    extend: {
      spacing: {
        sideGutter: '285px',
        sideGutterMedium:'36px',
        sideGutterSmall:'30px'
      },
      fontSize: {
        // 'xl':'24px',
        // '2xl':'30px',
        // '3xl':'36px',
        // '4xl':'40px',
        // '5xl':'50px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0px',
          sm: '0px',
          md: '0px',
          lg: '0px',
          xl: '0px',
          '2xl': '0px'
        },
        screens: {
          xs: '280px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px'
        }
      },
      colors: {
        primary: {
          DEFAULT: '#BD7D38',//orange-brown main color
          50: '#E6F3F2',
          100: '#C0E1E0',
          200: '#99D0CE',
          300: '#73BEBC',
          400: '#4CACAA',
          500: '#188B89',
          600: '#00787A',
          700: '#006564',
          800: '#188B89'
        },
        secondary: {
          DEFAULT: '#049E43',
          50: '#E2F4E9',
          100: '#BFE8CE',
          200: '#9ADCB2',
          300: '#74D096',
          400: '#4FC47B',
          500: '#049E43',
          600: '#038B3A',
          700: '#027632',
          800: '#06602C',
          900: '#04622C'
        },
        info: {
          DEFAULT: '#33475B',
          50: '#E5EAF0',
          100: '#BCC6D3',
          200: '#94A1B6',
          300: '#6B7C99',
          400: '#42577D',
          500: '#33475B',
          600: '#2A3A4A',
          700: '#1E2938',
          800: '#010F1C',
          900: '#57575A'
        },
        success: {
          DEFAULT: '#4CAF50',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C'
        },
        warning: {
          DEFAULT: '#FAD04F',
          50: '#FFF6E1',
          100: '#FFECB3',
          200: '#FFE184',
          300: '#FFD655',
          400: '#FCCC29',
          500: '#FAD04F',
          600: '#E0B647',
          700: '#C69C3F'
        },
        danger: {
          DEFAULT: '#DC0000',
          50: '#FFE1E1',
          100: '#FFB3B3',
          200: '#FF8585',
          300: '#FF5656',
          400: '#FF2929',
          500: '#DC0000',
          600: '#B20000',
          700: '#8A0000'
        },
        dark: {
          DEFAULT: '#1A1A1A',
          50: '#D9D9D9'
        }
      }
    }
  },
  plugins: []
}
