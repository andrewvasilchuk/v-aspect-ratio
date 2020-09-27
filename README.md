# v-aspect-ratio

> Vue.js directive for setting an aspect ratio

`1.x` documentation can be found [here](https://github.com/andrewvasilchuk/v-aspect-ratio/tree/1.x).

![Computer screens with different aspect ratios](./assets/img.jpg)

- [v-aspect-ratio](#v-aspect-ratio)
  - [Installation](#installation)
    - [Via NPM](#via-npm)
    - [Via Yarn](#via-yarn)
    - [Directly in browser](#directly-in-browser)
  - [Initialization](#initialization)
    - [As a global plugin](#as-a-global-plugin)
    - [As a global directive](#as-a-global-directive)
    - [As a local directive](#as-a-local-directive)
    - [As a Nuxt.js SSR directive](#as-a-nuxtjs-ssr-directive)
    - [Directly in browser](#directly-in-browser-1)
  - [Usage](#usage)
  - [Demo](#demo)
  - [Tests](#tests)
  - [Development](#development)
  - [Build](#build)
  - [License](#license)

## Installation

### Via NPM

```bash
$ npm install v-aspect-ratio --save
```

### Via Yarn

```bash
$ yarn add v-aspect-ratio
```

### Directly in browser

```html
<script src="https://unpkg.com/v-aspect-ratio"></script>
```

## Initialization

### As a global plugin

It must be called before `new Vue()`

```js
import Vue from 'vue'
import AspectRatio from 'v-aspect-ratio'

Vue.use(AspectRatio)
```

### As a global directive

```js
import Vue from 'vue'
import { directive } from 'v-aspect-ratio'

Vue.directive('aspect-ratio', directive)
```

### As a local directive

```javascript
import { directive } from 'v-aspect-ratio'

export default {
  name: 'YourAwesomeComponent',
  directives: {
    'aspect-ratio': directive,
  },
}
```

### As a Nuxt.js SSR directive

```js
// nuxt.config.js

const {
  directive,
} = require('v-aspect-ratio/dist/v-aspect-ratio.ssr.common.js')

module.exports = {
  // ...
  render: {
    bundleRenderer: {
      directives: {
        'aspect-ratio': directive,
      },
    },
  },
  // ...
}
```

### Directly in browser

```html
<!-- As a global directive -->
<script>
  Vue.use(VAspectRatio.default)
  new Vue({
    // ...
  })
</script>
<!-- As a local directive -->
<script>
  new Vue({
    // ...
    directives: { 'aspect-ratio': VAspectRatio.directive },
    // ...
  })
</script>
```

## Usage

```html
<template>
  <div>
    <div v-aspect-ratio="'16:9'"></div>
    <div v-aspect-ratio="'4:3'"></div>
  </div>
</template>
```

## Demo

[Demo](https://andrewvasilchuk.github.io/v-aspect-ratio)

[![Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ko425ro4k7)

## Tests

[`fest`](https://jestjs.io) and [`@vue/test-utils`](https://vue-test-utils.vuejs.org) is used for unit tests.

You can run unit tests by running the next command:

```bash
npm run test
```

## Development

1. Clone this repository
2. Install the dependencies running `yarn install` or `npm install` command
3. Start a development server using `npm run dev` command

## Build

To build the production ready bundle simply run `npm run build`:

After the successful build the following files will be generated in the `dist` folder:

```
├── plugin
  ├── index.d.ts
├── directive.d.ts
├── helpers.d.ts
├── index.d.ts
├── v-aspect-ratio.common.js
├── v-aspect-ratio.esm.js
├── v-aspect-ratio.js
├── v-aspect-ratio.min.js
├── v-aspect-ratio.ssr.common.js
├── v-aspect-ratio.ssr.esm.js
├── v-aspect-ratio.ssr.js
├── v-aspect-ratio.ssr.min.js
```

## License

[MIT](http://opensource.org/licenses/MIT)
