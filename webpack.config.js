var path = require('path');
var webpack = require('webpack');
var nodeModulesDir = path.resolve(__dirname, '../node_modules');

var config = {
    entry: {
        app: path.resolve(__dirname, './main.js'),
        vendor: [
            'angular',
            'angular-animate',
            'angular-aria',
            'angular-messages',
            'angular-sanitize',
            'angular-ui-router',
            'angular-ui-bootstrap',
            'angular-translate',
            'angular-translate-loader-static-files'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        })
    ]
};



module.exports = config;