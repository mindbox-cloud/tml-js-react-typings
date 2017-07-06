module.exports = {
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    entry: "./ts/index",
    output: {
        filename: "./js/index.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map"
};