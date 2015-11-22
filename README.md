# webpack-webgl-boilerplate

This is some boilerplate I wrote to easily start new WebGL projects without having to set up a build
tool chain. It makes use of [Babel](https://github.com/babel/babel-loader) and
[webgl-glsl-loader](https://github.com/grieve/webpack-glsl-loader) to compile JavaScript and GLSL
together into a final JavaScript module.

## Requirements

* npm
* webpack (globally installed)
* webpack-dev-server (globally installed)

## Install

1. Download the repository: `curl -L https://github.com/daleee/webpack-webgl-boilerplate/archive/master.zip > webpack_webgl.zip`
2. Unzip the code somehwere.
3. When you want to use it: `cp -R /path/to/webpack/webgl/. mynewDir/`
4. Run `npm install` to install dependencies.

## Usage

The following commands are defined in `package.json`:

#### `npm run build`

Build a production version of `bundle.js` into `dist/`.

#### `npm run watch`

Watch files in `src/` for changes, recompile on change.

#### `npm run dev-server`
(Requires `webpack-dev-server`)

Run a development server at `http://localhost:8080/webpack-dev-server/`. This also will watch & recompile on file changes.

## License
[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)

## TODO
- [ ] Setup instructions
- [ ] Example of usage
