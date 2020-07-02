const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'app.[hash].js',
        path: path.resolve(__dirname, 'target/classes/static'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'babel-loader' },
            { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
            { test: /\.(png|svg|jpe?g)$/, use: 'file-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/assets/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:8080'
        }
    }
}
