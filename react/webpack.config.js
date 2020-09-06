const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home:path.resolve(__dirname,'src','js','index.js'),
},
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: `js/[name].js`
    },
    devServer: {
        hot: true,
        open:true,
        port:9000
    },

    module:{
        rules:[
            {
                test: /\.js$/i,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                     'css-loader'
                    ],
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Mi titulo asombroso',
            template: path.resolve(__dirname,'src','index.html')
        })
    ]
}