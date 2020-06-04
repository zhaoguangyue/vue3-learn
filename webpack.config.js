const path = require('path');
const webpack = require('webpack')
module.exports = {
    mode: "development",
    entry: ["./src/reactive.js"],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: "Vue",
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