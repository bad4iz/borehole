const webpack = require('webpack');
const Uglify = require("uglifyjs-webpack-plugin");

module.exports = () => {
    return {
        plugins: [
            new Uglify({
                compress: {
                    warnings: false,
            
                }
            })
        ]
    };
};
