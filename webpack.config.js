module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    resolve: {
        root: [__dirname + '/src/js', __dirname + '/src']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            },
            {
                test: /\.glsl$/,
                loader: 'webpack-glsl'
            }
        ]
    }
};
