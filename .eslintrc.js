module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 12,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
