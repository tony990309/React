//需要靠 path的 api來搬移檔案
const path = require("path");
//開始設定
module.exports = {
    //給檔案來源
    entry: "./src/blog_index.js",
    //輸出位置與名稱
    output: {
        path: path.join(__dirname, "/blog"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/, //2. 偵測所有 js 結尾的檔案
            exclude: /node_modules/, //3.排除 node_modules
            use: {
                loader: 'babel-loader' //1. 使用 babel-loader
            }
        }]
    }
};