import copy from 'rollup-plugin-copy';
import vue from 'rollup-plugin-vue';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';

export default [{
  external: [
    'vue',
    'vuex',
  ],
  input: "./src/index.js",
  output: {
    file: "./build/bundle.js",
    format: 'iife',
    name: 'app',
    globals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
    },
  },
  plugins: [
    resolve(),
    replace({}),
    vue(/* options */),
    copy({
      targets: [{
        src: ['./src/index.html', './src/style.css'],
        dest: './dist'
      }, {
        src: './build/*',
        dest: './dist'
      }],
      overwrite: true,
      hook: 'writeBundle'
  })],
},];