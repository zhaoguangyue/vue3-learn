const path = require('path');
const webpack = require('webpack')
module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    module: {
        rules: [
            {
                test: '/\.js$/',
                use: "babel-loader"
            }
        ]
    },
}