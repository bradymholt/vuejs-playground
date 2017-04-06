var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/boot.ts'
    },
    output: {
        filename: 'build.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.template.html', inject: true })
    ]



}
