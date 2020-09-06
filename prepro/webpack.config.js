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
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options:{
                        limit: 90000,
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.js$/i,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                     'css-loader',
                     'less-loader'
                    ],
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                     'css-loader',
                     'sass-loader'
                    ],
            },
            {
                test: /\.styl$/i,
                use: [
                    'style-loader',
                     'css-loader',
                     'stylus-loader'
                    ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
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