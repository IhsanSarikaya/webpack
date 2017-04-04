/*
Installation : npm i -g webpack

For the client side scripts we used the CommonJS module format,
but Webpack can also work with AMD modules. Whenever Webpack 2 comes out, it will support
ES6/ES2015 modules natively.

Web pack is case sensitive
*/

var path = require('path');

module.exports = {
    entry: {
        "app": './Scripts/main.js',
        "vendor": './Scripts/vendor.ts'
    },
    resolve: {
        "extensions": ['.ts', '.webpack.js', '.web.js', '.js']
    }, 
    devtool: 'source-map',
    module: {
        "loaders": [
            {
                test: /\.ts$/,
                "loader": 'awesome-typescript-loader'
            }
            //,
            //{
            //    test: /\.jsx?$/,
            //    exclude: [
            //        path.resolve(__dirname, '/node_modules/')
            //    ],
            //    loader: 'babel-loader'
            //}
        ]
    },
    output: {
        // the relative URL that the browser will use to reference our bundles
        publicPath: "/js/",
        path: path.join(__dirname, '/wwwroot/js/'),
        filename: '[name].build.js',
        sourceMapFilename: 'sourceMapFile.txt'
    }
};
