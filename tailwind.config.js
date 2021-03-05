module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['Poppins'],
    },
    backgroundColor: theme => ({
      'bgmain' : '#ffb6a6',
      'bgmain2' : '#ff7f63',
    }),
    extend: {
      spacing: {
        '100' : '30rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
