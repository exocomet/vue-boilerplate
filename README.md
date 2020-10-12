# Vue Boilerplate

> Simple Vue.js boilerplate.

This is a very simple boilerplate repository for a Vue.js app.
It provides a basic Vuex store as well. As bundling tool I
prefer rollup.js.

## Installation

Clone this repo and link it with npm to your development environment.

```bash
npm install
```

## Build

```bash
npm run build
```

### Unit testing

Code testing is done with [AVA](https://github.com/avajs/ava). It is necessary to install the
package `esm`.

```bash
npm install esm --save-dev
```

Add this to the ava configuration in `package.json`.

```json
{
  "ava": {
    "require": [
      "esm"
    ]
  }
}
```

Run the AVA tests.

```bash
npx ava
```

Debugging tests with VS Code [link](https://github.com/avajs/ava/blob/master/docs/recipes/debugging-with-vscode.md)

## Dependencies

See `package.json`.

## License

MIT
