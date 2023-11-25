import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only'; // import the plugin

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife'
  },
  plugins: [
    svelte(),
    css({ output: 'bundle.css' }), // use the plugin
    resolve({
      exportConditions: ['svelte']
    })
  ]
};