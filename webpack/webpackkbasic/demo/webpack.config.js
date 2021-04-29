const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
// 引入进来的构造函数-VueLoaderPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    // 编译模式-development/production
    mode: 'development',
    // production减小打包出来的体积
    // mode:'production'

    // 入口文件绝对路径-要打包的 JavaScript 文件
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'), // 输出文件存放路径
        filename: 'bundle.js' // 输出文件名称
    },
    // 修改配置文件，告知 dev server，从什么位置查找文件
    // devServer: {
    //     contentBase: './dist',
    // },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [
            { test:/\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test:/\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test:/\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                // 字体格式选择较多的原因是始终没有一个能在所有的浏览器上通用.故必须使用多种字体的方案来保持用户跨平台的一致性体验
                test:/\.png|jpg|JPG|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: ['url-loader?limit=13281']
            },
            { test:/\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test:/\.vue$/, use: ['vue-loader'] },
        ]
    }
}