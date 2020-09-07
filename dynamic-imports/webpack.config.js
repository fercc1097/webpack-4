const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home:path.resolve(__dirname,'src','js','index.js'),
        contacto:path.resolve(__dirname,'src','js','contacto.js'),
},
    mode: 'production',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: `js/[name].js`,
        publicPath: 'dist/',
        chunkFilename: 'js/[id].[chunkhash].js'
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
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                     'css-loader',
                     'less-loader'
                    ],
            },
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                     'css-loader',
                     'sass-loader'
                    ],
            },
            {
                test: /\.styl$/i,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                     'css-loader',
                     'stylus-loader'
                    ],
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },                    
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
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].[chunkhash].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Mi titulo asombroso',
            template: path.resolve(__dirname,'index.html')
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        })
    ],
}
