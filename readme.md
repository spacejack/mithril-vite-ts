# Mithril / Typescript / Vite

This is a starter project for [Mithril](https://mithril.js.org/), Typescript, and [Vite](https://vite.dev/) local dev server for hot reloading and bundling.

The application entry point is at: `src/index.html`

All sources are referenced/imported from that file.

Files in the `public` folder are served directly during development.

URLs in source files that reference files in `public` should be prefixed with `/`. Eg. an image at `public/img/abc.png` would be referenced in an image tag like: `<img src="/img/abc.png"/>`

Assets (eg images) can also be placed in the `src` directory and `import`ed directly, in which case they will be included within CSS or JS bundles. Directly importing assets should be limited to small files with priority performance. Large files should go in `public`.

Builds will be created in a `dist` folder, and all public files will be copied there, along with all compiled bundles.

## Install

	npm install

### Recommended VSCode Extensions

* eslint
* stylelint
* PostCSS Intellisense Highlighting
* EditorConfig

(Or equivalents for your preferred editor/IDE.)

## Run & Develop

	npm run dev

Then go to the displayed localhost address in your browser

## Build Minified

	npm run build

Outputs site to `dist` folder.
