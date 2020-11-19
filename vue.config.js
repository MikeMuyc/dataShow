const path = require("path");
const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css', 'json'];
const tsImportPluginFactory = require('ts-import-plugin');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: true,
    publicPath:'./',
    transpileDependencies: [
        /vue-ol/gi,
        'vue-echarts',
        'resize-detector'
    ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('autoprefixer')(),
                ]
            }
        }
    },

    chainWebpack: config => {
        config.resolve.alias
            .set("@datashow", resolve("src"))
    },
    devServer: {
        port:8048,
        proxy: {
            "/api/": {
                //target: "http://172.18.20.106:5117",
                target: "http://111.0.124.231:5117", //线上
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },

        }
    },
    configureWebpack: {
        // devtool: false,
        optimization: {
            splitChunks: {
                chunks: 'async',
                minSize: 1000,
                minChunks: 1,
                maxAsyncRequests: 10,
                maxInitialRequests: 5,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                    },
                    default: {
                        minChunks: 1,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                    dll: {
                        test: /[\\/]node_modules[\\/](vue|vue-router|vuex|iview)[\\/]/,
                        name: 'dll',
                        chunks: 'all',
                    },
                },
            },
        },
        plugins: [

            new CompressionWebpackPlugin({
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                deleteOriginalAssets: false
            }),
            new WebpackNotifierPlugin({alwaysNotify: true}),
            /*new BundleAnalyzerPlugin({
                analyzerPort: 6543
            })*/
        ]
    },
};
