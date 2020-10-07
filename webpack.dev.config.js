const path = require('path')
// const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: path.resolve(__dirname,'src/index.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/', //ojo
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        open: true,
        port: 3000,
        historyApiFallback: true //ojo
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // {
                    //     loader: MiniCSSExtractPlugin.loader    
                    // },
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'file-loader',  // 'url-loader',
                    options: {
                        outputPath: 'assets/', //limit: 90000,
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
        // new MiniCSSExtractPlugin({
        //     filename: 'css/[name].css'
        // })
    ],
    // //Para produccion:
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 0,
    //         name: 'commons'
    //     }
    // }
}