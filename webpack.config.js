var path = require('path');

module.exports = {
    mode:"development",
    entry: './src/index',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, and js files.
            test: /\.(tsx?)|(js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    }

    // module: {
    //     rules: [{
    //       test: /\.tsx?$/,
    //       loader: 'awesome-typescript-loader',
    //       exclude: /node_modules/,
    //       query: {
    //         declaration: false,
    //       }
    //     }]
    //   }
};