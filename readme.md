# Tweeter Feed

**Features**

- 👏🏼 Next 9
- 🌊 Custom server, Document and App
- ⌨️ Type safety using TypeScript in strict mode
- 💄 Write SCSS & future CSS with PostCSS + preset-env
- 👀 Lint your code with TSLint & Stylelint
- 🌈 Prettier for consistent code style
- 🔨 Jest + Enzyme for tests
- ⚙️ Editorconfig file for consistent indents

## Getting started

Before you can start developing your awesome application you need to install the project's dependencies. Make sure you have at least Node 10 and installed module dependencies by:

```sh
$ npm install
```

### ⌨️ Development

Once all dependencies have been installed you can start development. To start a development server on [http://localhost:3000](http://localhost:3000) run:

```sh
$ npm run dev
```

Or start a development server with docker on [http://localhost:3006](http://localhost:3006) run:

```sh
$ docker-compose up twf-web
```

### 🖥 Production

To run your application in production make sure to run a build first:

```sh
$ npm run build
```

And then start you application with a provided port number (defaults to 3000 if not provided):

```sh
$ PORT=8080 npm run start
```

### 🖨 Static

You can export your application to a static website as well:

```sh
npm run export
```

This will render static HTML pages into `./out`

### 🧐 Linters

There are three linters: one for CSS, one for TypeScript and one for type safety. You can use each of them separately using the following commands:

```sh
$ npm run lint:css
$ npm run lint:ts
$ npm run lint:types
```

TIP: To get the most out of your linters install the corresponding (Stylelint, TSLint) plugins for your editor or IDE

**Prettier**

Prettier helps you to enforce consistent (opinionated) code style. You can tell your editor to format you code when you save a file. If you are not able to do this, you can run prettier manually using:

```sh
$ npm run prettier
```

### 🤖 Tests

You can write your tests using Jest and Enzyme. You can run all test with the following command

```sh
$ npm run test
```

## Modules

### TypeScript

TypeScript and Babel are pre-configured with custom module resolvers.
This means you can use absolute imports with custom namespaces by default for the following modules:

```js
/* import common library */
import lib from '@common/<folder>/<lib>'
/* import component */
import Component from '@components/<folder>/<Component>'
/* import container */
import Container from '@containers/<folder>/<Container>'
/* import store files */
import { Action } from '@store/<folder>/<Action>'
```

### SCSS

The path `./src/common/css` is configured as an included path for our scss loader.
This means you can import any of this folder's files directly without the relative or absolute path:

```css
@import 'variables';
@import 'colors';
```
