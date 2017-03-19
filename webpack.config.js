const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    // resolve: {
    //     alias: {
    //         "TweenLite": __dirname + '/node_modules/gsap/src/uncompressed/TweenLite.js',
    //         "TweenMax": __dirname + '/node_modules/gsap/src/uncompressed/TweenMax.js',
    //         "TimelineLite": __dirname + '/node_modules/gsap/src/uncompressed/TimelineLite.js',
    //         "TimelineMax": __dirname + '/node_modules/gsap/src/uncompressed/TimelineMax.js',
    //         // "scrollmagic": __dirname + '/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
    //         "animation.gsap": __dirname + '/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',
    //         "debug.addIndicators": __dirname + '/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
    //     }
    // },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devServer: { inline: true },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: './index.html' })
    ]
}
