# webpack-webgl-boilerplate

This is some boilerplate I wrote to easily start new WebGL projects without having to set up a build
tool chain. It makes use of [Babel](https://github.com/babel/babel-loader) and
[webgl-glsl-loader](https://github.com/grieve/webpack-glsl-loader) to compile JavaScript and GLSL
together into a final JavaScript module.

## Requirements

* npm

## Install

1. Download the latest release from the [Releases](https://github.com/daleee/webpack-webgl-boilerplate/releases) page.
2. Unzip the code to where you want your project to live.
3. Run `npm install` to install dependencies.

## Usage

The following commands are defined in `package.json`:

#### `npm run build`

Build a production version of `bundle.js` into `dist/`.

#### `npm run watch`

Watch files in `src/` for changes, recompile on change.

#### `npm run dev`

Run a development server at `http://localhost:8080/`. This also will watch & recompile on file changes.

## License
[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)

## TODO
- [x] Setup instructions
- [x] Example of usage
- [ ] Better production builds
