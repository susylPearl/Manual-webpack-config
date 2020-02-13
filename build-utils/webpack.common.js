const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader', 'ts-loader']
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.less', '.ts', '.tsx']
    },
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello Webpack bundled JavaScript Project',
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: './dist'
    }
}