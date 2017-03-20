const webpackMerge = require('webpack-merge')
const commonConfig = require('./base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = (env) => {
    return webpackMerge(commonConfig(), {
        output: {
            publicPath: './'
        },
        module: {
            rules: [{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            }]
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new ExtractTextPlugin('styles.css')
        ]
    })
}
