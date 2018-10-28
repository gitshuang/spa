const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const indexExtractCss = new ExtractTextPlugin('[name].[contenthash].css')
// const detailExtractCss = new ExtractTextPlugin('[name].[contenthash].css')

//const extractCSS = new ExtractTextPlugin('css.css');

const extractLESS = new ExtractTextPlugin('[name].css');



module.exports  = {
    entry:path.resolve(__dirname, "src/rooter.js"),
    // {
    //     index:path.resolve(__dirname, "src/index/index.js"),
    //     detail:path.resolve(__dirname, "src/detail/index.js")
    // },
    // devtool: 'inline-source-map',

    output: {
        filename: 'index.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react'],
                                plugins: ['@babel/plugin-proposal-class-properties']
                            }
                        }
                    },
                    {
                        test:/\.less$/,
                        use:extractLESS.extract([ 'css-loader', 'less-loader' ])

 
                        // use: [
                        //         {
                        //             loader:"style-loader"
                        //         },
                        //         {
                        //             loader:"css-loader"
                        //         },
                        //         {
                        //             loader:"less-loader"
                        //         }
                        // ]
                    },
                    
                    // {

                    //     test: /\.css$/,
                    //     use: [ 'style-loader', 'css-loader' ]
                      
                    // }

        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin( {
            filename:'index.html',
            template: path.join(__dirname,'src','index.html') ,
            inject: true,
            minify: {
               removeComments: true,
               collapseWhitespace: true
            }
        }),
        extractLESS
    ]

}
