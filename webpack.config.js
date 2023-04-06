const path = require ('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'awesome.js',
        path: path.resolve(__dirname, 'dist'),
    },

module: {
    rules: [
        {
            test:/\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',

            ]
        }

    ],
},

};

Plugins: [
    new bundleAnalyzerPlugin()
],

devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000
}

