const path = require( 'path' );
module.exports = {
    context: __dirname,
    entry: {
        main:'./src/main.js',
        cdn:'./index.full.js'
    },
    output: {
        path: path.resolve( __dirname, 'src' ),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
    }
};