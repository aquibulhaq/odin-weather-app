import js from '@eslint/js';
import globals from 'globals';
import {defineConfig, globalIgnores} from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import googleConfig from 'eslint-config-google';

const {
  'valid-jsdoc': _validJsDoc,
  'require-jsdoc': _requireJsDoc,
  ...googleRules
} = googleConfig.rules;

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {js},
    extends: ['js/recommended'],
    rules: {
      ...googleRules,
      'no-unused-vars': ['error', {args: 'none', ignoreRestSiblings: true}],
    },
  },
  {files: ['src/**/*.js'], languageOptions: {globals: globals.browser}},
  {
    files: ['webpack.*.js', 'eslint.config.js'],
    languageOptions: {globals: globals.nodeBuiltin},
  },
  eslintConfigPrettier,
]);
