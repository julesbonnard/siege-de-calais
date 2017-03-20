const webpackMerge = require('webpack-merge')
const commonConfig = require('./base.js')

module.exports = (env) => {
    return webpackMerge(commonConfig(), {
        output: {
            publicPath: '/'
        },
        module: {
            rules: [{
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
            }]
        },
        devServer: {
            inline: true,
            historyApiFallback: true,
            noInfo: false,
            stats: 'minimal'
        }
    })
}
