const path = require("path");
const phaserModulePath = path.join(__dirname, "/node_modules/phaser/");
const phaser = path.join(phaserModulePath, "dist/phaser.js");

module.exports = {

    mode: 'development', // "production" | "development" | "none"

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/app/index.ts',

    output: {
        path: path.resolve(__dirname, "src/dist"),
        filename: "index.js",
        publicPath: "/src/dist/",
    },
    target: 'node',

    module: {
        rules: [
            //.tsがつくファイルを探索し、Typescriptとして読み込む(ts-loader)
            { test: /\.ts$/, loader: "ts-loader", exclude: "/node_modules/" },
        ]
    },
      //開発用サーバを立てるときの設定
    devServer: {
        static: {
            directory: path.resolve(__dirname, "src"),
        },
        host: "127.0.0.1",
        port: 5500,
        open: true
    },
    // パス解決のための設定で、import 文で ライブラリ読み込みに必要
    resolve: {
        modules: [
        "node_modules", // node_modules 内も対象とする
        ],
        extensions: [ // 拡張子
        '.ts',
        '.js'
        ],
        alias: {
            phaser: phaser // プラスPhaserのモジュールもパス解決
        }
    }
};