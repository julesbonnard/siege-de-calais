const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = () => {
    return {
        context: path.resolve(__dirname, '..'),
        entry: './src/app.js',
        devtool: 'cheap-module-source-map',
        output: {
            path: path.resolve(__dirname, '..', 'dist'),
            filename: '[name].[chunkhash].js',
            sourceMapFilename: '[name].map'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'url-loader?limit=10000', {
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                                progressive: true
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            optipng: {
                                optimizationLevel: 4
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 3
                            }
                        }
                    }
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            }, {
                test: /\.(webm|mp4|mp3|m4v)$/,
                loader: 'file-loader'
            }, {
                test: /\.html$/,
                loader: 'html-loader?attrs[]=img:src&attrs[]=video:src&attrs[]=source:src&attrs[]=audio:src'
            }]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function(module) {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                chunksSortMode: 'dependency'
            })
        ]
    }
}
