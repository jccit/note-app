const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV == "production" ? "production" : "development",
    entry: { main: "./src/main.js" },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/build/",
        path: path.resolve(__dirname, 'dist/build')
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "initial",
                    name: "vendor",
                    test: /node_modules/,
                }
            }
        },
        runtimeChunk: {
            name: "runtime"
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};