const webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: './src/js/app-bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
}

/*new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })*/