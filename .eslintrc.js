module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  extends: [
    'eason',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['tailwindcss'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
}
