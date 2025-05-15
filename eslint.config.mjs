import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';

export default defineConfig([
  globalIgnores(['node_modules', 'storybook-static', 'package-lock.json']),
  { files: ['**/*.{js,mjs,cjs,ts}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { tseslint },
    extends: tseslint.configs.recommended,
    rules: { '@typescript-eslint/no-explicit-any': 'warn' },
  },
  { files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: ['json/recommended'] },
  { files: ['**/*.jsonc'], plugins: { json }, language: 'json/jsonc', extends: ['json/recommended'] },
  { files: ['**/*.json5'], plugins: { json }, language: 'json/json5', extends: ['json/recommended'] },
]);
