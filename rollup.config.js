import copy from 'rollup-plugin-copy';
import vue from 'rollup-plugin-vue';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';



const external = [
  'vue',
  'vuex',
  'vue-router',
  'axios',
];

const globals = {
  'vue': 'Vue',
  'vuex': 'Vuex',
  'vue-router': 'VueRouter',
  'axios': 'axios',
};


const configFactory = function(options) {
  if (options.someVar) {
    console.log('foo');
  }

  let _replace = {
    '__VERSION__': '0.0.0', // import from package.json
    // '__BUNDLE_MODE__': options.inclTestData?'dev':'pub',
  };

  // must be the same string as the last 'folder' in the URL path
  // http://<host>/some/path/<appname>
  const __APP_NAME__ = "/";
  _replace['__APP_NAME__'] = __APP_NAME__

  let config = {
    external: external,
    input: "./src/index.js",
    output: {
      file: "./build/bundle.js",
      format: 'iife',
      name: 'app',
      globals: globals,
    },
    plugins: [
      resolve(),
      replace(_replace),
      vue(/* options */),
      copy({
        targets: [{
          src: ['./src/index.html', './src/style.css'],
          dest: options.dest
        }, {
          src: './build/*',
          dest: options.dest
        }],
        overwrite: true,
        hook: 'writeBundle'
    })],
  }
  return config;
}

export default [
  configFactory({
    dest: './dist',
    someVar: false,
  }),
];