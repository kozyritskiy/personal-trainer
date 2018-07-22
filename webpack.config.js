const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            Swiper: 'swiper'
        })
    ],
    output: {
        filename: 'main.js'
    }
};