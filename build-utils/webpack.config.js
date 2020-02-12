const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

module.exports = ({ env }) => {
    //const envConfig = require(`./webpack.${env}.js`); //get environment from script params
    console.log('process env variable', process.env.NODE_ENV);
    const envConfig = require(`./webpack.${process.env.NODE_ENV}.js`); //injected environment from Node
    return webpackMerge(commonConfig, envConfig);
}