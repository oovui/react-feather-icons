const path = require('path'); // 引入‘path’，为了在这里使用绝对路径，避免相对路径在不同系统时出现不必要的问题
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const mode = isDev?"development":"production";

const config = {
  mode: mode,
  // 应用入口
  entry: {
    main: path.join(__dirname, './docs/index.js')  // webpack 默认入口文件
  },
  //entry: './index.js',
  // 输出目录
  output: {
    filename: '[name].[hash].js',  //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
    path: path.join(__dirname, 'dist/'), // 打包好之后的输出路径
  },
  // 配置loader
  module: {
    rules: [
      {
        test: /.jsx$/, //使用loader的目标文件。这里是.jsx
        loader: 'babel-loader',
        exclude:/node_modules/,
        include: [
          path.resolve(__dirname, "docs")
        ]

      },
      {
        test: /.(js)$/, //使用loader的目标文件。这里是.js
        loader: 'babel-loader',
        exclude:/node_modules/,
        include: [
          path.resolve(__dirname, "docs")
        ]
      },{
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        },{
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        },{
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      }
    ]
  },
  plugins:[
    //生成一个html页面，同时在webpack编译的时候。
    //把我们所生成的entry都注入到这个html页面中,路径都是根据我们output配置的来走的。
    new HtmlWebpackPlugin({
      title: 'react feather icons docs',
      filename: 'index.html',
      template:'assets/index.html'
    }),
    // 热加载：dev-server.js:7 Uncaught Error: [HMR] Hot Module Replacement is disabled
    new webpack.HotModuleReplacementPlugin()
  ] 

}

if (isDev) {
  config.devServer = {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9006
  }
}

module.exports = config;
