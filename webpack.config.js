const path = require( 'path' );module.exports = {
    context: __dirname,
    entry: './src/main.js',
    output: {
        path: path.resolve( __dirname, 'src' ),
        filename: 'index.js',
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