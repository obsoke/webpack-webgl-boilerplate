var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var ENTRY_PATH = path.resolve(ROOT_PATH, 'src/js/main.js');
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var JS_PATH = path.resolve(ROOT_PATH, 'src/js');
var TEMPLATE_PATH = path.resolve(ROOT_PATH, 'src/index.html');
var SHADER_PATH = path.resolve(ROOT_PATH, 'src/shaders');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: ENTRY_PATH,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'WebGL Project Boilerplate',
            template: TEMPLATE_PATH,
            inject: 'body'
        })
    ],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    resolve: {
        root: [JS_PATH, SRC_PATH]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: JS_PATH,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            },
            {
                test: /\.glsl$/,
                include: SHADER_PATH,
                loader: 'webpack-glsl'
            }
        ]
    },
    debug: debug,
    devtool: debug ? 'eval-source-map' : 'source-map'
};
